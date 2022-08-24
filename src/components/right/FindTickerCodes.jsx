import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { CustomButton, FullHeightDiv } from '../../StyledComponents';

/**
* @author
* @class FindTickerCodes
**/

class FindTickerCodes extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <Fragment>
        <FullHeightDiv className='d-flex'>
          <CustomButton style={{width: '100%'}}>
            Get available tickers
          </CustomButton>
          <input className='w-100 mt-2'>
          </input>
          <textarea className='w-100 h-100 mt-2' style={{position:'relative'}}>

          </textarea>
        </FullHeightDiv>
      </Fragment>
    )
  }
}


FindTickerCodes.propTypes = {};

export default FindTickerCodes;