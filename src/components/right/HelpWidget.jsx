import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { CustomButton, FullHeightDiv } from '../../StyledComponents';

/**
* @author
* @class Help
**/

class Help extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <Fragment>
        <FullHeightDiv className='d-flex'>
          <textarea contentEditable={'false'} className={'h-100'}>
            {
              `
              Directory where app is storing all your Setups:
              Please head to www.thestockcube.net/instructions for help
  
              Contact support@thestockcube.net if you are still having any issues with this Setup tool
              `
            }
          </textarea>
        </FullHeightDiv>
      </Fragment>
    )
  }
}


Help.propTypes = {};

export default Help;