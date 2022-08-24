import React, { Component } from 'react'
import PropTypes from 'prop-types'

/**
* @author
* @class CustomCheckBox
**/

class CustomCheckBox extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.onChange = this.onChange.bind(this);
  }

  onChange = (event) => {
    this.props.onCheckStateChanged(event.target.checked);
  }

  render() {
    return(
      <div className='d-flex justify-left align-center text-left'>
        <input 
          type={'checkbox'} 
          name={this.props.name || 'none'} 
          className='mr-2'
          onChange={this.onChange}
          checked={this.props.checked || false}
          style={{marginRight:'0.5em', marginLeft:'0.5em', ...this.props.customStyle}}
          disabled={this.props.disabled}
        />
        <label htmlFor={this.props.name} disabled={this.props.disabled}>
          {this.props.label}
        </label>
      </div>
    )
  }
}


CustomCheckBox.propTypes = {
  onCheckStateChanged: PropTypes.func,
  name: PropTypes.string,
  checked: PropTypes.bool,
  label: PropTypes.string,
  customStyle: PropTypes.object,
  disabled: PropTypes.bool
}

export default CustomCheckBox;