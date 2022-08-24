import React, {Fragment, Component} from "react";
import {Tab, Tabs} from 'react-bootstrap';
import { connect } from "react-redux";
import EditFinnhub from "../components/left/EditFinnhubWidget";
import StockCubeWidget from "../components/left/StockCubeWidget";
import { TimezoneWidget } from "../components/left/TimezoneWidget";
import WifiWidget from "../components/left/WifiWidget";
import { CustomButton, FullHeightDiv } from "../StyledComponents";

class LeftPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: 'wifi',
      activeModuleKey:'module1',
    }
  }

  onSelectTab(key) {
    this.setState({
      activeKey: key,
    })
  }

  onSelectStockModule(key) {
    this.setState({
      activeModuleKey: key
    })
  }

  render() {
    return (
      <Fragment>
        <FullHeightDiv>
          <div className="wifiTab d-flex flex-column">
            <Tabs
              id="wifi-timezone-tabs"
              activeKey={this.state.activeKey}
              onSelect={(key) => this.onSelectTab(key)}
            >
              <Tab eventKey={'wifi'} title={'Wifi'}>
                <WifiWidget/>
              </Tab>
              <Tab eventKey={'timezone'} title={'Timezone'}>
                <TimezoneWidget />
              </Tab>
            </Tabs>
          </div>
          <div className="mt-2 d-flex">
            <EditFinnhub/>
          </div>

          <div className="mt-2 StockCubeTab">
            <Tabs
              id="stock-cube-tabs"
              activeKey={this.state.activeModuleKey}
              onSelect={(key) => this.onSelectStockModule(key)}
            >
              <Tab eventKey={'module1'} title={'Module 1'}>
                <StockCubeWidget/>
              </Tab>
              <Tab eventKey={'module2'} title={'Module 2'}>
                <StockCubeWidget/>
              </Tab>
            </Tabs>
          </div>

        </FullHeightDiv>       
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return state.main;
};

export default connect(mapStateToProps, {})(LeftPage);