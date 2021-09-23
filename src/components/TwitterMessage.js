import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
    };
  }

  handleOnChange = (e) => {
    this.setState({
      message: e.target.value
    })
  }

  charCounter() {
    return (
      this.props.maxChars - this.state.message.length 
    )
  }

  

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <h2>{this.charCounter()}</h2>
        <input type="text" name="message" id="message" onChange={(e) => this.handleOnChange(e)} value={this.state.message}/>
      </div>
    );
  }
}

export default TwitterMessage;
