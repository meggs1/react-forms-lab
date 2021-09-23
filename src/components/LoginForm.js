import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };
  }

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
    console.log(this.state)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.state.username !== '' && this.state.password !== '') {
      this.props.handleLogin(this.state.username, this.state.password)
    }
  } 

  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.handleOnChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.handleOnChange}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
