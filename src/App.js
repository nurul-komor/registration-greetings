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
      isRegistered: false
    }
  }
  submitHandler = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    this.setState({ name, email, password, isRegistered: true }, () => { console.log(this.state) })
  }
  render() {

    return (
      <div className="container mt-3  p-3">
        {this.state.isRegistered ? <Greetings name={this.state.name} email={this.state.email} /> : <Registration submit={this.submitHandler} />}
      </div>
    )
  }
}
