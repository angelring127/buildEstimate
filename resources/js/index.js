import React from 'react';
import ReactDOM from 'react-dom';
import './include/bootstrap';

import Login from './components/Login';
import Main from './components/Main';

import 'admin-lte/dist/css/adminlte.min.css';
import 'admin-lte/plugins/fontawesome-free/css/all.min.css';
import 'admin-lte/plugins/icheck-bootstrap/icheck-bootstrap.min.css';

if (document.getElementById('login')) {
    ReactDOM.render(<Main />, document.getElementById('login'));
}
