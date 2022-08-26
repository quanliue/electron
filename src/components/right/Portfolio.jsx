import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { CustomButton, SpaceBetweenDiv } from '../../StyledComponents';
import { Table } from 'react-bootstrap';
import { 
  Row, 
  Col, 
  Dropdown,
  DropdownButton
} from 'react-bootstrap';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import { CryptoList } from '../../constants/const';
import _ from 'lodash'
import { getAPIKey } from '../../constants/storage';
import axios from 'axios';
/**
* @author
* @class Portfolio
**/

const headerList = [
  "",
  "Type",
  "Ticker",
  "Quantity",
  "Buy price ($)",
  "Leverage ratio (:1)",
  "Current value"
];

const typeList = [
  {eKey:'stock', label:'NYSE stock'},
  {eKey:'crypto', label:'Crypto'},
];


export class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      typeIndexList: [], // index list
      tickerIndexList: [], // text list
      tickerStringList: [],
      quantityList:[],
      priceList:[],
      leverageList:[],
      curValList:[],
    }
  }

  componentDidMount() {
    let typeIndexList = [], tickerIndexList = [], tickerStringList=[];
    let quantityList = [], priceList = [], leverageList = [], curValList = [];

    Array.from({length: 12}).map((_, index) => {
      typeIndexList.push(0);
      tickerIndexList.push(0);
      tickerStringList.push('');
      quantityList.push(0);
      priceList.push(0);
      leverageList.push(0);
      curValList.push('');
    });

    this.setState({
      typeIndexList: typeIndexList,
      tickerIndexList: tickerIndexList,
      tickerStringList: tickerStringList,
      quantityList: quantityList,
      priceList: priceList,
      leverageList: leverageList,
      curValList: curValList,
    })
  }

  onSelectTypeList(index, typeIndex, event) {
    let typeIndexList = this.state.typeIndexList;
    let newTypeList = [];
    typeIndexList.map((item, idx) => {
      if(idx === index) {
        item = typeIndex;
      }
      newTypeList.push(item);
    });

    this.setState({
      typeIndexList: newTypeList,
    });
  }

  getType(index) {
    if(this.state.typeIndexList.length - 1 >= index) {
      return typeList[this.state.typeIndexList[index]].label;
    }
    return typeList[0].label;
  }

  onSelectTickerList(index, tickerIndex, event) {
    let tickerIndexList = this.state.tickerIndexList;
    let newTickerList = [];
    tickerIndexList.map((item, idx) => {
      if(idx === index) {
        item = tickerIndex;
      }
      newTickerList.push(item);
    })

    this.setState({
      tickerIndexList: newTickerList,
    })
  }

  getTicker(index) {
    if(this.state.tickerIndexList.length - 1 >= index) {
      return CryptoList[this.state.tickerIndexList[index]];
    }
    return CryptoList[0];
  }

  getPriceStyle(index) {
    if(this.state.curValList.length > index && this.state.curValList[index] !== '') {
      if(_.includes(this.state.curValList[index], 'invalid')) {
        return {color: 'red'}
      }
      return {color: 'green'}
    }

    return {color: 'white'}
  }

  getPrice(index) {
    return  this.state.curValList.length > index && this.state.curValList[index] !== ''
    ? `$${this.state.curValList[index]}` 
    : ''
  }

  onQuantity(index, e) {
    let quantities = [];
    this.state.quantityList.map((item, idx) => {
      if(index == idx) {
        quantities.push(e.target.value);
      }
      else {
        quantities.push(item);
      }
    })

    this.setState({
      quantityList: quantities
    })
  }

  onLeverage(index, e) {
    let leverages = [];
    this.state.leverageList.map((item, idx) => {
      if(index == idx) {
        leverages.push(e.target.value);
      }
      else {
        leverages.push(item);
      }
    })

    this.setState({
      leverageList: leverages
    })
  }

  onBuyPrice(index, e) {
    let prices = [];
    this.state.priceList.map((item, idx) => {
      if(index == idx) {
        prices.push(e.target.value);
      }
      else {
        prices.push(item);
      }
    })

    this.setState({
      priceList: prices
    })
  }

  onTickerStringChange(index, e) {
    let ticker = e.target.value;
    let tickers = [];
    this.state.tickerStringList.map((item, idx) => {
      if(index == idx) {
        item = ticker;
      }
      tickers.push(item);
    })

    this.setState({
      tickerStringList: tickers
    })
  }

  async onVerify() {
    let finnhubtoken = getAPIKey();
    let curVals = this.state.curValList;
    await Promise.all(
      this.state.typeIndexList.map(async (type, index) => {
        let quote, price;
        if(type == 0) {
          quote = this.state.tickerStringList[index];
          quote = quote.toUpperCase();
          if(quote !== '') {
            let res = await axios.get(
              `https://finnhub.io/api/v1/quote?symbol=${quote}&token=${finnhubtoken}`
            );
            price = res.data ? res.data.c : '';
            console.log("RES =>", res);
            if(price) {
              curVals[index] = price * Number(this.state.quantityList[index]) 
              * Number(this.state.priceList[index]) * Number(this.state.leverageList[index]);
            }
          }
        }
        else {
          quote = CryptoList[this.state.tickerIndexList[index]];
          if(quote != 'NONE') {
            let unix_time = Math.floor(Date.now() / 1000);
            let from = unix_time - 70;
            let to = unix_time - 10;
            console.log("REQ =>", quote, unix_time, from, to);
            let res = await axios.get(
              `https://finnhub.io/api/v1/crypto/candle?symbol=BINANCE:${quote}USDT&resolution=1&from=${from}&to=${to}&token=${finnhubtoken}`
            );
            price = res.data && res.data.c ? res.data.c[res.data.c.length - 1] : '';
            console.log("RES =>", res);
            if(price) {
              curVals[index] = price * Number(this.state.quantityList[index]) 
              * Number(this.state.priceList[index]) * Number(this.state.leverageList[index]);
            }
          }
        }
      }),
    )
    this.setState({
      curValList: curVals
    })
  }

  render() {
    return(
      <Fragment>
        <div className='d-flex flex-column'>
          <SpaceBetweenDiv>
            <CustomButton onClick={() => this.onVerify()}>
              Verfiy and save
            </CustomButton>
            <CustomButton>
              Clear all
            </CustomButton>
          </SpaceBetweenDiv>
          <div className='mt-3'>
            <Table responsive striped bordered hover>
              <thead>
                <tr>
                {
                  headerList.map((item, index) => <th key={index}>{item}</th>)
                }
                </tr>
              </thead>
              <tbody>
                {
                  Array.from({length: 12}).map((_, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <DropdownButton 
                            id="type" 
                            title={this.getType(index)} 
                            style={{width:'100%'}}
                            >
                              {
                                typeList.map((item, typeIdx) => 
                                  <DropdownItem 
                                    key={index} 
                                    eventKey={item.eKey} 
                                    onClick={(e) => this.onSelectTypeList(index, typeIdx, e)}
                                  >
                                    {item.label}
                                  </DropdownItem>
                                )
                              }
                          </DropdownButton>
                        </td>
                        <td>
                          {
                            (this.state.typeIndexList.length > index &&
                            typeList[this.state.typeIndexList[index]].eKey === 'crypto')
                            ?
                            <DropdownButton 
                              id="scrollDropDown" 
                              title={this.getTicker(index)} 
                              style={{width:'100%'}}
                              >
                                {
                                  CryptoList.map((item, idx) => 
                                    <DropdownItem 
                                      key={idx} 
                                      eventKey={item} 
                                      onClick={(e) => this.onSelectTickerList(index, idx, e)}
                                    >
                                      {item}
                                    </DropdownItem>
                                  )
                                }
                            </DropdownButton>
                            :
                            <input className='w-100' 
                              value={this.state.tickerStringList[index]}
                              onChange={(e) => {
                                this.onTickerStringChange(index, e)
                            }}/>
                          }
                        </td>
                        <td>
                          <input className='w-100' onChange={(e) => {this.onQuantity(index,e)}}
                          value={this.state.quantityList.length > index ? this.state.quantityList[index] : ''} />
                        </td>
                        <td>
                          <input className='w-100' onChange={(e) => {this.onBuyPrice(index, e)}} 
                          value={this.state.priceList.length > index ? this.state.priceList[index] : ''}
                          />
                        </td>
                        <td>
                          <input className='w-100' onChange={(e) => {this.onLeverage(index, e)}} 
                          value={this.state.leverageList.length > index ? this.state.leverageList[index] : ''}
                          />
                        </td>
                        <td style={this.getPriceStyle(index)}>
                        {
                          this.getPrice(index)
                        }
                        </td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </Table>
          </div>
        </div>
      </Fragment>
    )
  }
}


Portfolio.propTypes = {}