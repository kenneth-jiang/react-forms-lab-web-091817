import React from 'react';
import PropTypes from 'prop-types'

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: ""
    };
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.value}
        />
        {this.props.maxChars - this.state.value.length}
      </div>
    );
  }
}

TwitterMessage.propTypes = {
  maxChars: PropTypes.number,
}

export default TwitterMessage;
