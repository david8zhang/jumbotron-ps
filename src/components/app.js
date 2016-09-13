import React, { Component } from 'react';
import JumboTron from './jumbotron';

class App extends Component {
	render() {
		var custom_style = {
			display: 'block',
			height:'250px',
			backgroundImage: `url(${'https://secure.static.tumblr.com/bd29e7e9e5d2dc6928ae2fef2a43771d/vthdtca/bAnnrejpi/tumblr_static_tumblr_static_dm0oc1iqtlskw8g44c8cwks0g_640.png'})`
		}
		return <div>
			<JumboTron 
				image_url='https://drslash.com/wp-content/uploads/2014/07/Firefox.png'
				title='Sample Title'
				action_button_text='More info!'
				description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled "
				/>
			<br/>
			<JumboTron outer_style={custom_style} bg_color='#26A65B'>
				<div style={{margin:'0 auto'}}>
					<h1 style={{color: 'white', textAlign:'center'}}>Hello World!</h1>
				</div>
			</JumboTron>
		</div>
	}
}

export default App;