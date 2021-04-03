import React, { Component } from "react";
import "../App.css";
import axios from 'axios'
export default class MemberSignUp extends Component {
  constructor(){
    super();
    this.state={
      Username:'',
      Password:'',
      age:''
    }
    this.changeUserName=this.changeUserName.bind(this)
    this.changePassword=this.changePassword.bind(this)
    this.changeage=this.changeage.bind(this)
    this.onSubmit=this.onSubmit.bind(this)
  }
  changeUserName(event){
    this.setState({
      Username:event.target.value
    })
  }
  changePassword(event){
    this.setState({
      Password:event.target.value
    })
  }
  changeage(event){
    this.setState({
      age:event.target.value
    })
  }
  onSubmit(event){
    event.preventDefault()
    const registered={
      username:this.state.Username,
      password:this.state.Password,
      age:this.state.age
    }
    axios.post('http://localhost:4000/app/signup',registered)
      .then(response=>console.log(response.data))
      this.setState=({
        Username:'',
        Password:'',
        age:''
      })
  }
  render() {
    return (
      <form className="signup-form" onSubmit={this.onSubmit}>
        <h3>Sign Up</h3>

        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Username "
            onChange={this.changeUserName}
            value={this.state.Username}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={this.changePassword}
            value={this.state.Password}
          />
        </div>
        <div className="form-group">
          <label>Age</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Age"
            onChange={this.changeage}
            value={this.state.age}
          />
        </div>
        <button type="submit" className="btn  btn-success">
          Sign Up
        </button>
        <p className="forgot-password text-right">
          Already registered <a href="/member-login">Log in</a>
        </p>
      </form>
    );
  }
}
