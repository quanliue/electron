import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { BorderDiv, CustomButton } from '../../StyledComponents'
import { Col, Row } from 'react-bootstrap';
import { COLORS } from '../../constants/const';
import axios from 'axios';
import { connect } from 'react-redux';
import { getSymbols } from '../../redux/actions';
import Loading from '../Loading';
import { saveAPIKey } from '../../constants/storage';


/**
* @author
* @class EditFinnhub
**/
const VERIFY_STATE = {
  NONE: 0,
  VERIFY: 1,
  UNVERIFY: 2,
}

class EditFinnhub extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      apiKey: '',
      verified: VERIFY_STATE.NONE,
      editable: true,
    }
  }


  componentDidMount = () => {
    this.onVerify = this.onVerify.bind(this);
    this.onChangeAPIKey = this.onChangeAPIKey.bind(this);
  }

  componentWillReceiveProps = (nextProps) => {
    if(this.props.finnhub !== nextProps.finnhub) {
      if(nextProps.finnhub.getSymbolsErr) {
        this.setState({
          verified: VERIFY_STATE.UNVERIFY,
          editable: true,
          loading: false,
        })
      }
      else if(nextProps.finnhub.symbols && nextProps.finnhub.symbols.length > 0) {
        this.setState({
          verified: VERIFY_STATE.VERIFY,
          editable: false,
          loading: false
        })
      }
    }
  }

  onVerify = (event) => {
    this.setState({
      loading: true
    })

    this.props.getSymbols({
      // symbol:'AAPL',
      symbol:'US',
      apiKey: this.state.apiKey,
    });
    event.preventDefault();
  }

  onChangeAPIKey = (e) => {
    e.preventDefault();
    
    saveAPIKey(e.target.value);
    
    this.setState({
      apiKey: e.target.value
    })
  }


  getVerifyStyle = () => {
    let style = {color: 'white', textAlign:'left'};
    if(this.state.verified === VERIFY_STATE.VERIFY) {
      style.color = 'green';
    }
    else if(this.state.verified === VERIFY_STATE.UNVERIFY) {
      style.color ='red';
    }

    return style;
  }

  render() {
    return(
      <div className='w-100 d-flex flex-column justify-left'>
        <div className="d-flex">
          <CustomButton onClick={() => {
            this.setState({editable: true})
          }}>
            Edit Finnhub.io API key
          </CustomButton>
        </div>
        <label className='text-left'>
          Finnhub API setup (Sign up at https://finnhub.io/ - only need free API key)
        </label>
        <BorderDiv color={COLORS.light_border} className='w-100'>
          <Row>
            <Col className='text-left'> Enter your Finnhub.io API key: </Col>
            <Col>
              <input className='w-100' 
                onChange={this.onChangeAPIKey}
                disabled={!this.state.editable && this.state.verified === VERIFY_STATE.VERIFY}
              />
            </Col>
          </Row>
          <Row className={'mt-2'}>
            <Col style={this.getVerifyStyle()}>
              {this.state.verified === VERIFY_STATE.VERIFY 
              ? 'Verified!' 
              : this.state.verified === VERIFY_STATE.UNVERIFY 
              ? 'Invalid API key. Please try again'
              : ''
              }
            </Col>
            <Col className='w-100'>
              <CustomButton 
                style={{width:'100%'}} 
                onClick={this.onVerify}
                disabled={!this.state.editable && this.state.verified === VERIFY_STATE.VERIFY}
              >
                Verify
              </CustomButton>
            </Col>
          </Row>
        </BorderDiv>
        {
          this.state.loading &&
          <Loading />
        }
      </div>
    )
  }
}


EditFinnhub.propTypes = {}

const mapStateToProps = (state) => {
  const { finnhub } = state.main;
  return { finnhub }
}

export default connect(mapStateToProps, {
  getSymbols
})(EditFinnhub);