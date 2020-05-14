import React from "react"
import GoogleLogin from 'react-google-login';

class Google extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    responseGoogle = (response) => {
        this.props.handleSignInWithRestApi(response.Qt.zu)

    }

    render() {
        return (
            <div className="">
                <GoogleLogin
                    clientId="34706225065-ftjugomaregl7hlc9j1app75upsq4e5h.apps.googleusercontent.com"
                    render={renderProps => (
                        <button className="google" onClick={renderProps.onClick} disabled={renderProps.disabled}><i className="fab fa-google"></i></button>
                    )}
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
            </div>
        );
    }
}
export default Google;