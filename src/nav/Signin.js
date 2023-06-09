import React, { Component } from 'react'
import axios from 'axios'
import { act } from 'react-dom/test-utils'

export default class Signin extends Component {
state={
  users:[
    
  ]
}
componentDidMount(){
  axios.get("https://backendapi-obgc.onrender.com/users")
  .then((res)=>{
    console.log(res.data)
    this.setState({
      users:res.data
    })
  })
}
  render() {
    return (
      <div>
        {
          this.state.users.map((usr)=>(
            <div key={usr._id}>
              <p>name:{usr.username}</p>
              <p>password:{usr.password}</p>
            </div>
          ))
        }
      </div>
    )
  }
}
