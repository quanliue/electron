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
import axios from 'axios';
import { getAPIKey } from '../../constants/storage';
import _ from 'lodash'
/**
* @author
* @class StockCryptoWatchlist
**/

const headerList = [
  "",
  "Type",
  "Ticker",
  "Price"
];

const typeList = [
  {eKey:'stock', label:'NYSE stock'},
  {eKey:'crypto', label:'Crypto'},
];


export class StockCryptoWatchlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      typeIndexList: [], // index list
      tickerIndexList: [], // index list
      tickerStringList: [], // string list
      prices:[],
    }
  }

  componentDidMount() {
    let typeIndexList = [], tickerIndexList = [], tickerStringList = [], prices = [];
    Array.from({length: 12}).map((_, index) => {
      typeIndexList.push(0);
      tickerIndexList.push(0);
      tickerStringList.push('');
      prices.push('');
    });

    this.setState({
      typeIndexList: typeIndexList,
      tickerIndexList: tickerIndexList,
      tickerStringList: tickerStringList,
      prices: prices
    });
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

  async onVerifyWatchList() {
    let finnhubtoken = getAPIKey();
    let prices = this.state.prices;

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
            prices[index] = price;
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
            prices[index] = price;
          }
        }
      }),
    )
      console.log("RES11 =>", prices)
      this.setState({
        prices: prices
      })
  }

  getPriceStyle(index) {
    if(this.state.prices.length > index && this.state.prices[index] !== '') {
      if(_.includes(this.state.prices[index], 'invalid')) {
        return {color: 'red'}
      }
      return {color: 'green'}
    }

    return {color: 'white'}
  }

  getPrice(index) {
    return  this.state.prices.length > index && this.state.prices[index] !== ''
    ? `$${this.state.prices[index]}` 
    : ''
  }

  render() {
    return(
      <Fragment>
        <div className='d-flex flex-column'>
          <SpaceBetweenDiv>
            <CustomButton onClick={() => {this.onVerifyWatchList()}}>
              Verfiy and save
            </CustomButton>
            <CustomButton>
              Clear all
            </CustomButton>
          </SpaceBetweenDiv>
          <div className='mt-3'>
            <Table striped bordered hover>
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
                    return <tr key={index}>
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
                                  key={typeIdx} 
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
                      <td style={this.getPriceStyle(index)}>
                        {
                          this.getPrice(index)
                        }
                      </td>
                    </tr>
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


StockCryptoWatchlist.propTypes = {}