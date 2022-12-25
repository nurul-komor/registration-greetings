import React, { Component } from 'react'
import './App.css'
import Registration from './components/Registration'
import Greetings from './components/Greetings'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {
        name: null,
        email: null,
        password: null
      },
      isRegistered: false,
      passShow: false
    }
  }
  submitHandler = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    this.setState({ name, email, password, isRegistered: !this.state.isRegistered }, () => { console.log(this.state) })
  }
  passwordShowHandler = () => {
    this.setState({ passShow: !this.state.passShow })
  }
  render() {

    return (
      <div className="container mt-3  p-3">
        {this.state.isRegistered ? <Greetings name={this.state.name} email={this.state.email} /> : <Registration submit={this.submitHandler} click={this.passwordShowHandler} passStatus={this.state.passShow} />}
      </div>
    )
  }
}
