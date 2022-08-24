import React, {Fragment, Component} from "react";
import {Tab, Tabs} from 'react-bootstrap';
import FindTickerCodes from "../components/right/FindTickerCodes";
import { ForexCrypto } from "../components/right/ForexCrypto";
import Help from "../components/right/HelpWidget";
import { Portfolio } from "../components/right/Portfolio";
import { StockCryptoWatchlist } from "../components/right/StockCryptoWatchlist";
import { FullHeightDiv, TabWidget } from "../StyledComponents";

class RightPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey:'crypto'
    }
  }

  onSelectTab(eventkey) {
    this.setState({
      activeKey: eventkey
    })
  }

  render() {
    return(
      <Fragment>
        <FullHeightDiv>
          <TabWidget>
            <Tabs
              id="right-tabs"
              activeKey={this.state.activeKey}
              onSelect={(key) => this.onSelectTab(key)}
            >
              <Tab eventKey={'crypto'} title={'Stock/Crypto Watchlist'}>
                <StockCryptoWatchlist />
              </Tab>
              <Tab eventKey={'portfolio'} title={'Portfolio'}>
                <Portfolio />
              </Tab>
              <Tab eventKey={'forex'} title={'Forex/crypto'}>
                <ForexCrypto />
              </Tab>
              <Tab eventKey={'find'} title={'Find ticker codes'}>
                <FindTickerCodes />
              </Tab>
              <Tab eventKey={'help'} title={'Help'}>
                <Help />
              </Tab>
            </Tabs>
          </TabWidget>
        </FullHeightDiv>
      </Fragment>
    )
  }
}

export default RightPage;