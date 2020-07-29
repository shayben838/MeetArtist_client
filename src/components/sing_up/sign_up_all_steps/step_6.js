import React, { useContext, Fragment, useEffect } from "react";
import { Redirect } from "react-router-dom";

import SignUpContext from "../../../context/SignUp/SignUpContext";
import Loading from "../../loading/loading";
const StepFive = () => {
  const signUpContext = useContext(SignUpContext);
  const { registerAPI, loading, signUpSuccess, signUpFail } = signUpContext;
  useEffect(() => {
    registerAPI();
  }, []);

  return (
    <Fragment>
      {loading && <Loading />}
      {!loading && signUpSuccess && <Redirect to='/log_in' />}
      {!loading && signUpFail && <Redirect to='/sign_up_error' />}
    </Fragment>
  );
};
export default StepFive;
