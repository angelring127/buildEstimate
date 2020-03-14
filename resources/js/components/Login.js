/**
 * Login.js
 * ログイン画面
 */
import React, { Component } from 'react';


export default class Login extends Component {
  render() {
    return (
      <div className="login-box">
        <div className="login-logo">
          <a href="#"><b>Build</b>Estimate</a>
        </div>
        <div className="card">
          <div className="card-body login-card-body">
            <p class="login-box-msg">ログインして下さい。</p>
            <div className="input-group mb-3">
              <input type="email" className="form-control" placeholder="メール"></input>
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-envelope"></span>
                </div>
              </div>
            </div>
            <div className="input-group mb-3">
              <input type="password" className="form-control" placeholder="パスワード"></input>
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
                  <label for="remember">
                    保存
                  </label>
                </div>
              </div>
              {/* /.col */}
              <div className="col-4">
                <button type="button" className="btn btn-primary btn-block">ログイン</button>
              </div>
              {/* /.col */}
            </div>
            <p className="mb-1">
              <a href="forgot-password.html">パスワード探す</a>
            </p>
          </div>
          {/* /.login-card-body */}
        </div>
        {/* /.login-box */}
      </div>
    );
  }
}

