# Description
jumbotron unit with image and text

# Styles
You must have Foundation 6 included as part of the project for this component to work!

Get it here: [Foundation 6](http://foundation.zurb.com/sites/download.html/)

Require it in your html

```
<link rel="stylesheet" type="text/css" href="./style/css/app.css">
<link rel="stylesheet" type="text/css" href="./style/css/foundation.css">
<link rel="stylesheet" type="text/css" href="./style/css/foundation.min.css">
```

# Usage
Pass in titles, description, and custom styles. As always, custom children are also supported.

```
var custom_style = {
	display: 'block',
	height:'250px',
	backgroundImage: `url(${'https://secure.static.tumblr.com/bd29e7e9e5d2dc6928ae2fef2a43771d/vthdtca/bAnnrejpi/tumblr_static_tumblr_static_dm0oc1iqtlskw8g44c8cwks0g_640.png'})`
}

<JumboTron 
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
```