import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Dropdown,
  DropdownButton
} from 'react-bootstrap';
import { CustomButton } from '../../StyledComponents';
import { countryCodeList, wPasskeyTypes } from '../../constants/const';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import _ from 'lodash';
import { connect } from 'react-redux';
import { 
  selectWifiNetwork,
  useThisNetwork,
  setWifiPassword,
  saveWifi,
  unSave,
} from '../../redux/actions';

/**
* @author
* @class WifiWidget
**/

class WifiWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeWifiKey:'auto',
      manualEntry: 'Please set using boxes above',
      network_name: '',
      wifiPassword: '',
      activeCountryCodeIndex: 0,
      activeWpassKeyIndex: 0,
    }
  }

  componentDidMount = () => {
    this.onSelectWifiNetwork = this.onSelectWifiNetwork.bind(this);
    this.onSelectCountryCode = this.onSelectCountryCode.bind(this);
    this.onChangeWifiPassword = this.onChangeWifiPassword.bind(this);
    this.onUseThisNetwork = this.onUseThisNetwork.bind(this);
    this.onSave = this.onSave.bind(this);
  }


  componentWillReceiveProps = (nextProps) => {
    if(this.props.wifi != nextProps.wifi) {
      console.log("ReceiveWill =>", nextProps.wifi)
      if(nextProps.wifi && nextProps.wifi.save) {
        this.setState({
          activeWifiKey: nextProps.wifi.selectedWifiType,
          manualEntry: nextProps.wifi.network_name,
          network_name: nextProps.wifi.network_name || 'Please set using boxes above',
          wifiPassword: nextProps.wifi.password,
          activeCountryCodeIndex: nextProps.wifi.country_code,
          activeWpassKeyIndex: nextProps.wifi.passkey_type,
        });

        this.props.unSave();
      }
    }
  }

  onSelectWifiNetwork = (eventKey, event) => {
    // this.props.selectWifiNetwork(eventKey);

    this.setState({
      activeWifiKey: eventKey
    });
  }

  onSelectCountryCode = (index, event) => {
    console.log("Event =>", index, event);
    this.setState({
      activeCountryCodeIndex: index
    })
  }

  onChangeWifiPassword = (event) => {
    console.log("Change password =>", event.target.value);
    this.setState({
      wifiPassword: event.target.value
    })
  }

  onSelectWpassKey = (index, event) => {
    this.setState({
      activeWpassKeyIndex: index
    })
  }

  onUseThisNetwork = (event) => {
    // this.props.useThisNetwork(this.state.manualEntry);
    this.setState({
      network_name: this.state.manualEntry == '' 
      ? 'Please set using boxes above' 
      : this.state.manualEntry,
    })
  }

  onSave = (e) => {
    let wifi = {
      selectedWifiType: this.state.activeWifiKey,
      network_name: this.state.manualEntry,
      password: this.state.wifiPassword,
      country_code: this.state.activeCountryCodeIndex,
      passkey_type: this.state.activeWpassKeyIndex,
      save: true
    }
    this.props.saveWifi(wifi);
  }
  render() {
    return(
      <Fragment>
        <div className="grid-container align-center">
          {/* Select available Wifi network */}
          <div id='grid1'>
            Select available Wifi network:
          </div>
          <DropdownButton 
            id="grid2" 
            title={this.state.activeWifiKey === 'auto' ? 'Auto' : 'Enter manually...'} 
            style={{width:'100%'}}
            onSelect={this.onSelectWifiNetwork}
            >
              <Dropdown.Item eventKey={'auto'}>
                {'Auto'}
              </Dropdown.Item>
              <Dropdown.Item eventKey={'manual'}>
                Enter manually...
              </Dropdown.Item>
          </DropdownButton>
          <div id='grid3'></div>
          {/* Manual entry */}
          {
            this.state.activeWifiKey === 'manual' &&
            <div id='grid4'>
              Manual entry:
            </div>
          }
          {
            this.state.activeWifiKey === 'manual' &&
            <input onChange={(e) => {
              console.log("manual entry =>", e.target.value)
              this.setState({
                manualEntry: e.target.value
              })
            }}>
            </input>
          }
          {
            this.state.activeWifiKey === 'manual' &&
            <CustomButton onClick={this.onUseThisNetwork}>
              Use this network
            </CustomButton>
          }
          {/* Wifi network name */}
          <div id='grid7'>
            Wifi network name:
          </div>
          <div id='grid8' style={{textAlign:'left'}}>
            <i>{
            this.state.activeWifiKey === 'manual' && this.props.wifi 
            ? this.state.network_name
            : 'Please set using boxes above'
            }</i>
          </div>
          <div id='grid9'></div>
          {/* Wifi password */}
          <div id='grid10'>
            Wifi password:
          </div>
          <input id="grid11" onChange={this.onChangeWifiPassword} />
          <div id='grid12'></div>

          {/* Wifi Country Code: */}
          <div id='grid13'>
            Wifi Country Code:
          </div>
          <DropdownButton 
            id="scrollDropDown" 
            title={countryCodeList[this.state.activeCountryCodeIndex].label} 
            style={{width:'100%'}}
            >
              {
                countryCodeList.map((item, index) => 
                  <DropdownItem 
                    key={index} 
                    eventKey={item.eventKey} 
                    onClick={(e) => this.onSelectCountryCode(index, e)}
                  >
                    {item.label}
                  </DropdownItem>
                )
              }
          </DropdownButton>
          <div id='grid15'></div>
          {/* Wifi passkey type */}
          <div id='grid16'>
            Wifi passkey type (must be WPA/WPA2):
          </div>
          <DropdownButton 
            id="grid17" 
            title={wPasskeyTypes[this.state.activeWpassKeyIndex].label} 
            style={{width:'100%'}}
            >
              {
                wPasskeyTypes.map((item, index) => 
                  <DropdownItem 
                    key={index} 
                    eventKey={item.eKey} 
                    onClick={(e) => this.onSelectWpassKey(index, e)}
                  >
                    {item.label}
                  </DropdownItem>
                )
              }
          </DropdownButton>
          <div id='grid18'></div>
          
          {/* Save */}
          <div id='grid19'></div>
          <CustomButton onClick={this.onSave}>
            Save
          </CustomButton>
          <div id='grid21'></div>
        </div>
      </Fragment>
    )
  }
};

const mapStateToProps = (state) => {
  console.log('State =>', state);
  const { wifi } = state.main;
  return { wifi };
};

export default connect(
  mapStateToProps, 
  { 
    selectWifiNetwork,
    useThisNetwork,
    setWifiPassword,
    saveWifi,
    unSave
  }
)(WifiWidget);