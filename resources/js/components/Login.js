/**
 * Login.js
 * ログイン画面
 */
import React, { useState } from 'react';
import {FormattedMessage} from 'react-intl';

import * as Api from '../services/API';

const Login = () => {
  const [loginInfo, setLoginInfo] = useState({});

  const onChnageInput = event => {
    const currentTarget = event.currentTarget;
    loginInfo[currentTarget.name] = currentTarget.value;
    
    setLoginInfo(loginInfo);
  }
  const handlerLogin = (event) => {
    Api.login(loginInfo)
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <div className="login-box">
      <div className="login-logo">
        <a href="#" ><b>Build</b>Estimate</a>
      </div>
      <div className="card">
        <div className="card-body login-card-body">
          <p className="login-box-msg"><FormattedMessage id="login_msg" defaultMessage="ログインして下さい。" /></p>
          <div className="input-group mb-3">
          <FormattedMessage id="login_id.placeholder"　defaultMessage="Email">
            { placeholder => <input name="email" type="email" className="form-control" onChange={onChnageInput} placeholder={placeholder} />}
          </FormattedMessage>
            <div className="input-group-append">
              <div className="input-group-text">
                <span className="fas fa-envelope"></span>
              </div>
            </div>
          </div>
          <div className="input-group mb-3">
            <FormattedMessage id="login_password.placeholder"　defaultMessage="Password">
              {placeholder => <input name="password" type="password" className="form-control" onChange={onChnageInput} placeholder={placeholder}></input>}
            </FormattedMessage>
            <div className="input-group-append">
              <div className="input-group-text">
                <span className="fas fa-lock"></span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-8">
              <div className="icheck-primary">
                <input type="checkbox" id="remember"></input>
                <label htmlFor="remember">
                  <FormattedMessage id="save" defaultMessage="保存" />
                </label>
              </div>
            </div>
            {/* /.col */}
            <div className="col-4">
              <button type="button" onClick={handlerLogin} className="btn btn-primary btn-block"><FormattedMessage id="login_btn" defaultMessage="login"/></button>
            </div>
            {/* /.col */}
          </div>
          <p className="mb-1">
            <a href="forgot-password.html"><FormattedMessage id="search_password_link" defaultMessage="search password" /></a>
          </p>
        </div>
        {/* /.login-card-body */}
      </div>
      {/* /.login-box */}
    </div>
  );
}

export default Login;