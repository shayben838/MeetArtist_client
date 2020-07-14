import React from "react";
import { connect } from "react-redux";
import Header from "./components/header/header";
import MainPage from "./components/main_page/main_page";
import Footer from "./components/footer/footer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import WrapSearchPage from "./components/profile_filter_page/wrap_search_page";
import WrapSingleArtist from "./components/single_artist/wrap_single_artist";
import WrapSignUp from "./components/sing_up/wrap_sign_up";
import LogIn from "./components/log_in/log_in";
import { logIn } from "../src/redux/actions/index_actions";
import { loggedOut } from "../src/redux/actions/index_actions";
import { initImportsMainAPI } from "./back_end/api/App_imports_first_mount";
import SignUpError from "./components/sing_up/sign_up_error_sucsses/sign_up_error";
import PageNotFound from "./components/page_not_found/page_not_found";
import LoadingHome from "./components/loading/loading_home";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectLogOut: "",
      dataAPI: "",
      dataApiStatus: true,
      userSearchHeader: "",
    };
  }

  componentDidMount = () => {
    this.props.loggedInAsync();
    this.importDataAPI();
  };
  importDataAPI = async () => {
    const init = await initImportsMainAPI();
    this.setState({
      dataAPI: init,
      dataApiStatus: false,
    });
  };

  logOut = () => {
    this.setState({ redirectLogOut: "true" });
    this.props.loggedOut();
  };
  passUser = (name, value) => {
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <Router>
          {this.state.dataApiStatus ? (
            <LoadingHome />
          ) : (
            <div className='App'>
              {this.state.redirectLogOut && <Redirect to='/' />}

              <Header
                user={this.props.user}
                logOut={this.logOut}
                passUser={this.passUser}
                dataAPI={this.state.dataAPI}
              />
              <Switch>
                <Route exact path='/sign_up_error'>
                  <SignUpError />
                </Route>

                <Route exact path='/log_in'>
                  <LogIn />
                </Route>

                <Route exact path='/search'>
                  <WrapSearchPage dataAPI={this.state.dataAPI} />
                </Route>

                <Route exact path='/SignUp'>
                  <WrapSignUp dataAPI={this.state.dataAPI} formType='signUp' />
                </Route>

                <Route
                  path={"/singleArtist/:id"}
                  render={(props) => (
                    <WrapSingleArtist
                      key={Math.random()}
                      {...props}
                      dataAPI={[this.state.dataAPI]}
                      isAuthed={true}
                    />
                  )}
                />

                <Route exact path='/'>
                  <MainPage dataAPI={this.state.dataAPI} />
                </Route>
                {/* 404 */}
                {/* TEST */}
                <Route exact path='*'>
                  <PageNotFound />
                </Route>
              </Switch>

              <Footer />
            </div>
          )}
        </Router>
      </div>
    );
  }
}

/** REDUX */
const MapStateToProps = (state) => ({ user: state.user });
const mapDispatchToProps = (dispatch) => ({
  loggedInAsync: () => dispatch(logIn()),
  loggedOut: () => dispatch(loggedOut()),
});

export default connect(MapStateToProps, mapDispatchToProps)(App);
