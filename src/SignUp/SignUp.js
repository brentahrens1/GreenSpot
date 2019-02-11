import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'


class SingUp extends Component {
    state = {
        username : '',
        password : ''
    }
    handlesubmit = (e) => {
        e.preventDefault()
        console.log('login clicked')
    }

    render () {
        return (
            <div className="signup-container">
                <img className="vegan-logo" src="https://www.v-label.eu/wp-content/uploads/2016/10/allergien2.png" height="45px" width="45px"></img>
                <h1 className="signup-main-header">Sign up</h1>
                <h4 className="signup-header">Already a member?<Link className="signup-link" to='/login'> Log in</Link></h4>
                <form className="forms">
                    <input className="signup-email" type="email" name="email" placeholder="Email"/>
                    <input className="signup-password" type="password" name="password" placeholder="Password"/><br></br>
                    <button className="signup-btn" onClick={this.handleSubmit}>Continue</button>
                </form>
            </div>
        )
    }


}

export default withRouter(SingUp)