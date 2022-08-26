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
import { CryptoList, ForexList } from '../../constants/const';
// @ts-ignore
// import yahooFinance from 'yahoo-finance';

/**
* @author
* @class ForexCrypto
**/

const headerList = [
  "",
  "Type",
  "Symbol",
  "Rate (USD)"
];

const typeList = [
  {eKey:'forex', label:'Forex'},
  {eKey:'crypto', label:'Crypto'},
];


export class ForexCrypto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      typeIndexList: [], // index list
      cryptoIndexList: [], 
      forexIndexList: [],
    }
  }

  componentDidMount() {
    let typeIndexList = [], cryptoIndexList = [], forexIndexList = [];
    Array.from({length: 5}).map((_, index) => {
      typeIndexList.push(0);
      cryptoIndexList.push(0);
      forexIndexList.push(0);
    });

    this.setState({
      typeIndexList: typeIndexList,
      cryptoIndexList: cryptoIndexList,
      forexIndexList: forexIndexList
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
    let cryptoIndexList = this.state.cryptoIndexList;
    let newTickerList = [];
    cryptoIndexList.map((item, idx) => {
      if(idx === index) {
        item = tickerIndex;
      }
      newTickerList.push(item);
    })

    this.setState({
      cryptoIndexList: newTickerList,
    })
  }

  getCypto(index) {
    if(this.state.cryptoIndexList.length - 1 >= index) {
      return CryptoList[this.state.cryptoIndexList[index]];
    }
    return CryptoList[0];
  }

  getForex(index) {
    if(this.state.forexIndexList.length - 1 >= index) {
      return ForexList[this.state.forexIndexList[index]];
    }
    return ForexList[0];
  }

  render() {
    return(
      <Fragment>
        <div className='d-flex flex-column'>
          <SpaceBetweenDiv>
            <CustomButton>
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
                              title={this.getCypto(index)} 
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
                            <DropdownButton 
                              id="scrollDropDown" 
                              title={this.getForex(index)} 
                              style={{width:'100%'}}
                              >
                                {
                                  ForexList.map((item, idx) => 
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
                          }
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
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


ForexCrypto.propTypes = {}