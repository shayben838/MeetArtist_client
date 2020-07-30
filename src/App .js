import React from "react";
import Header from "./components/header/header";
import MainPage from "./components/main_page/main_page";
import Footer from "./components/footer/footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import WrapSearchPage from "./components/profile_filter_page/wrap_search_page";
import WrapSingleArtist from "./components/single_artist/wrap_single_artist";
import WrapSignUp from "./components/sing_up/wrap_sign_up copy";
import LogIn from "./components/log_in/Login";

import SignUpError from "./components/sing_up/sign_up_error_sucsses/sign_up_error";

import AuthState from "./context/auth/AuthState";
import DataState from "./context/Data/DataState";
import SignUpState from "./context/SignUp/SignUpState";
import Permission from "./components/permission/permission";
// fix login error msg with Auth state

const App = () => {
  return (
    <AuthState>
      <SignUpState>
        <DataState>
          <div>
            <Router>
              <div className='App'>
                <Header />
                <Switch>
                  {/* LOGIN */}
                  <Route exact path='/log_in' component={LogIn} />
                  {/* SIGNUP */}
                  <Route exact path='/SignUp'>
                    <WrapSignUp formType='signUp' />
                  </Route>
                  {/* SIGNUP ERROR*/}
                  <Route exact path='/sign_up_error' component={SignUpError} />
                  {/* Permission ERROR */}
                  <Route exact path='/PermissionError' component={Permission} />
                  {/* SEARCH */}
                  <Route exact path='/search' component={WrapSearchPage} />

                  {/* SINGLE ARTIST */}
                  <Route
                    path={"/singleArtist/:id"}
                    render={(props) => (
                      <WrapSingleArtist
                        key={Math.random()}
                        {...props}
                        isAuthed={true}
                      />
                    )}
                  />
                  {/* MAIN PAGE */}
                  <Route exact path='/' component={MainPage} />
                </Switch>

                <Footer />
              </div>
            </Router>
          </div>
        </DataState>
      </SignUpState>
    </AuthState>
  );
};
export default App;
