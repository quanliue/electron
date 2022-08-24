import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
// import { connect } from 'react-redux'
import { Row, Col, Dropdown,
  DropdownButton
} from 'react-bootstrap';
import { CustomButton } from '../../StyledComponents';
import {  
  FrontFaceIndex, 
  FrontFaceList, 
  TopFaceIndex, 
  TopFaceList, 
  wPasskeyTypes
} from '../../constants/const';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import CustomCheckBox from '../CustomCheckBox';
import RangeSlider from 'react-bootstrap-range-slider';

class StockCubeWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTopFaceIndex: TopFaceIndex.ETF,
      activeFrontFaceIndex: FrontFaceIndex.WatchList,
      showNetworkStatus: false,
      scrollTickers: false,
      overlayFontFace: false,
      brightness: 0,
    }
  }

  componentDidMount = () => {
    this.onSelectFrontFace = this.onSelectFrontFace.bind(this);
  }
  onSelectFrontFace = (index, event) => {
    this.setState({
      activeFrontFaceIndex: index
    })
  }

  onSelectTopFace = (index, event) => {
    this.setState({
      activeTopFaceIndex:index
    })
  }

  onChangeNetworkStatus = (checked) => {
    this.setState({
      showNetworkStatus:checked,
    })
  }

  onChangeBrightNess = (e) => {
    this.setState({
      brightness: e.target.value
    })
  }

  render() {
    return (
      <Fragment>
        <div className="grid-columns-3 align-center">
          {/* Select available Wifi network */}
          <div id='grid1'>
            Select top face display:
          </div>
          <DropdownButton 
            id="grid2" 
            title={TopFaceList[this.state.activeTopFaceIndex].label} 
            style={{width:'100%'}}
            >
              {
                TopFaceList.map((item, index) => 
                  <DropdownItem 
                    key={index} 
                    eventKey={item.eKey} 
                    onClick={(e) => this.onSelectTopFace(index, e)}
                  >
                    {item.label}
                  </DropdownItem>
                )
              }
          </DropdownButton>
          <div id='grid3' className='d-flex justify-left align-center'>
            <CustomCheckBox 
              name={'show_network_status'}
              label={'Show network status?'}
              checked={this.state.showNetworkStatus}
              onCheckStateChanged={(checked) => this.onChangeNetworkStatus(checked)}
            />
          </div>
          {/* Wifi Country Code: */}
          <div id='grid4'>
            Select front face display:
          </div>
          <DropdownButton 
            id="gird5" 
            title={FrontFaceList[this.state.activeFrontFaceIndex].label} 
            style={{width:'100%'}}
            >
              {
                FrontFaceList.map((item, index) => 
                  <DropdownItem 
                    key={index} 
                    eventKey={item.eventKey} 
                    onClick={(e) => this.onSelectFrontFace(index, e)}
                  >
                    {item.label}
                  </DropdownItem>
                )
              }
          </DropdownButton>
          <div id='grid6' className='d-flex justify-left align-center'>
            <CustomCheckBox 
              name={'scroll_tickers'}
              label={'Scrolling tickers'}
              checked={this.state.scrollTickers}
              onCheckStateChanged={(checked) => {
                this.setState({
                  scrollTickers: checked
                }
              )}}
              disabled={this.state.activeFrontFaceIndex === FrontFaceIndex.WorldClock}
            />
          </div>
          {/* Wifi passkey type */}
          <div id='grid7'>
            <label disabled={this.state.activeFrontFaceIndex === FrontFaceIndex.WorldClock}>
              Overlay small clock on font face:
            </label>
          </div>
          <div id='grid8' className='d-flex justify-left align-center'>
            <CustomCheckBox 
              name={'font_face'}
              label={''}
              checked={this.state.overlayFontFace}
              customStyle={{marginLeft: '0px'}}
              onCheckStateChanged={(checked) => {
                this.setState({
                  overlayFontFace: checked
                }
              )}}
              disabled={this.state.activeFrontFaceIndex === FrontFaceIndex.WorldClock}
            />
          </div>
          <div id='grid9'></div>
          
          {/* Save */}
          <div id='grid10'>
            Display brightness: Min
          </div>
          <RangeSlider
            value={this.state.brightness}
            onChange={(e) => {this.onChangeBrightNess(e)}}
          />
          <div id='grid21' style={{textAlign:'left'}}>
            Max
          </div>
        </div>
      </Fragment>
    )
  }
}

StockCubeWidget.propTypes = {
// your expected props
}

StockCubeWidget.defaultProps = {
// your default props
}

const mapStateToProps = (state) => ({
 // your redux state
  
})
const mapDispatchToProps = (dispatch) => ({
// your redux action
  
})
// export default connect(mapStateToProps, mapDispatchToProps)(StockCubeWidget)
export default StockCubeWidget;