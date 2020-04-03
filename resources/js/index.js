import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './modules'
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import messages_ja from './locale/ja.json';
import messages_en from './locale/en.json';
import './include/bootstrap';

import PageContainer from './containers/PageContainer';

import 'admin-lte/dist/css/adminlte.min.css';
import 'admin-lte/plugins/fontawesome-free/css/all.min.css';
import 'admin-lte/plugins/icheck-bootstrap/icheck-bootstrap.min.css';

// Chrome で　開発ツールを利用できるようにする。
const middlewares = [thunk];
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));

const messages = {
    'ja': messages_ja,
    'en': messages_en,
};

const language = navigator.language.split(/[-_]/)[0];  // language without region code
const selectMessages = typeof messages[language] !== 'undefined' ? messages[language] : messages_en;

if (document.getElementById('login')) {
    ReactDOM.render(
        <Provider store={store}>
            <IntlProvider locale="ja" messages={messages_ja}>
                <PageContainer />
            </IntlProvider>
        </Provider>
        , document.getElementById('login'));
}
