import React, {Fragment, Component} from "react";
import { Button } from 'react-bootstrap';
import { 
  SpaceBetweenDiv,
  CustomButton
} from '../StyledComponents';

class TopBar extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <Fragment>
        <SpaceBetweenDiv>
          <CustomButton> 
            {'Edit Wifi/timezone'}
          </CustomButton>
          <CustomButton> 
            {'No Stock Cube software'}
            <br/>
            {'update available'}
          </CustomButton>
        </SpaceBetweenDiv>
      </Fragment>
    )
  }
}

export default TopBar;