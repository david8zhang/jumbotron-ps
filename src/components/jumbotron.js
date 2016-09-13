import React, { Component } from 'react';

/**
 * @property {String} image_url: 				The url of the image to place next to the main titles
 * @property {String} title: 					The title text to be displayed on the jumbotron
 * @property {String} action_button_text: 		The text to place inside of the button
 * @property {String} description: 				The description text to be displayed underneath the text
 * @property {Object} outer_style (OPTIONAL): 	The customized outer style
 * @property {String} bg_color (OPTIONAL): 		The color of the background. DEfaults to a royal blue
 */
class JumboTron extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		var wrapper_style = {
			padding:'0px',
			marginBottom:'10px'
		}

		var jumbo_style = {
			height: '600px',
			backgroundColor:this.props.bg_color || '#2975de',
			padding:'80px 0px',
		}

		if(this.props.outer_style) {
			for(var key in this.props.outer_style) {
				jumbo_style[key] = this.props.outer_style[key];
			}
		}

		var h2_p_style = {
			color: 'white'
		}

		var start_button_style = {
			backgroundColor:'#7eb530',
			borderRadius:'100px',
			padding:'15px 60px',
			color:'white'
		}

		var icon_style = {
			marginTop: '20%',
			maxWidth:'500px',
			maxHeight:'500px',
			marginLeft:'10%'
		}

		var jumbo_content_style = {
			fontSize:'20px',
			textAlign:'center',
			display:'table-cell',
			paddingTop:'123px',
			paddingRight:'10px'
		}

		var wrap_style = {
			width:'90%',
			maxWidth:'1100px',
			margin: '0 auto'
		}


		return (
			<div className='small-12 large-12 columns' style={wrapper_style}>
			    <div class="jumbo" style={jumbo_style}>
			      <div class="wrap row" style={wrap_style}>
			          {
			          	  this.props.children || 
				          <div class="jumbo-content" style={jumbo_content_style}>
				           	<h2 style={h2_p_style}>{this.props.title}</h2>
				            <p style={h2_p_style}>{this.props.description}</p>
				            <button type="button" class="start-button large button" style={start_button_style}>
				            	{this.props.action_button_text}
				            </button>
				          </div>
			      		}
			      </div>
			    </div>
			</div>
		)
	}
}

export default JumboTron;