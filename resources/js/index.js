import React from 'react';
import ReactDOM from 'react-dom';
import Login from './components/Login';

import 'admin-lte/dist/css/adminlte.min.css';
import 'admin-lte/plugins/fontawesome-free/css/all.min.css';
import 'admin-lte/plugins/icheck-bootstrap/icheck-bootstrap.min.css';

if (document.getElementById('login')) {
    ReactDOM.render(<Login />, document.getElementById('login'));
}
