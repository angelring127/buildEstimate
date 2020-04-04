/**
 * Register.js
 * サイドバー
 */
import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import * as api from '../services/API';

/* CSS */

const Register = () => {
  const inputName  = React.createRef();
  const inputEmail = React.createRef();
  const inputPassword = React.createRef();
  const inputCheckPassword = React.createRef();
  
  const handlerRegister = (event) => {
    const registerData = {
      name : inputName.current.value,
      email : inputEmail.current.value,
      password : inputPassword.current.value,
      password_confirmation : inputCheckPassword.current.value
    };
    api.register(registerData).then((res) => {
      console.log(res);
    }).catch(error => {
      console.log(error);
    });
    event.preventDefault();
  };
  return (
    <div className="content-wrapper">
      {/* Content Header (Page header) */}
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0 text-dark"><FormattedMessage id="register.title" defaultMessage="Register" /></h1>
            </div>{/* /. col */}
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item active">Register</li>
              </ol>
            </div>{/* /. col */}
          </div>{/* /.row */}
        </div>{/* /.container-fulid */}
      </div>{/* /.content-header */}

      {/* Main content */}
      <section className="content">
        <div className="container-fluid">
          <div className="row justify-content-md-center">
            <div className="col-lg-3 col-6">
              <div className="register-box">
                <div className="card">
                  <div className="card-body register-card-body">
                    <p className="login-box-msg"><FormattedMessage id="register.comment" defaultMessage="Register a new membership" /></p>
                    <form onSubmit={handlerRegister}>
                    <div className="input-group mb-3">
                      <FormattedMessage id="register.name" defaultMessage="Pull Name">
                        {placeholder => <input type="text" ref={inputName} className="form-control" placeholder={placeholder}></input>}
                      </FormattedMessage>
                      <div className="input-group-append">
                        <div className="input-group-text">
                          <span className="fas fa-user"></span>
                        </div>
                      </div>
                    </div>
                    <div className="input-group mb-3">
                      <FormattedMessage id="register.email" defaultMessage="Email">
                        {placeholder => <input type="email" ref={inputEmail} className="form-control" placeholder={placeholder}></input>}
                      </FormattedMessage>
                      <div className="input-group-append">
                        <div className="input-group-text">
                          <span className="fas fa-envelope"></span>
                        </div>
                      </div>
                    </div>
                    <div className="input-group mb-3">
                      <FormattedMessage id="register.password" defaultMessage="Password">
                        {placeholder => <input type="password" ref={inputPassword} className="form-control" placeholder={placeholder}></input>}
                      </FormattedMessage>
                      <div className="input-group-append">
                        <div className="input-group-text">
                          <span className="fas fa-lock"></span>
                        </div>
                      </div>
                    </div>
                    <div className="input-group mb-3">
                      <FormattedMessage id="register.check_password" defaultMessage="Retype password">
                        {placeholder => <input type="password" ref={inputCheckPassword} className="form-control" placeholder={placeholder}></input>}
                      </FormattedMessage>
                      <div className="input-group-append">
                        <div className="input-group-text">
                          <span className="fas fa-lock"></span>
                        </div>
                      </div>
                    </div>
                    {/* Todo 権限追加 */}
                      {/* <div className="form-group">
                        <label><FormattedMessage id="register.authority" defaultMessage="Authority"　/></label>
                        <select className="form-control" style={{width: "100%"}}>
                          <option defaultValue>Alabama</option>
                          <option>Alaska</option>
                          <option>California</option>
                          <option>Delaware</option>
                          <option>Tennessee</option>
                          <option>Texas</option>
                          <option>Washington</option>
                        </select>
                      </div> */}
                    <div className="row">
                      <div className="col-12">
                        <button type="submit" onClick={handlerRegister} className="btn btn-primary btn-block"><FormattedMessage id="register.btn_register" defaultMessage="Register" /></button>
                      </div>
                    </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Register;
