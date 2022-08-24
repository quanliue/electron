import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { FullHeightDiv, HorizonSpace } from '../../StyledComponents';
import { DropdownButton } from 'react-bootstrap';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import { countryCodeList } from '../../constants/const';

/**
* @author
* @class TimezoneWidget
**/

export class TimezoneWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCountryCodeIndex: 0,
      timezone:'',
    }
  }

  onSelectTimezone(index, e) {

  }

  render() {
    return(
      <Fragment>
        <FullHeightDiv className='d-flex'>
          <label className='text-left'>
            See here for details of timezones: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
          </label>
          <HorizonSpace space={20}/>
          <div className="grid-column-2 align-center text-right">
            <div id='grid1'>
              Search timezones (filters list below)
            </div>
            <input>
            </input>
            <div id='grid3'>
              Select local timezone:
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
                      onClick={(e) => this.onSelectTimezone(index, e)}
                    >
                      {item.label}
                    </DropdownItem>
                  )
                }
            </DropdownButton>
          </div>
          <HorizonSpace space={20}/>
          <label className='text-left'>
            {`Current time & date in selected timezone: ${this.state.timezone}`}
          </label>
        </FullHeightDiv>
      </Fragment>
    )
  }
}


TimezoneWidget.propTypes = {}