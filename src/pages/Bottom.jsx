import React, {Fragment, Component} from "react";
import { Col, Row } from "react-bootstrap";
import { CustomButton, SpaceBetweenDiv } from "../StyledComponents";

class BottomBar extends Component {
  constructor(props) {
    super(props);
  }

  onSaveSetup() {

  }

  render() {
    return (
      <Fragment>
        <Row>
          <Col sm={5} md={5} lg={5} xl={5}>
            <SpaceBetweenDiv>
              <CustomButton id='save_setup'
                style={{paddingLeft:'2em', paddingRight:'2em', fontWeight:'bold'}}
                onClick={() => {this.onSaveSetup()}}>
                Save<br/>setup
              </CustomButton>
              <CustomButton>
                Restore a saved setup
              </CustomButton>
            </SpaceBetweenDiv>
          </Col>
          <Col sm={7} md={7} lg={7} xl={7} style={{color:'red'}}>
            <Row>
              <SpaceBetweenDiv>
                <label>Watchlist Empty</label>
                <label>Can't find setup dongle</label>
              </SpaceBetweenDiv>
            </Row>
            <Row>
              <SpaceBetweenDiv>
                <label>Portfolio Empty</label>
                <CustomButton>Find dongle</CustomButton>
              </SpaceBetweenDiv>
            </Row>
            <Row>
              <SpaceBetweenDiv>
                <label>Forex/crypto list: Empty</label>
                {/* <CustomButton>Find dongle</CustomButton> */}
              </SpaceBetweenDiv>
            </Row>
          </Col>
        </Row>
      </Fragment>
      
    )
  }
}

export default BottomBar;