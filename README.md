# jQuery Expand Plugin
A tiny jQuery Plugin to expand and contract some content on click.

## Usage
	$('dl').expand(
	{
		triggers:'dt a',
		expandables:'dd',
		open:':first'
	});

## Options
	triggers:null,				// Required, any child element, e.g. 'dt a'
	expandables:null,			// Required, any child element, e.g. 'dd'
	open:':first',				// Possible choices are e.g. ':first', ':last', ...
	duration:200,				// Slide duration
	easing:'swing'				// Animation: 'swing' or 'linear' are supported by default. For more advanced easing include the jquery.easing plugin.

## HTML Structure
	<dl>
		<dt><a>Heading 1</a></dt>
		<dd>Content 1</dd>
	</dl>
	<dl>
		<dt><a>Heading 2</a></dt>
		<dd>Content 2</dd>
	</dl>
	<dl>
		<dt><a>Heading 3</a></dt>
		<dd>Content 3</dd>
	</dl>
	<dl>
		<dt><a>Heading 4</a></dt>
		<dd>Content 4</dd>
	</dl>

	<div>
		<h3><a>Heading 1</a></h3>
		<p>Content 1</p>
		<hr />
		<h3><a>Heading 2</a></h3>
		<p>Content 2</p>
		<hr />
		<h3><a>Heading 3</a></h3>
		<p>Content 3</p>
		<hr />
		<h3><a>Heading 4</a></h3>
		<p>Content 4</p>
	</div>