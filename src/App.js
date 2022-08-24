import React, {Fragment} from 'react';
import TopBar from './pages/TopBar';
import LeftPage from './pages/LeftPage';
import { HorizonSpace, SpaceBetweenDiv } from './StyledComponents';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css'; // or include from a CDN
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import './App.css';
import RightPage from './pages/RightPage';
import { Col, Row } from 'react-bootstrap';
import BottomBar from './pages/Bottom';

const App = () => {
  
  return (
    <Fragment>
      <div className='app'>
        <TopBar />
        <HorizonSpace space={10}/>
        <Row>
          <Col sm={5} md={5} lg={5} xl={5}>
            <LeftPage />
          </Col>
          <Col sm={7} md={7} lg={7} xl={7}>
            <RightPage />
          </Col>
        </Row>
        <HorizonSpace space={10}/>
        <BottomBar />
      </div>
    </Fragment>
  )
}

export default App;