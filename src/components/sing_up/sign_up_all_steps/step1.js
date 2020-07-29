import React, { useContext } from "react";
import InputErrors from "../../validetor/input_errors";
import "../sign_up.css";
import SignUpContext from "../../../context/SignUp/SignUpContext";

function StepOne() {
  const signUpContext = useContext(SignUpContext);
  const { onchange, display_name, email, password, headline } = signUpContext;
  return (
    <div>
      {/* EMAIL */}
      <div className='position-relative'>
        <input
          type='email'
          name='email'
          placeholder='Email'
          id='Email'
          defaultValue={email.value}
          className={"form-control mb-1"}
          onBlur={(e) =>
            onchange({ name: e.target.name, value: e.target.value })
          }
        />
        <span className='must_form_input'>*</span>
        <InputErrors errors={email.errors}> </InputErrors>
      </div>
      <div className='position-relative'>
        <input
          type='password'
          name='password'
          placeholder='password'
          id='password'
          defaultValue={password.value}
          className={"form-control mb-1"}
          onBlur={(e) =>
            onchange({ name: e.target.name, value: e.target.value })
          }
        />
        <span className='must_form_input'>*</span>
        <InputErrors errors={password.errors}> </InputErrors>
      </div>
      <div className='position-relative'>
        <input
          type='text'
          name='display_name'
          placeholder='Display Name'
          id='display_name'
          defaultValue={display_name.value}
          className={"form-control mb-1"}
          onBlur={(e) =>
            onchange({ name: e.target.name, value: e.target.value })
          }
        />
        <span className='must_form_input'>*</span>
        <InputErrors errors={display_name.errors}> </InputErrors>
      </div>
      {/* HEADLINE */}
      <div className='position-relative'>
        <input
          type='text'
          name='headline'
          placeholder='Headline'
          id='Headline'
          defaultValue={headline.value}
          className={"form-control mb-1"}
          onBlur={(e) =>
            onchange({ name: e.target.name, value: e.target.value })
          }
        />
        <span className='must_form_input'>*</span>
        <InputErrors errors={headline.errors}> </InputErrors>
      </div>
    </div>
  );
}
export default StepOne;
