import React from "react"
import FacebookLogin from "react-facebook-login"

class Facebook extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isClick: false,
            isLogged: false

        }

    }
    responseFacebook =  respons => {
        this.setState({
            isLogged: true
        })
        const data =  respons;
        this.props.handleSignInWithRestApi(data.email)
    }


    componentClicked = () => {
        // console.log("clickkkk")
    }


    render() {
        let fbContent;
        if (this.state.isLogged) {
            fbContent = null
        }
        else {
            fbContent = <FacebookLogin
                appId="650906592413706"
                autoLoad={false}
                fields="name,email,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook} 
                cssClass="facebook" 
                textButton=""
                icon="fab fa-facebook"
               />
        }
        return (
            <div className="">
                {fbContent}
            </div>
        );
    }
}
export default Facebook;