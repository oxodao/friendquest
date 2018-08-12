/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/App.js":
/*!********************!*\
  !*** ./app/App.js ***!
  \********************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Login = __webpack_require__(/*! ./components/Login */ "./app/components/Login.jsx");

var _Login2 = _interopRequireDefault(_Login);

__webpack_require__(/*! ./assets/css/App.scss */ "./app/assets/css/App.scss");

var _red = __webpack_require__(/*! @material-ui/core/es/colors/red */ "./node_modules/@material-ui/core/es/colors/red.js");

var _red2 = _interopRequireDefault(_red);

var _MuiThemeProvider = __webpack_require__(/*! @material-ui/core/es/styles/MuiThemeProvider */ "./node_modules/@material-ui/core/es/styles/MuiThemeProvider.js");

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _styles = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _SnackbarCustom = __webpack_require__(/*! ./components/SnackbarCustom */ "./app/components/SnackbarCustom.js");

var _SnackbarCustom2 = _interopRequireDefault(_SnackbarCustom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function (_Component) {
    (0, _inherits3.default)(App, _Component);

    function App() {
        (0, _classCallCheck3.default)(this, App);
        return (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).apply(this, arguments));
    }

    (0, _createClass3.default)(App, [{
        key: 'render',
        value: function render() {
            var theme = (0, _styles.createMuiTheme)({
                palette: {
                    type: 'dark',
                    primary: _red2.default
                }
            });

            return _react2.default.createElement(
                _MuiThemeProvider2.default,
                { theme: (0, _styles.createMuiTheme)(theme) },
                _react2.default.createElement(
                    'div',
                    { className: 'App' },
                    _react2.default.createElement(_Login2.default, null),
                    _react2.default.createElement(_SnackbarCustom2.default, null)
                )
            );
        }
    }]);
    return App;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
    return {};
}, function (dispatch) {
    return {};
})(App);

/***/ }),

/***/ "./app/actions/snackbar_actions.js":
/*!*****************************************!*\
  !*** ./app/actions/snackbar_actions.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var UPDATE_SNACKBAR = exports.UPDATE_SNACKBAR = "UPDATE_SNACKBAR";

var updateSnackbarAction = exports.updateSnackbarAction = function updateSnackbarAction() {
  var payload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { open: false, message: '' };
  return { type: UPDATE_SNACKBAR, payload: payload };
};

/***/ }),

/***/ "./app/actions/token_actions.js":
/*!**************************************!*\
  !*** ./app/actions/token_actions.js ***!
  \**************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var UPDATE_TYPED_CRED = exports.UPDATE_TYPED_CRED = "UPDATE_TYPED_CRED";
var LOGIN = exports.LOGIN = "LOGIN";
var READ_TOKEN = exports.READ_TOKEN = "READ_TOKEN";
var GET_TOKEN = exports.GET_TOKEN = "GET_TOKEN";
var DELETE_TOKEN = exports.DELETE_TOKEN = "DELETE_TOKEN";

var updateTypedCredAction = exports.updateTypedCredAction = function updateTypedCredAction() {
    var payload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { username: '', password: '' };

    return { type: UPDATE_TYPED_CRED, payload: payload };
};

var loginAction = exports.loginAction = function loginAction() {
    var payload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { username: '', password: '' };

    return { type: LOGIN, payload: payload };
};

var getTokenAction = exports.getTokenAction = function getTokenAction() {
    return { type: GET_TOKEN };
};

var readTokenAction = exports.readTokenAction = function readTokenAction() {
    var payload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { token: '' };

    return { type: READ_TOKEN, payload: payload };
};

var deleteTokenAction = exports.deleteTokenAction = function deleteTokenAction() {
    return { type: DELETE_TOKEN };
};

/***/ }),

/***/ "./app/assets/css/App.scss":
/*!*********************************!*\
  !*** ./app/assets/css/App.scss ***!
  \*********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

throw new Error("Module build failed: ModuleBuildError: Module build failed: Error: ENOENT: no such file or directory, open '/www/node_modules/css-loader/lib/css-base.js'\n    at runLoaders (/www/node_modules/webpack/lib/NormalModule.js:195:19)\n    at /www/node_modules/loader-runner/lib/LoaderRunner.js:364:11\n    at /www/node_modules/loader-runner/lib/LoaderRunner.js:200:19\n    at /www/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:70:14\n    at process._tickCallback (internal/process/next_tick.js:176:11)");

/***/ }),

/***/ "./app/assets/css/login.scss":
/*!***********************************!*\
  !*** ./app/assets/css/login.scss ***!
  \***********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

throw new Error("Module build failed: ModuleBuildError: Module build failed: Error: ENOENT: no such file or directory, open '/www/node_modules/css-loader/lib/css-base.js'\n    at runLoaders (/www/node_modules/webpack/lib/NormalModule.js:195:19)\n    at /www/node_modules/loader-runner/lib/LoaderRunner.js:364:11\n    at /www/node_modules/loader-runner/lib/LoaderRunner.js:200:19\n    at /www/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:70:14\n    at process._tickCallback (internal/process/next_tick.js:176:11)");

/***/ }),

/***/ "./app/components/Login.jsx":
/*!**********************************!*\
  !*** ./app/components/Login.jsx ***!
  \**********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _index = __webpack_require__(/*! @material-ui/core/es/index */ "./node_modules/@material-ui/core/es/index.js");

__webpack_require__(/*! ../assets/css/login.scss */ "./app/assets/css/login.scss");

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _token_actions = __webpack_require__(/*! ../actions/token_actions */ "./app/actions/token_actions.js");

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");

var _LocalStorageMiddleware = __webpack_require__(/*! ../middleware/LocalStorageMiddleware */ "./app/middleware/LocalStorageMiddleware.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Login = function (_Component) {
    (0, _inherits3.default)(Login, _Component);

    function Login() {
        (0, _classCallCheck3.default)(this, Login);
        return (0, _possibleConstructorReturn3.default)(this, (Login.__proto__ || (0, _getPrototypeOf2.default)(Login)).apply(this, arguments));
    }

    (0, _createClass3.default)(Login, [{
        key: 'onChange',
        value: function onChange(username, password) {
            var typed = {};
            if (username !== null) typed.username = username;
            if (password !== null) typed.password = password;

            this.props.updateTyped(typed);
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (null === this.props.user) {
                this.props.getToken();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                { id: 'login-body', className: this.props.token !== null && this.props.token !== _LocalStorageMiddleware.NO_TOKEN_AVAILABLE && this.props.token.length > 0 ? 'hidden' : '' },
                _react2.default.createElement(
                    'div',
                    { className: 'login-form' },
                    _react2.default.createElement(
                        'h1',
                        null,
                        'FriendsQuest'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'login-fields' },
                        _react2.default.createElement(_index.TextField, {
                            id: 'username-input',
                            label: 'Username',
                            margin: 'normal',
                            value: this.props.username,
                            onChange: function onChange(a) {
                                return _this2.onChange(a.target.value, null);
                            },
                            fullWidth: true
                        }),
                        _react2.default.createElement(_index.TextField, {
                            id: 'password-input',
                            label: 'Password',
                            type: 'password',
                            autoComplete: 'current-password',
                            margin: 'normal',
                            value: this.props.password,
                            onChange: function onChange(a) {
                                return _this2.onChange(null, a.target.value);
                            },
                            fullWidth: true
                        })
                    ),
                    _react2.default.createElement(
                        _index.Button,
                        { variant: 'contained', color: 'primary', onClick: function onClick() {
                                _this2.props.login({ username: _this2.props.username, password: _this2.props.password });
                            } },
                        'Login'
                    )
                )
            );
        }
    }]);
    return Login;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
    return {
        token: state.tokenReducer.token,
        user: state.tokenReducer.user,
        username: state.tokenReducer.username,
        password: state.tokenReducer.password
    };
}, function (dispatch) {
    return {
        updateTyped: (0, _redux.bindActionCreators)(_token_actions.updateTypedCredAction, dispatch),
        login: (0, _redux.bindActionCreators)(_token_actions.loginAction, dispatch),
        getToken: (0, _redux.bindActionCreators)(_token_actions.getTokenAction, dispatch)
    };
})(Login);

/***/ }),

/***/ "./app/components/SnackbarCustom.js":
/*!******************************************!*\
  !*** ./app/components/SnackbarCustom.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _snackbar_actions = __webpack_require__(/*! ../actions/snackbar_actions */ "./app/actions/snackbar_actions.js");

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _index = __webpack_require__(/*! @material-ui/core/index.js */ "./node_modules/@material-ui/core/index.js");

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SnackbarCustom = function (_Component) {
    (0, _inherits3.default)(SnackbarCustom, _Component);

    function SnackbarCustom() {
        (0, _classCallCheck3.default)(this, SnackbarCustom);
        return (0, _possibleConstructorReturn3.default)(this, (SnackbarCustom.__proto__ || (0, _getPrototypeOf2.default)(SnackbarCustom)).apply(this, arguments));
    }

    (0, _createClass3.default)(SnackbarCustom, [{
        key: "handleRequestClose",
        value: function handleRequestClose() {
            this.props.updateMessage({ open: false, message: '' });
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(_index.Snackbar, {
                open: this.props.open,
                message: this.props.message,
                autoHideDuration: 4000,
                onClose: function onClose() {
                    return _this2.handleRequestClose();
                }
            });
        }
    }]);
    return SnackbarCustom;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
    return {
        open: state.snackbarReducer.open,
        message: state.snackbarReducer.message
    };
}, function (dispatch) {
    return {
        updateMessage: (0, _redux.bindActionCreators)(_snackbar_actions.updateSnackbarAction, dispatch)
    };
})(SnackbarCustom);

/***/ }),

/***/ "./app/index.js":
/*!**********************!*\
  !*** ./app/index.js ***!
  \**********************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(/*! ./App */ "./app/App.js");

var _App2 = _interopRequireDefault(_App);

var _registerServiceWorker = __webpack_require__(/*! ./registerServiceWorker */ "./app/registerServiceWorker.js");

var _registerServiceWorker2 = _interopRequireDefault(_registerServiceWorker);

var _reducers = __webpack_require__(/*! ./reducers */ "./app/reducers/index.js");

var _reducers2 = _interopRequireDefault(_reducers);

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");

var _Provider = __webpack_require__(/*! react-redux/src/components/Provider */ "./node_modules/react-redux/src/components/Provider.js");

var _Provider2 = _interopRequireDefault(_Provider);

var _reduxSaga = __webpack_require__(/*! redux-saga */ "./node_modules/redux-saga/es/index.js");

var _reduxSaga2 = _interopRequireDefault(_reduxSaga);

var _LocalStorageMiddleware = __webpack_require__(/*! ./middleware/LocalStorageMiddleware */ "./app/middleware/LocalStorageMiddleware.js");

var _LocalStorageMiddleware2 = _interopRequireDefault(_LocalStorageMiddleware);

var _saga = __webpack_require__(/*! ./saga */ "./app/saga/index.js");

var _saga2 = _interopRequireDefault(_saga);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var saga = (0, _reduxSaga2.default)();

var middleware = [saga, _LocalStorageMiddleware2.default];

var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || _redux.compose;
var store = (0, _redux.createStore)(_reducers2.default, composeEnhancers(_redux.applyMiddleware.apply(undefined, middleware)));

saga.run(_saga2.default);

_reactDom2.default.render(_react2.default.createElement(
    _Provider2.default,
    { store: store },
    _react2.default.createElement(_App2.default, null)
), document.getElementById('root'));
(0, _registerServiceWorker2.default)();

/***/ }),

/***/ "./app/middleware/LocalStorageMiddleware.js":
/*!**************************************************!*\
  !*** ./app/middleware/LocalStorageMiddleware.js ***!
  \**************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NO_TOKEN_AVAILABLE = undefined;

var _token_actions = __webpack_require__(/*! ../actions/token_actions */ "./app/actions/token_actions.js");

var NO_TOKEN_AVAILABLE = exports.NO_TOKEN_AVAILABLE = "NO_TOKEN_AVAILABLE";

exports.default = function (store) {
    return function (next) {
        return function (action) {

            if (action.type === _token_actions.GET_TOKEN) {
                var token = localStorage.getItem('friendquest_token');
                if (null !== token && 0 < token.length) {
                    store.dispatch((0, _token_actions.readTokenAction)({ token: token }));
                } else {
                    store.dispatch((0, _token_actions.readTokenAction)({ token: NO_TOKEN_AVAILABLE }));
                }
            } else if (action.type === _token_actions.DELETE_TOKEN) {
                localStorage.removeItem('friendquest_token');
                store.dispatch((0, _token_actions.readTokenAction)({ token: NO_TOKEN_AVAILABLE }));
            }

            return next(action);
        };
    };
};

/***/ }),

/***/ "./app/model/User.js":
/*!***************************!*\
  !*** ./app/model/User.js ***!
  \***************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var User = function User(json) {
    (0, _classCallCheck3.default)(this, User);

    console.log("USER LOGGED/ ", json);
};

exports.default = User;

/***/ }),

/***/ "./app/reducers/index.js":
/*!*******************************!*\
  !*** ./app/reducers/index.js ***!
  \*******************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");

var _token_reducer = __webpack_require__(/*! ./token_reducer */ "./app/reducers/token_reducer.js");

var _token_reducer2 = _interopRequireDefault(_token_reducer);

var _snackbar_reducer = __webpack_require__(/*! ./snackbar_reducer */ "./app/reducers/snackbar_reducer.js");

var _snackbar_reducer2 = _interopRequireDefault(_snackbar_reducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
    tokenReducer: _token_reducer2.default,
    snackbarReducer: _snackbar_reducer2.default
});

/***/ }),

/***/ "./app/reducers/snackbar_reducer.js":
/*!******************************************!*\
  !*** ./app/reducers/snackbar_reducer.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    switch (action.type) {
        case _snackbar_actions.UPDATE_SNACKBAR:
            return (0, _extends3.default)({}, state, { open: action.payload.open, message: action.payload.message });
        default:
            return state;
    }
};

var _snackbar_actions = __webpack_require__(/*! ../actions/snackbar_actions */ "./app/actions/snackbar_actions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
    open: false,
    message: ''
};

;

/***/ }),

/***/ "./app/reducers/token_reducer.js":
/*!***************************************!*\
  !*** ./app/reducers/token_reducer.js ***!
  \***************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    switch (action.type) {
        case _token_actions.UPDATE_TYPED_CRED:
            return (0, _extends3.default)({}, state, action.payload);
        case _token_actions.LOGIN:
            return (0, _extends3.default)({}, state);
        case _token_actions.GET_TOKEN:
            return (0, _extends3.default)({}, state);
        case _token_actions.READ_TOKEN:
            if (_LocalStorageMiddleware.NO_TOKEN_AVAILABLE === action.payload.token || undefined === action.payload.token || null === action.payload.token || 0 >= action.payload.token.length) {
                return (0, _extends3.default)({}, state, { token: action.payload.token });
            }

            var user = new _User2.default((0, _jwtDecode2.default)(action.payload.token));
            return (0, _extends3.default)({}, state, { token: action.payload.token, user: user });

        case _token_actions.DELETE_TOKEN:
            return (0, _extends3.default)({}, state, { user: null });
        default:
            return state;
    }
};

var _token_actions = __webpack_require__(/*! ../actions/token_actions */ "./app/actions/token_actions.js");

var _jwtDecode = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");

var _jwtDecode2 = _interopRequireDefault(_jwtDecode);

var _User = __webpack_require__(/*! ../model/User */ "./app/model/User.js");

var _User2 = _interopRequireDefault(_User);

var _LocalStorageMiddleware = __webpack_require__(/*! ../middleware/LocalStorageMiddleware */ "./app/middleware/LocalStorageMiddleware.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
    username: '',
    password: '',
    token: '',
    user: null
};

;

/***/ }),

/***/ "./app/registerServiceWorker.js":
/*!**************************************!*\
  !*** ./app/registerServiceWorker.js ***!
  \**************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = register;
exports.unregister = unregister;
// In production, we register a service worker to serve assets from local cache.

// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on the "N+1" visit to a page, since previously
// cached resources are updated in the background.

// To learn more about the benefits of this model, read https://goo.gl/KwvDNy.
// This link also includes instructions on opting out of this behavior.

var isLocalhost = Boolean(window.location.hostname === 'localhost' ||
// [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' ||
// 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));

function register() {
  if (false) {
    // The URL constructor is available in all browsers that support SW.
    var publicUrl = new URL(process.env.PUBLIC_URL, window.location);
    if (publicUrl.origin !== window.location.origin) {
      // Our service worker won't work if PUBLIC_URL is on a different origin
      // from what our page is served on. This might happen if a CDN is used to
      // serve assets; see https://github.com/facebookincubator/create-react-app/issues/2374
      return;
    }

    window.addEventListener('load', function () {
      var swUrl = process.env.PUBLIC_URL + '/service-worker.js';

      if (isLocalhost) {
        // This is running on localhost. Lets check if a service worker still exists or not.
        checkValidServiceWorker(swUrl);

        // Add some additional logging to localhost, pointing developers to the
        // service worker/PWA documentation.
        navigator.serviceWorker.ready.then(function () {
          console.log('This web app is being served cache-first by a service ' + 'worker. To learn more, visit https://goo.gl/SC7cgQ');
        });
      } else {
        // Is not local host. Just register service worker
        registerValidSW(swUrl);
      }
    });
  }
}

function registerValidSW(swUrl) {
  navigator.serviceWorker.register(swUrl).then(function (registration) {
    registration.onupdatefound = function () {
      var installingWorker = registration.installing;
      installingWorker.onstatechange = function () {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the old content will have been purged and
            // the fresh content will have been added to the cache.
            // It's the perfect time to display a "New content is
            // available; please refresh." message in your web app.
            console.log('New content is available; please refresh.');
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.');
          }
        }
      };
    };
  }).catch(function (error) {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(function (response) {
    // Ensure service worker exists, and that we really are getting a JS file.
    if (response.status === 404 || response.headers.get('content-type').indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(function (registration) {
        registration.unregister().then(function () {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl);
    }
  }).catch(function () {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(function (registration) {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ "./app/saga/index.js":
/*!***************************!*\
  !*** ./app/saga/index.js ***!
  \***************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _stringify = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ "./node_modules/babel-runtime/core-js/json/stringify.js");

var _stringify2 = _interopRequireDefault(_stringify);

exports.default = vsaga;

var _token_actions = __webpack_require__(/*! ../actions/token_actions */ "./app/actions/token_actions.js");

var _effects = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/es/effects.js");

var _snackbar_actions = __webpack_require__(/*! ../actions/snackbar_actions */ "./app/actions/snackbar_actions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/_regenerator2.default.mark(login),
    _marked2 = /*#__PURE__*/_regenerator2.default.mark(vsaga);

function login(action) {
    var res;
    return _regenerator2.default.wrap(function login$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.next = 2;
                    return (0, _effects.call)(fetch, "/login", {
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        method: 'POST',
                        body: (0, _stringify2.default)(action.payload)
                    });

                case 2:
                    res = _context.sent;

                    if (!(200 === res.status)) {
                        _context.next = 9;
                        break;
                    }

                    _context.next = 6;
                    return (0, _effects.put)((0, _token_actions.updateTypedCredAction)({ username: '', password: '' }));

                case 6:
                    (0, _snackbar_actions.updateSnackbarAction)({ open: true, message: 'loggedin' });
                    _context.next = 14;
                    break;

                case 9:
                    _context.next = 11;
                    return (0, _effects.put)((0, _token_actions.updateTypedCredAction)({ password: '' }));

                case 11:
                    _context.next = 13;
                    return (0, _effects.put)((0, _snackbar_actions.updateSnackbarAction)({
                        open: true,
                        message: 'Une erreur est survenue! (' + res.status + ')'
                    }));

                case 13:
                    console.log(res);

                case 14:
                case "end":
                    return _context.stop();
            }
        }
    }, _marked, this);
}

function vsaga() {
    return _regenerator2.default.wrap(function vsaga$(_context2) {
        while (1) {
            switch (_context2.prev = _context2.next) {
                case 0:
                    _context2.next = 2;
                    return (0, _effects.takeEvery)(_token_actions.LOGIN, login);

                case 2:
                case "end":
                    return _context2.stop();
            }
        }
    }, _marked2, this);
}

/***/ }),

/***/ "./node_modules/@material-ui/core/es/colors/red.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material-ui/core/es/colors/red.js ***!
  \*********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/www/node_modules/@material-ui/core/es/colors/red.js'");

/***/ }),

/***/ "./node_modules/@material-ui/core/es/index.js":
/*!****************************************************!*\
  !*** ./node_modules/@material-ui/core/es/index.js ***!
  \****************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/www/node_modules/@material-ui/core/es/index.js'");

/***/ }),

/***/ "./node_modules/@material-ui/core/es/styles/MuiThemeProvider.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@material-ui/core/es/styles/MuiThemeProvider.js ***!
  \**********************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/www/node_modules/@material-ui/core/es/styles/MuiThemeProvider.js'");

/***/ }),

/***/ "./node_modules/@material-ui/core/index.js":
/*!*************************************************!*\
  !*** ./node_modules/@material-ui/core/index.js ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/www/node_modules/@material-ui/core/index.js'");

/***/ }),

/***/ "./node_modules/@material-ui/core/styles/index.js":
/*!********************************************************!*\
  !*** ./node_modules/@material-ui/core/styles/index.js ***!
  \********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/www/node_modules/@material-ui/core/styles/index.js'");

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/json/stringify.js":
/*!**************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/json/stringify.js ***!
  \**************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/www/node_modules/babel-runtime/core-js/json/stringify.js'");

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js":
/*!***********************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/get-prototype-of.js ***!
  \***********************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/www/node_modules/babel-runtime/core-js/object/get-prototype-of.js'");

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/classCallCheck.js":
/*!**************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/classCallCheck.js ***!
  \**************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/www/node_modules/babel-runtime/helpers/classCallCheck.js'");

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/createClass.js":
/*!***********************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/createClass.js ***!
  \***********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/www/node_modules/babel-runtime/helpers/createClass.js'");

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/extends.js":
/*!*******************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/extends.js ***!
  \*******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/www/node_modules/babel-runtime/helpers/extends.js'");

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/inherits.js":
/*!********************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/inherits.js ***!
  \********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/www/node_modules/babel-runtime/helpers/inherits.js'");

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js":
/*!*************************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/possibleConstructorReturn.js ***!
  \*************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/www/node_modules/babel-runtime/helpers/possibleConstructorReturn.js'");

/***/ }),

/***/ "./node_modules/babel-runtime/regenerator/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/babel-runtime/regenerator/index.js ***!
  \*********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/www/node_modules/babel-runtime/regenerator/index.js'");

/***/ }),

/***/ "./node_modules/jwt-decode/lib/index.js":
/*!**********************************************!*\
  !*** ./node_modules/jwt-decode/lib/index.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/www/node_modules/jwt-decode/lib/index.js'");

/***/ }),

/***/ "./node_modules/react-dom/index.js":
/*!*****************************************!*\
  !*** ./node_modules/react-dom/index.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/www/node_modules/react-dom/index.js'");

/***/ }),

/***/ "./node_modules/react-redux/es/index.js":
/*!**********************************************!*\
  !*** ./node_modules/react-redux/es/index.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/www/node_modules/react-redux/es/index.js'");

/***/ }),

/***/ "./node_modules/react-redux/src/components/Provider.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-redux/src/components/Provider.js ***!
  \*************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/www/node_modules/react-redux/src/components/Provider.js'");

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/www/node_modules/react/index.js'");

/***/ }),

/***/ "./node_modules/redux-saga/es/effects.js":
/*!***********************************************!*\
  !*** ./node_modules/redux-saga/es/effects.js ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/www/node_modules/redux-saga/es/effects.js'");

/***/ }),

/***/ "./node_modules/redux-saga/es/index.js":
/*!*********************************************!*\
  !*** ./node_modules/redux-saga/es/index.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/www/node_modules/redux-saga/es/index.js'");

/***/ }),

/***/ "./node_modules/redux/es/redux.js":
/*!****************************************!*\
  !*** ./node_modules/redux/es/redux.js ***!
  \****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/www/node_modules/redux/es/redux.js'");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgN2U4YzMwNDE0NjNkMmFjNmQ5ZTQiLCJ3ZWJwYWNrOi8vLy4vYXBwL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYWN0aW9ucy9zbmFja2Jhcl9hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2FwcC9hY3Rpb25zL3Rva2VuX2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvTG9naW4uanN4Iiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL1NuYWNrYmFyQ3VzdG9tLmpzIiwid2VicGFjazovLy8uL2FwcC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvbWlkZGxld2FyZS9Mb2NhbFN0b3JhZ2VNaWRkbGV3YXJlLmpzIiwid2VicGFjazovLy8uL2FwcC9tb2RlbC9Vc2VyLmpzIiwid2VicGFjazovLy8uL2FwcC9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvcmVkdWNlcnMvc25hY2tiYXJfcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvcmVkdWNlcnMvdG9rZW5fcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvcmVnaXN0ZXJTZXJ2aWNlV29ya2VyLmpzIiwid2VicGFjazovLy8uL2FwcC9zYWdhL2luZGV4LmpzIl0sIm5hbWVzIjpbIkFwcCIsInRoZW1lIiwicGFsZXR0ZSIsInR5cGUiLCJwcmltYXJ5IiwicmVkIiwiQ29tcG9uZW50IiwiVVBEQVRFX1NOQUNLQkFSIiwidXBkYXRlU25hY2tiYXJBY3Rpb24iLCJwYXlsb2FkIiwib3BlbiIsIm1lc3NhZ2UiLCJVUERBVEVfVFlQRURfQ1JFRCIsIkxPR0lOIiwiUkVBRF9UT0tFTiIsIkdFVF9UT0tFTiIsIkRFTEVURV9UT0tFTiIsInVwZGF0ZVR5cGVkQ3JlZEFjdGlvbiIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJsb2dpbkFjdGlvbiIsImdldFRva2VuQWN0aW9uIiwicmVhZFRva2VuQWN0aW9uIiwidG9rZW4iLCJkZWxldGVUb2tlbkFjdGlvbiIsIkxvZ2luIiwidHlwZWQiLCJwcm9wcyIsInVwZGF0ZVR5cGVkIiwidXNlciIsImdldFRva2VuIiwiTk9fVE9LRU5fQVZBSUxBQkxFIiwibGVuZ3RoIiwiYSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJsb2dpbiIsInN0YXRlIiwidG9rZW5SZWR1Y2VyIiwiZGlzcGF0Y2giLCJTbmFja2JhckN1c3RvbSIsInVwZGF0ZU1lc3NhZ2UiLCJoYW5kbGVSZXF1ZXN0Q2xvc2UiLCJzbmFja2JhclJlZHVjZXIiLCJzYWdhIiwibWlkZGxld2FyZSIsImxvY2FsU3RvcmFnZU1pZGRsZXdhcmUiLCJjb21wb3NlRW5oYW5jZXJzIiwid2luZG93IiwiX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fQ09NUE9TRV9fIiwiY29tcG9zZSIsInN0b3JlIiwicmVkdWNlciIsImFwcGx5TWlkZGxld2FyZSIsInJ1biIsInZTYWdhIiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWN0aW9uIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInJlbW92ZUl0ZW0iLCJuZXh0IiwiVXNlciIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiaW5pdGlhbFN0YXRlIiwidW5kZWZpbmVkIiwicmVnaXN0ZXIiLCJ1bnJlZ2lzdGVyIiwiaXNMb2NhbGhvc3QiLCJCb29sZWFuIiwibG9jYXRpb24iLCJob3N0bmFtZSIsIm1hdGNoIiwicHVibGljVXJsIiwiVVJMIiwicHJvY2VzcyIsImVudiIsIlBVQkxJQ19VUkwiLCJvcmlnaW4iLCJhZGRFdmVudExpc3RlbmVyIiwic3dVcmwiLCJjaGVja1ZhbGlkU2VydmljZVdvcmtlciIsIm5hdmlnYXRvciIsInNlcnZpY2VXb3JrZXIiLCJyZWFkeSIsInRoZW4iLCJyZWdpc3RlclZhbGlkU1ciLCJyZWdpc3RyYXRpb24iLCJvbnVwZGF0ZWZvdW5kIiwiaW5zdGFsbGluZ1dvcmtlciIsImluc3RhbGxpbmciLCJvbnN0YXRlY2hhbmdlIiwiY29udHJvbGxlciIsImNhdGNoIiwiZXJyb3IiLCJmZXRjaCIsInJlc3BvbnNlIiwic3RhdHVzIiwiaGVhZGVycyIsImdldCIsImluZGV4T2YiLCJyZWxvYWQiLCJ2c2FnYSIsIm1ldGhvZCIsImJvZHkiLCJyZXMiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdEQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOzs7Ozs7SUFFTUEsRzs7Ozs7Ozs7OztpQ0FFTztBQUNMLGdCQUFNQyxRQUFRLDRCQUFlO0FBQ3pCQyx5QkFBUztBQUNMQywwQkFBTSxNQUREO0FBRUxDLDZCQUFTQztBQUZKO0FBRGdCLGFBQWYsQ0FBZDs7QUFPQSxtQkFDSTtBQUFDLDBDQUFEO0FBQUEsa0JBQWtCLE9BQU8sNEJBQWVKLEtBQWYsQ0FBekI7QUFDSTtBQUFBO0FBQUEsc0JBQUssV0FBVSxLQUFmO0FBRUksa0RBQUMsZUFBRCxPQUZKO0FBR0ksa0RBQUMsd0JBQUQ7QUFISjtBQURKLGFBREo7QUFTSDs7O0VBbkJhSyxnQjs7a0JBc0JILHlCQUNYO0FBQUEsV0FBVSxFQUFWO0FBQUEsQ0FEVyxFQUVYO0FBQUEsV0FBYSxFQUFiO0FB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QixxQkFBdEIsQ0FEdEI7O0FBQUE7QUFDVXNHLHVCQURWOztBQUFBLDBCQVdRLFFBQVFBLElBQUlSLE1BWHBCO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsMkJBWWMsa0JBQUksMENBQXNCLEVBQUNyRixVQUFVLEVBQVgsRUFBZUMsVUFBVSxFQUF6QixFQUF0QixDQUFKLENBWmQ7O0FBQUE7QUFhUSxnRUFBcUIsRUFBQ1QsTUFBTSxJQUFQLEVBQWFDLFNBQVMsVUFBdEIsRUFBckI7QUFiUjtBQUFBOztBQUFBO0FBQUE7QUFBQSwyQkFlYyxrQkFBSSwwQ0FBc0IsRUFBQ1EsVUFBVSxFQUFYLEVBQXRCLENBQUosQ0FmZDs7QUFBQTtBQUFBO0FBQUEsMkJBZ0JjLGtCQUFJLDRDQUFxQjtBQUMzQlQsOEJBQU0sSUFEcUI7QUFFM0JDLGlDQUFTLCtCQUErQm9HLElBQUlSLE1BQW5DLEdBQTRDO0FBRjFCLHFCQUFyQixDQUFKLENBaEJkOztBQUFBO0FBb0JRbkMsNEJBQVFDLEdBQVIsQ0FBWTBDLEdBQVo7O0FBcEJSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQXdCZSxTQUFVSCxLQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUNMLHdCQUFVL0Ysb0JBQVYsRUFBaUJ3QixLQUFqQixDQURLOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9idWlsZC9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYXBwL2luZGV4LmpzXCIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDdlOGMzMDQxNDYzZDJhYzZkOWU0IiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTG9naW4gICAgICAgICAgICAgIGZyb20gJy4vY29tcG9uZW50cy9Mb2dpbic7XG5pbXBvcnQgJy4vYXNzZXRzL2Nzcy9BcHAuc2Nzcyc7XG5pbXBvcnQgcmVkICAgICAgICAgICAgICAgIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9lcy9jb2xvcnMvcmVkXCI7XG5pbXBvcnQgTXVpVGhlbWVQcm92aWRlciAgIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9lcy9zdHlsZXMvTXVpVGhlbWVQcm92aWRlclwiO1xuaW1wb3J0IHtjcmVhdGVNdWlUaGVtZX0gICBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IHtjb25uZWN0fSAgICAgICAgICBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBTbmFja2JhckN1c3RvbSAgICAgZnJvbSBcIi4vY29tcG9uZW50cy9TbmFja2JhckN1c3RvbVwiO1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB0aGVtZSA9IGNyZWF0ZU11aVRoZW1lKHtcbiAgICAgICAgICAgIHBhbGV0dGU6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnZGFyaycsXG4gICAgICAgICAgICAgICAgcHJpbWFyeTogcmVkLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxNdWlUaGVtZVByb3ZpZGVyIHRoZW1lPXtjcmVhdGVNdWlUaGVtZSh0aGVtZSl9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgPExvZ2luLz5cbiAgICAgICAgICAgICAgICAgICAgPFNuYWNrYmFyQ3VzdG9tLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvTXVpVGhlbWVQcm92aWRlcj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gICAgc3RhdGUgPT4gKHt9KSxcbiAgICBkaXNwYXRjaCA9PiAoe30pLFxuKShBcHApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL0FwcC5qcyIsImV4cG9ydCBjb25zdCBVUERBVEVfU05BQ0tCQVIgPSBcIlVQREFURV9TTkFDS0JBUlwiO1xuXG5leHBvcnQgY29uc3QgdXBkYXRlU25hY2tiYXJBY3Rpb24gPSAocGF5bG9hZCA9IHtvcGVuOiBmYWxzZSwgbWVzc2FnZTogJyd9KSA9PiAoeyB0eXBlOiBVUERBVEVfU05BQ0tCQVIsIHBheWxvYWQgfSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2FjdGlvbnMvc25hY2tiYXJfYWN0aW9ucy5qcyIsImV4cG9ydCBjb25zdCBVUERBVEVfVFlQRURfQ1JFRCA9IFwiVVBEQVRFX1RZUEVEX0NSRURcIjtcbmV4cG9ydCBjb25zdCBMT0dJTiAgICAgICAgICAgICA9IFwiTE9HSU5cIjtcbmV4cG9ydCBjb25zdCBSRUFEX1RPS0VOICAgICAgICA9IFwiUkVBRF9UT0tFTlwiO1xuZXhwb3J0IGNvbnN0IEdFVF9UT0tFTiAgICAgICAgID0gXCJHRVRfVE9LRU5cIjtcbmV4cG9ydCBjb25zdCBERUxFVEVfVE9LRU4gICAgICA9IFwiREVMRVRFX1RPS0VOXCI7XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVUeXBlZENyZWRBY3Rpb24gPSAocGF5bG9hZCA9IHt1c2VybmFtZTogJycsIHBhc3N3b3JkOiAnJ30pID0+IHtcbiAgICByZXR1cm4ge3R5cGU6IFVQREFURV9UWVBFRF9DUkVELCBwYXlsb2FkfTtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2dpbkFjdGlvbiA9IChwYXlsb2FkID0ge3VzZXJuYW1lOiAnJywgcGFzc3dvcmQ6ICcnfSkgPT4ge1xuICAgIHJldHVybiB7dHlwZTogTE9HSU4sIHBheWxvYWR9O1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFRva2VuQWN0aW9uID0gKCkgPT4ge1xuICAgIHJldHVybiB7dHlwZTogR0VUX1RPS0VOfTtcbn07XG5cbmV4cG9ydCBjb25zdCByZWFkVG9rZW5BY3Rpb24gPSAocGF5bG9hZCA9IHt0b2tlbjogJyd9KSA9PiB7XG4gICAgcmV0dXJuIHt0eXBlOiBSRUFEX1RPS0VOLCBwYXlsb2FkfTtcbn07XG5cbmV4cG9ydCBjb25zdCBkZWxldGVUb2tlbkFjdGlvbiA9ICgpID0+IHtcbiAgICByZXR1cm4ge3R5cGU6IERFTEVURV9UT0tFTn07XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9hY3Rpb25zL3Rva2VuX2FjdGlvbnMuanMiLCJpbXBvcnQgUmVhY3QgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0NvbXBvbmVudH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0J1dHRvbiwgVGV4dEZpZWxkfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvZXMvaW5kZXhcIjtcbmltcG9ydCAnLi4vYXNzZXRzL2Nzcy9sb2dpbi5zY3NzJztcbmltcG9ydCB7Y29ubmVjdH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHtnZXRUb2tlbkFjdGlvbiwgbG9naW5BY3Rpb24sIHVwZGF0ZVR5cGVkQ3JlZEFjdGlvbn0gZnJvbSBcIi4uL2FjdGlvbnMvdG9rZW5fYWN0aW9uc1wiO1xuaW1wb3J0IHtiaW5kQWN0aW9uQ3JlYXRvcnN9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQge05PX1RPS0VOX0FWQUlMQUJMRX0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tIFwiLi4vbWlkZGxld2FyZS9Mb2NhbFN0b3JhZ2VNaWRkbGV3YXJlXCI7XG5cbmNsYXNzIExvZ2luIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIG9uQ2hhbmdlKHVzZXJuYW1lLCBwYXNzd29yZCkge1xuICAgICAgICBsZXQgdHlwZWQgPSB7fTtcbiAgICAgICAgaWYgKHVzZXJuYW1lICE9PSBudWxsKVxuICAgICAgICAgICAgdHlwZWQudXNlcm5hbWUgPSB1c2VybmFtZTtcbiAgICAgICAgaWYgKHBhc3N3b3JkICE9PSBudWxsKVxuICAgICAgICAgICAgdHlwZWQucGFzc3dvcmQgPSBwYXNzd29yZDtcblxuICAgICAgICB0aGlzLnByb3BzLnVwZGF0ZVR5cGVkKHR5cGVkKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgaWYgKG51bGwgPT09IHRoaXMucHJvcHMudXNlcikge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5nZXRUb2tlbigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gPGRpdiBpZD1cImxvZ2luLWJvZHlcIiBjbGFzc05hbWU9eyh0aGlzLnByb3BzLnRva2VuICE9PSBudWxsICYmIHRoaXMucHJvcHMudG9rZW4gIT09IE5PX1RPS0VOX0FWQUlMQUJMRSAmJiB0aGlzLnByb3BzLnRva2VuLmxlbmd0aCA+IDApID8gJ2hpZGRlbicgOiAnJ30+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLWZvcm1cIj5cbiAgICAgICAgICAgICAgICA8aDE+RnJpZW5kc1F1ZXN0PC9oMT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLWZpZWxkc1wiPlxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInVzZXJuYW1lLWlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVXNlcm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLnVzZXJuYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhhKSA9PiB0aGlzLm9uQ2hhbmdlKGEudGFyZ2V0LnZhbHVlLCBudWxsKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkLWlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImN1cnJlbnQtcGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLnBhc3N3b3JkfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhhKSA9PiB0aGlzLm9uQ2hhbmdlKG51bGwsIGEudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInByaW1hcnlcIiBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMubG9naW4oe3VzZXJuYW1lOiB0aGlzLnByb3BzLnVzZXJuYW1lLCBwYXNzd29yZDogdGhpcy5wcm9wcy5wYXNzd29yZH0pO1xuICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICBMb2dpblxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PjtcbiAgICB9XG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICAgIHN0YXRlID0+ICh7XG4gICAgICAgIHRva2VuOiBzdGF0ZS50b2tlblJlZHVjZXIudG9rZW4sXG4gICAgICAgIHVzZXI6IHN0YXRlLnRva2VuUmVkdWNlci51c2VyLFxuICAgICAgICB1c2VybmFtZTogc3RhdGUudG9rZW5SZWR1Y2VyLnVzZXJuYW1lLFxuICAgICAgICBwYXNzd29yZDogc3RhdGUudG9rZW5SZWR1Y2VyLnBhc3N3b3JkLFxuICAgIH0pLFxuICAgIGRpc3BhdGNoID0+ICh7XG4gICAgICAgIHVwZGF0ZVR5cGVkOiBiaW5kQWN0aW9uQ3JlYXRvcnModXBkYXRlVHlwZWRDcmVkQWN0aW9uLCBkaXNwYXRjaCksXG4gICAgICAgIGxvZ2luOiBiaW5kQWN0aW9uQ3JlYXRvcnMobG9naW5BY3Rpb24sIGRpc3BhdGNoKSxcbiAgICAgICAgZ2V0VG9rZW46IGJpbmRBY3Rpb25DcmVhdG9ycyhnZXRUb2tlbkFjdGlvbiwgZGlzcGF0Y2gpLFxuICAgIH0pLFxuKShMb2dpbik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcG9uZW50cy9Mb2dpbi5qc3giLCJpbXBvcnQge3VwZGF0ZVNuYWNrYmFyQWN0aW9ufSBmcm9tIFwiLi4vYWN0aW9ucy9zbmFja2Jhcl9hY3Rpb25zXCI7XG5pbXBvcnQge2JpbmRBY3Rpb25DcmVhdG9yc30gICBmcm9tIFwicmVkdXhcIjtcbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gICAgIGZyb20gJ3JlYWN0JztcbmltcG9ydCB7U25hY2tiYXJ9ICAgICAgICAgICAgIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9pbmRleC5qc1wiO1xuaW1wb3J0IHtjb25uZWN0fSAgICAgICAgICAgICAgZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5cbmNsYXNzIFNuYWNrYmFyQ3VzdG9tIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGhhbmRsZVJlcXVlc3RDbG9zZSgpIHtcbiAgICAgICAgdGhpcy5wcm9wcy51cGRhdGVNZXNzYWdlKHtvcGVuOiBmYWxzZSwgbWVzc2FnZTogJyd9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8U25hY2tiYXJcbiAgICAgICAgICAgIG9wZW49e3RoaXMucHJvcHMub3Blbn1cbiAgICAgICAgICAgIG1lc3NhZ2U9e3RoaXMucHJvcHMubWVzc2FnZX1cbiAgICAgICAgICAgIGF1dG9IaWRlRHVyYXRpb249ezQwMDB9XG4gICAgICAgICAgICBvbkNsb3NlPXsoKSA9PiB0aGlzLmhhbmRsZVJlcXVlc3RDbG9zZSgpfVxuICAgICAgICAvPlxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICAgIHN0YXRlID0+ICh7XG4gICAgICAgIG9wZW46IHN0YXRlLnNuYWNrYmFyUmVkdWNlci5vcGVuLFxuICAgICAgICBtZXNzYWdlOiBzdGF0ZS5zbmFja2JhclJlZHVjZXIubWVzc2FnZVxuICAgIH0pLFxuICAgIGRpc3BhdGNoID0+ICh7XG4gICAgICAgIHVwZGF0ZU1lc3NhZ2U6IGJpbmRBY3Rpb25DcmVhdG9ycyh1cGRhdGVTbmFja2JhckFjdGlvbiwgZGlzcGF0Y2gpXG4gICAgfSlcbikoU25hY2tiYXJDdXN0b20pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21wb25lbnRzL1NuYWNrYmFyQ3VzdG9tLmpzIiwiaW1wb3J0IFJlYWN0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgQXBwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJy4vQXBwJztcbmltcG9ydCByZWdpc3RlclNlcnZpY2VXb3JrZXIgICAgICAgICAgICAgICAgICAgZnJvbSAnLi9yZWdpc3RlclNlcnZpY2VXb3JrZXInO1xuaW1wb3J0IHJlZHVjZXIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICcuL3JlZHVjZXJzJztcbmltcG9ydCB7YXBwbHlNaWRkbGV3YXJlLCBjcmVhdGVTdG9yZSwgY29tcG9zZX0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IFByb3ZpZGVyICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tIFwicmVhY3QtcmVkdXgvc3JjL2NvbXBvbmVudHMvUHJvdmlkZXJcIjtcbmltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZSAgICAgICAgICAgICAgICAgICAgZnJvbSAncmVkdXgtc2FnYSc7XG5pbXBvcnQgbG9jYWxTdG9yYWdlTWlkZGxld2FyZSAgICAgICAgICAgICAgICAgIGZyb20gJy4vbWlkZGxld2FyZS9Mb2NhbFN0b3JhZ2VNaWRkbGV3YXJlJztcbmltcG9ydCB2U2FnYSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi9zYWdhJztcblxuY29uc3Qgc2FnYSA9IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlKCk7XG5cblxubGV0IG1pZGRsZXdhcmUgPSBbc2FnYSwgbG9jYWxTdG9yYWdlTWlkZGxld2FyZV07XG5cbmNvbnN0IGNvbXBvc2VFbmhhbmNlcnMgPSB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fQ09NUE9TRV9fIHx8IGNvbXBvc2U7XG5jb25zdCBzdG9yZSAgICAgICAgICAgID0gY3JlYXRlU3RvcmUocmVkdWNlciwgY29tcG9zZUVuaGFuY2VycyhhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZSkpKTtcblxuc2FnYS5ydW4odlNhZ2EpO1xuXG5SZWFjdERPTS5yZW5kZXIoXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICAgIDxBcHAvPlxuICAgIDwvUHJvdmlkZXI+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKTtcbnJlZ2lzdGVyU2VydmljZVdvcmtlcigpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2luZGV4LmpzIiwiaW1wb3J0IHsgREVMRVRFX1RPS0VOLCBHRVRfVE9LRU4gfSBmcm9tICcuLi9hY3Rpb25zL3Rva2VuX2FjdGlvbnMnO1xuaW1wb3J0IHsgcmVhZFRva2VuQWN0aW9uIH0gICAgICAgICBmcm9tIFwiLi4vYWN0aW9ucy90b2tlbl9hY3Rpb25zXCI7XG5cbmV4cG9ydCBjb25zdCBOT19UT0tFTl9BVkFJTEFCTEUgPSBcIk5PX1RPS0VOX0FWQUlMQUJMRVwiO1xuXG5leHBvcnQgZGVmYXVsdCBzdG9yZSA9PiBuZXh0ID0+IHtcbiAgICByZXR1cm4gYWN0aW9uID0+IHtcblxuICAgICAgICBpZiAoYWN0aW9uLnR5cGUgPT09IEdFVF9UT0tFTikge1xuICAgICAgICAgICAgbGV0IHRva2VuICAgICAgICA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmcmllbmRxdWVzdF90b2tlbicpO1xuICAgICAgICAgICAgaWYgKG51bGwgIT09IHRva2VuICYmIDAgPCB0b2tlbi5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBzdG9yZS5kaXNwYXRjaChyZWFkVG9rZW5BY3Rpb24oeyB0b2tlbiB9KSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKHJlYWRUb2tlbkFjdGlvbih7IHRva2VuOiBOT19UT0tFTl9BVkFJTEFCTEUgfSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGFjdGlvbi50eXBlID09PSBERUxFVEVfVE9LRU4pIHtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdmcmllbmRxdWVzdF90b2tlbicpO1xuICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2gocmVhZFRva2VuQWN0aW9uKHsgdG9rZW46IE5PX1RPS0VOX0FWQUlMQUJMRSB9KSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV4dChhY3Rpb24pO1xuICAgIH07XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9taWRkbGV3YXJlL0xvY2FsU3RvcmFnZU1pZGRsZXdhcmUuanMiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyIHtcblxuICAgIGNvbnN0cnVjdG9yKGpzb24pIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJVU0VSIExPR0dFRC8gXCIsIGpzb24pO1xuICAgIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9tb2RlbC9Vc2VyLmpzIiwiaW1wb3J0IHtjb21iaW5lUmVkdWNlcnN9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB0b2tlblJlZHVjZXIgICAgICBmcm9tICcuL3Rva2VuX3JlZHVjZXInO1xuaW1wb3J0IHNuYWNrYmFyUmVkdWNlciAgIGZyb20gJy4vc25hY2tiYXJfcmVkdWNlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbWJpbmVSZWR1Y2Vycyh7XG4gICAgdG9rZW5SZWR1Y2VyLFxuICAgIHNuYWNrYmFyUmVkdWNlcixcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9yZWR1Y2Vycy9pbmRleC5qcyIsImltcG9ydCB7VVBEQVRFX1NOQUNLQkFSfSBmcm9tIFwiLi4vYWN0aW9ucy9zbmFja2Jhcl9hY3Rpb25zXCI7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICBvcGVuOiBmYWxzZSxcbiAgICBtZXNzYWdlOiAnJ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBVUERBVEVfU05BQ0tCQVI6XG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgb3BlbjogYWN0aW9uLnBheWxvYWQub3BlbiwgbWVzc2FnZTogYWN0aW9uLnBheWxvYWQubWVzc2FnZSB9O1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvcmVkdWNlcnMvc25hY2tiYXJfcmVkdWNlci5qcyIsImltcG9ydCB7R0VUX1RPS0VOLCBSRUFEX1RPS0VOLCBERUxFVEVfVE9LRU4sIFVQREFURV9UWVBFRF9DUkVELCBMT0dJTn0gZnJvbSBcIi4uL2FjdGlvbnMvdG9rZW5fYWN0aW9uc1wiO1xuaW1wb3J0IGp3dF9kZWNvZGUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tIFwiand0LWRlY29kZVwiO1xuaW1wb3J0IFVzZXIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICcuLi9tb2RlbC9Vc2VyJztcbmltcG9ydCB7Tk9fVE9LRU5fQVZBSUxBQkxFfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi4vbWlkZGxld2FyZS9Mb2NhbFN0b3JhZ2VNaWRkbGV3YXJlJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICAgIHVzZXJuYW1lOiAnJyxcbiAgICBwYXNzd29yZDogJycsXG4gICAgdG9rZW46ICcnLFxuICAgIHVzZXI6IG51bGwsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBVUERBVEVfVFlQRURfQ1JFRDpcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIC4uLmFjdGlvbi5wYXlsb2FkfTtcbiAgICAgICAgY2FzZSBMT0dJTjpcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGV9O1xuICAgICAgICBjYXNlIEdFVF9UT0tFTjpcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGV9O1xuICAgICAgICBjYXNlIFJFQURfVE9LRU46XG4gICAgICAgICAgICBpZiAoTk9fVE9LRU5fQVZBSUxBQkxFID09PSBhY3Rpb24ucGF5bG9hZC50b2tlbiB8fCB1bmRlZmluZWQgPT09IGFjdGlvbi5wYXlsb2FkLnRva2VuIHx8IG51bGwgPT09IGFjdGlvbi5wYXlsb2FkLnRva2VuIHx8IDAgPj0gYWN0aW9uLnBheWxvYWQudG9rZW4ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgdG9rZW46IGFjdGlvbi5wYXlsb2FkLnRva2VufTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHVzZXIgPSBuZXcgVXNlcihqd3RfZGVjb2RlKGFjdGlvbi5wYXlsb2FkLnRva2VuKSk7XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCB0b2tlbjogYWN0aW9uLnBheWxvYWQudG9rZW4sIHVzZXJ9O1xuXG4gICAgICAgIGNhc2UgREVMRVRFX1RPS0VOOlxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgdXNlcjogbnVsbH07XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvcmVkdWNlcnMvdG9rZW5fcmVkdWNlci5qcyIsIi8vIEluIHByb2R1Y3Rpb24sIHdlIHJlZ2lzdGVyIGEgc2VydmljZSB3b3JrZXIgdG8gc2VydmUgYXNzZXRzIGZyb20gbG9jYWwgY2FjaGUuXG5cbi8vIFRoaXMgbGV0cyB0aGUgYXBwIGxvYWQgZmFzdGVyIG9uIHN1YnNlcXVlbnQgdmlzaXRzIGluIHByb2R1Y3Rpb24sIGFuZCBnaXZlc1xuLy8gaXQgb2ZmbGluZSBjYXBhYmlsaXRpZXMuIEhvd2V2ZXIsIGl0IGFsc28gbWVhbnMgdGhhdCBkZXZlbG9wZXJzIChhbmQgdXNlcnMpXG4vLyB3aWxsIG9ubHkgc2VlIGRlcGxveWVkIHVwZGF0ZXMgb24gdGhlIFwiTisxXCIgdmlzaXQgdG8gYSBwYWdlLCBzaW5jZSBwcmV2aW91c2x5XG4vLyBjYWNoZWQgcmVzb3VyY2VzIGFyZSB1cGRhdGVkIGluIHRoZSBiYWNrZ3JvdW5kLlxuXG4vLyBUbyBsZWFybiBtb3JlIGFib3V0IHRoZSBiZW5lZml0cyBvZiB0aGlzIG1vZGVsLCByZWFkIGh0dHBzOi8vZ29vLmdsL0t3dkROeS5cbi8vIFRoaXMgbGluayBhbHNvIGluY2x1ZGVzIGluc3RydWN0aW9ucyBvbiBvcHRpbmcgb3V0IG9mIHRoaXMgYmVoYXZpb3IuXG5cbmNvbnN0IGlzTG9jYWxob3N0ID0gQm9vbGVhbihcbiAgd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lID09PSAnbG9jYWxob3N0JyB8fFxuICAgIC8vIFs6OjFdIGlzIHRoZSBJUHY2IGxvY2FsaG9zdCBhZGRyZXNzLlxuICAgIHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSA9PT0gJ1s6OjFdJyB8fFxuICAgIC8vIDEyNy4wLjAuMS84IGlzIGNvbnNpZGVyZWQgbG9jYWxob3N0IGZvciBJUHY0LlxuICAgIHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZS5tYXRjaChcbiAgICAgIC9eMTI3KD86XFwuKD86MjVbMC01XXwyWzAtNF1bMC05XXxbMDFdP1swLTldWzAtOV0/KSl7M30kL1xuICAgIClcbik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZ2lzdGVyKCkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiAnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSB7XG4gICAgLy8gVGhlIFVSTCBjb25zdHJ1Y3RvciBpcyBhdmFpbGFibGUgaW4gYWxsIGJyb3dzZXJzIHRoYXQgc3VwcG9ydCBTVy5cbiAgICBjb25zdCBwdWJsaWNVcmwgPSBuZXcgVVJMKHByb2Nlc3MuZW52LlBVQkxJQ19VUkwsIHdpbmRvdy5sb2NhdGlvbik7XG4gICAgaWYgKHB1YmxpY1VybC5vcmlnaW4gIT09IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4pIHtcbiAgICAgIC8vIE91ciBzZXJ2aWNlIHdvcmtlciB3b24ndCB3b3JrIGlmIFBVQkxJQ19VUkwgaXMgb24gYSBkaWZmZXJlbnQgb3JpZ2luXG4gICAgICAvLyBmcm9tIHdoYXQgb3VyIHBhZ2UgaXMgc2VydmVkIG9uLiBUaGlzIG1pZ2h0IGhhcHBlbiBpZiBhIENETiBpcyB1c2VkIHRvXG4gICAgICAvLyBzZXJ2ZSBhc3NldHM7IHNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2tpbmN1YmF0b3IvY3JlYXRlLXJlYWN0LWFwcC9pc3N1ZXMvMjM3NFxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgICAgY29uc3Qgc3dVcmwgPSBgJHtwcm9jZXNzLmVudi5QVUJMSUNfVVJMfS9zZXJ2aWNlLXdvcmtlci5qc2A7XG5cbiAgICAgIGlmIChpc0xvY2FsaG9zdCkge1xuICAgICAgICAvLyBUaGlzIGlzIHJ1bm5pbmcgb24gbG9jYWxob3N0LiBMZXRzIGNoZWNrIGlmIGEgc2VydmljZSB3b3JrZXIgc3RpbGwgZXhpc3RzIG9yIG5vdC5cbiAgICAgICAgY2hlY2tWYWxpZFNlcnZpY2VXb3JrZXIoc3dVcmwpO1xuXG4gICAgICAgIC8vIEFkZCBzb21lIGFkZGl0aW9uYWwgbG9nZ2luZyB0byBsb2NhbGhvc3QsIHBvaW50aW5nIGRldmVsb3BlcnMgdG8gdGhlXG4gICAgICAgIC8vIHNlcnZpY2Ugd29ya2VyL1BXQSBkb2N1bWVudGF0aW9uLlxuICAgICAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWFkeS50aGVuKCgpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgICdUaGlzIHdlYiBhcHAgaXMgYmVpbmcgc2VydmVkIGNhY2hlLWZpcnN0IGJ5IGEgc2VydmljZSAnICtcbiAgICAgICAgICAgICAgJ3dvcmtlci4gVG8gbGVhcm4gbW9yZSwgdmlzaXQgaHR0cHM6Ly9nb28uZ2wvU0M3Y2dRJ1xuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gSXMgbm90IGxvY2FsIGhvc3QuIEp1c3QgcmVnaXN0ZXIgc2VydmljZSB3b3JrZXJcbiAgICAgICAgcmVnaXN0ZXJWYWxpZFNXKHN3VXJsKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZWdpc3RlclZhbGlkU1coc3dVcmwpIHtcbiAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXJcbiAgICAucmVnaXN0ZXIoc3dVcmwpXG4gICAgLnRoZW4ocmVnaXN0cmF0aW9uID0+IHtcbiAgICAgIHJlZ2lzdHJhdGlvbi5vbnVwZGF0ZWZvdW5kID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBpbnN0YWxsaW5nV29ya2VyID0gcmVnaXN0cmF0aW9uLmluc3RhbGxpbmc7XG4gICAgICAgIGluc3RhbGxpbmdXb3JrZXIub25zdGF0ZWNoYW5nZSA9ICgpID0+IHtcbiAgICAgICAgICBpZiAoaW5zdGFsbGluZ1dvcmtlci5zdGF0ZSA9PT0gJ2luc3RhbGxlZCcpIHtcbiAgICAgICAgICAgIGlmIChuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5jb250cm9sbGVyKSB7XG4gICAgICAgICAgICAgIC8vIEF0IHRoaXMgcG9pbnQsIHRoZSBvbGQgY29udGVudCB3aWxsIGhhdmUgYmVlbiBwdXJnZWQgYW5kXG4gICAgICAgICAgICAgIC8vIHRoZSBmcmVzaCBjb250ZW50IHdpbGwgaGF2ZSBiZWVuIGFkZGVkIHRvIHRoZSBjYWNoZS5cbiAgICAgICAgICAgICAgLy8gSXQncyB0aGUgcGVyZmVjdCB0aW1lIHRvIGRpc3BsYXkgYSBcIk5ldyBjb250ZW50IGlzXG4gICAgICAgICAgICAgIC8vIGF2YWlsYWJsZTsgcGxlYXNlIHJlZnJlc2guXCIgbWVzc2FnZSBpbiB5b3VyIHdlYiBhcHAuXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdOZXcgY29udGVudCBpcyBhdmFpbGFibGU7IHBsZWFzZSByZWZyZXNoLicpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gQXQgdGhpcyBwb2ludCwgZXZlcnl0aGluZyBoYXMgYmVlbiBwcmVjYWNoZWQuXG4gICAgICAgICAgICAgIC8vIEl0J3MgdGhlIHBlcmZlY3QgdGltZSB0byBkaXNwbGF5IGFcbiAgICAgICAgICAgICAgLy8gXCJDb250ZW50IGlzIGNhY2hlZCBmb3Igb2ZmbGluZSB1c2UuXCIgbWVzc2FnZS5cbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0NvbnRlbnQgaXMgY2FjaGVkIGZvciBvZmZsaW5lIHVzZS4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9O1xuICAgIH0pXG4gICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGR1cmluZyBzZXJ2aWNlIHdvcmtlciByZWdpc3RyYXRpb246JywgZXJyb3IpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBjaGVja1ZhbGlkU2VydmljZVdvcmtlcihzd1VybCkge1xuICAvLyBDaGVjayBpZiB0aGUgc2VydmljZSB3b3JrZXIgY2FuIGJlIGZvdW5kLiBJZiBpdCBjYW4ndCByZWxvYWQgdGhlIHBhZ2UuXG4gIGZldGNoKHN3VXJsKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIC8vIEVuc3VyZSBzZXJ2aWNlIHdvcmtlciBleGlzdHMsIGFuZCB0aGF0IHdlIHJlYWxseSBhcmUgZ2V0dGluZyBhIEpTIGZpbGUuXG4gICAgICBpZiAoXG4gICAgICAgIHJlc3BvbnNlLnN0YXR1cyA9PT0gNDA0IHx8XG4gICAgICAgIHJlc3BvbnNlLmhlYWRlcnMuZ2V0KCdjb250ZW50LXR5cGUnKS5pbmRleE9mKCdqYXZhc2NyaXB0JykgPT09IC0xXG4gICAgICApIHtcbiAgICAgICAgLy8gTm8gc2VydmljZSB3b3JrZXIgZm91bmQuIFByb2JhYmx5IGEgZGlmZmVyZW50IGFwcC4gUmVsb2FkIHRoZSBwYWdlLlxuICAgICAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWFkeS50aGVuKHJlZ2lzdHJhdGlvbiA9PiB7XG4gICAgICAgICAgcmVnaXN0cmF0aW9uLnVucmVnaXN0ZXIoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBTZXJ2aWNlIHdvcmtlciBmb3VuZC4gUHJvY2VlZCBhcyBub3JtYWwuXG4gICAgICAgIHJlZ2lzdGVyVmFsaWRTVyhzd1VybCk7XG4gICAgICB9XG4gICAgfSlcbiAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICdObyBpbnRlcm5ldCBjb25uZWN0aW9uIGZvdW5kLiBBcHAgaXMgcnVubmluZyBpbiBvZmZsaW5lIG1vZGUuJ1xuICAgICAgKTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVucmVnaXN0ZXIoKSB7XG4gIGlmICgnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSB7XG4gICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVhZHkudGhlbihyZWdpc3RyYXRpb24gPT4ge1xuICAgICAgcmVnaXN0cmF0aW9uLnVucmVnaXN0ZXIoKTtcbiAgICB9KTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3JlZ2lzdGVyU2VydmljZVdvcmtlci5qcyIsImltcG9ydCB7TE9HSU4sIHVwZGF0ZVR5cGVkQ3JlZEFjdGlvbn0gZnJvbSBcIi4uL2FjdGlvbnMvdG9rZW5fYWN0aW9uc1wiO1xuaW1wb3J0IHt0YWtlRXZlcnksIHB1dCwgY2FsbH0gICAgICAgICBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XG5pbXBvcnQge3VwZGF0ZVNuYWNrYmFyQWN0aW9ufSAgICAgICAgIGZyb20gXCIuLi9hY3Rpb25zL3NuYWNrYmFyX2FjdGlvbnNcIjtcblxuZnVuY3Rpb24qIGxvZ2luKGFjdGlvbikge1xuICAgIGNvbnN0IHJlcyA9IHlpZWxkIGNhbGwoZmV0Y2gsIFwiL2xvZ2luXCIsIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShhY3Rpb24ucGF5bG9hZCksXG4gICAgICAgIH0sXG4gICAgKTtcblxuICAgIGlmICgyMDAgPT09IHJlcy5zdGF0dXMpIHtcbiAgICAgICAgeWllbGQgcHV0KHVwZGF0ZVR5cGVkQ3JlZEFjdGlvbih7dXNlcm5hbWU6ICcnLCBwYXNzd29yZDogJyd9KSk7XG4gICAgICAgIHVwZGF0ZVNuYWNrYmFyQWN0aW9uKHtvcGVuOiB0cnVlLCBtZXNzYWdlOiAnbG9nZ2VkaW4nfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgeWllbGQgcHV0KHVwZGF0ZVR5cGVkQ3JlZEFjdGlvbih7cGFzc3dvcmQ6ICcnfSkpO1xuICAgICAgICB5aWVsZCBwdXQodXBkYXRlU25hY2tiYXJBY3Rpb24oe1xuICAgICAgICAgICAgb3BlbjogdHJ1ZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdVbmUgZXJyZXVyIGVzdCBzdXJ2ZW51ZSEgKCcgKyByZXMuc3RhdHVzICsgJyknLFxuICAgICAgICB9KSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogdnNhZ2EoKSB7XG4gICAgeWllbGQgdGFrZUV2ZXJ5KExPR0lOLCBsb2dpbik7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3NhZ2EvaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9