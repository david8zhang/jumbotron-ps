'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _jumbotron = require('./jumbotron');

var _jumbotron2 = _interopRequireDefault(_jumbotron);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = (function (_Component) {
	_inherits(App, _Component);

	function App() {
		_classCallCheck(this, App);

		return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
	}

	_createClass(App, [{
		key: 'render',
		value: function render() {
			var custom_style = {
				display: 'block',
				height: '250px',
				backgroundImage: 'url(' + 'https://secure.static.tumblr.com/bd29e7e9e5d2dc6928ae2fef2a43771d/vthdtca/bAnnrejpi/tumblr_static_tumblr_static_dm0oc1iqtlskw8g44c8cwks0g_640.png' + ')'
			};
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(_jumbotron2.default, {
					image_url: 'https://drslash.com/wp-content/uploads/2014/07/Firefox.png',
					title: 'Sample Title',
					action_button_text: 'More info!',
					description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled '
				}),
				_react2.default.createElement('br', null),
				_react2.default.createElement(
					_jumbotron2.default,
					{ outer_style: custom_style, bg_color: '#26A65B' },
					_react2.default.createElement(
						'div',
						{ style: { margin: '0 auto' } },
						_react2.default.createElement(
							'h1',
							{ style: { color: 'white', textAlign: 'center' } },
							'Hello World!'
						)
					)
				)
			);
		}
	}]);

	return App;
})(_react.Component);

exports.default = App;