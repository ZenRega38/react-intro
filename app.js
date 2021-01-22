import React from 'react'
import './app.css'
import FacebookLogin from 'react-facebook-login';
const responseFacebook = (response) => {
  console.log("login result", response);
}
const componentClicked = (data) => {
	console.warn(data)
}
export default class app extends React.Component {
	render(){
		return(
			<div>
				<h1>Login with Facebook</h1>

				<FacebookLogin
    			appId="697703487576017"
    			autoLoad={true}
    			fields="name,email,picture"
    			onClick={componentClicked}
    			callback={responseFacebook} />
			</div>
		)
	}
}