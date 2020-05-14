import React from "react";
import { Redirect } from "react-router";
import { connect } from "react-redux"
import { logIn } from "../../redux/actions/index_actions"
import "./log_in.css"
import Facebook from "./log_in_with_facebook/facebook_login";
import Google from "./log_in_with_google/log_in_with_google";


class LogIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            user: "",
            xForm: ""
        }
    }
    handleInputChange = ({ target: { name, value } }) => {
        this.setState({
            [name]: value
        })
    };
    closeForm = () => { this.setState({ xForm: "out" }) }

    
    // SIGN IN
    handleSignIn = async (e) => {
        e.preventDefault();
        const { email, password } = this.state
        this.setState({ user: "Search" })
        /**CALL THE SAGA WITH PAYLOAD*/
        await this.props.loggedInAsync(email, password, this.chang_state_by_saga);
    }

    // LOG IN WITH FACEBOOK
    handleSignInWithRestApi = async (email) => {
        const password = "not requierd"
        this.setState({ user: "Search" })
        /**CALL THE SAGA WITH PAYLOAD*/
        await this.props.loggedInAsync(email, password, this.chang_state_by_saga);
    }

    chang_state_by_saga = (data = "") => {
         setTimeout(() => { this.setState({ user: "user_not_found" }) }, 1000) 
        }
    render() {
        return (
            <div className="wrap_log_in " style={{ zIndex: 11 }}>
                {this.props.user ? <Redirect to="/" /> : null}
                <i id="out_log_in" className="outForm fas fa-times" onClick={this.closeForm}></i>
                {this.state.xForm && <Redirect to="/" />}
                <form className="form-signin ">
                    <i className="mb-4 fas fa-headphones"></i>
                    <h1 className="h3 mb-3 font-weight-normal" style={{ letterSpacing: '0.1rem' }}>Please Sign In</h1>
                    <label htmlFor="inputEmail" className="sr-only">Email address</label>
                    <input value={this.state.email} name="email" onChange={this.handleInputChange} type="email" id="inputEmail" className="mb-1 form-control"
                        placeholder="Email address" required="" autoFocus="" />
                    <label htmlFor="inputPassword" className="sr-only">Password</label>
                    <input value={this.state.password} name="password" onChange={this.handleInputChange} type="password" id="inputPassword" className="mb-1 form-control" placeholder="Password" required="" />
                    {this.state.user === "Search" && <p>Connect To Data Base...</p>}
                    {this.state.user === "user_not_found" && <p>somthing wrong...</p>}

                    <button onClick={this.handleSignIn} className="btn btn-lg btn-dark btn-block" type="submit">Sign in</button>

                    {/* FACEBOOK */}                    {/* GOOGLE */}
                    <div className="mt-3 d-flex justify-content-center">
                        {/* <Facebook handleSignInWithRestApi={this.handleSignInWithRestApi} />
                        <Google handleSignInWithRestApi={this.handleSignInWithRestApi} /> */}

                    </div>


                    <p className="mt-5 mb-0 text-muted">© 2019-2020</p>
                    <p className="m-0 lead text-muted"> Meet Artist</p>
                </form>
            </div>
        )
    }
}
// /** REDUX */
const MapStateToProps = state => ({ user: state.user });
const mapDispatchToProps = dispatch => ({ loggedInAsync: (e, p, f) => dispatch(logIn({ e, p, f })) });
export default connect(MapStateToProps, mapDispatchToProps)(LogIn);

