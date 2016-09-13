'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @property {String} image_url: 				The url of the image to place next to the main titles
 * @property {String} title: 					The title text to be displayed on the jumbotron
 * @property {String} action_button_text: 		The text to place inside of the button
 * @property {String} description: 				The description text to be displayed underneath the text
 * @property {Object} outer_style (OPTIONAL): 	The customized outer style
 * @property {String} bg_color (OPTIONAL): 		The color of the background. DEfaults to a royal blue
 */

var JumboTron = (function (_Component) {
	_inherits(JumboTron, _Component);

	function JumboTron(props) {
		_classCallCheck(this, JumboTron);

		return _possibleConstructorReturn(this, (JumboTron.__proto__ || Object.getPrototypeOf(JumboTron)).call(this, props));
	}

	_createClass(JumboTron, [{
		key: 'render',
		value: function render() {
			var wrapper_style = {
				padding: '0px',
				marginBottom: '10px'
			};

			var jumbo_style = {
				height: '600px',
				backgroundColor: this.props.bg_color || '#2975de',
				padding: '80px 0px'
			};

			if (this.props.outer_style) {
				for (var key in this.props.outer_style) {
					jumbo_style[key] = this.props.outer_style[key];
				}
			}

			var h2_p_style = {
				color: 'white'
			};

			var start_button_style = {
				backgroundColor: '#7eb530',
				borderRadius: '100px',
				padding: '15px 60px',
				color: 'white'
			};

			var icon_style = {
				marginTop: '20%',
				maxWidth: '500px',
				maxHeight: '500px',
				marginLeft: '10%'
			};

			var jumbo_content_style = {
				fontSize: '20px',
				textAlign: 'center',
				display: 'table-cell',
				paddingTop: '123px',
				paddingRight: '10px'
			};

			var wrap_style = {
				width: '90%',
				maxWidth: '1100px',
				margin: '0 auto'
			};

			return _react2.default.createElement(
				'div',
				{ className: 'small-12 large-12 columns', style: wrapper_style },
				_react2.default.createElement(
					'div',
					{ 'class': 'jumbo', style: jumbo_style },
					_react2.default.createElement(
						'div',
						{ 'class': 'wrap row', style: wrap_style },
						this.props.children || _react2.default.createElement(
							'div',
							{ 'class': 'jumbo-content', style: jumbo_content_style },
							_react2.default.createElement(
								'h2',
								{ style: h2_p_style },
								this.props.title
							),
							_react2.default.createElement(
								'p',
								{ style: h2_p_style },
								this.props.description
							),
							_react2.default.createElement(
								'button',
								{ type: 'button', 'class': 'start-button large button', style: start_button_style },
								this.props.action_button_text
							)
						)
					)
				)
			);
		}
	}]);

	return JumboTron;
})(_react.Component);

exports.default = JumboTron;