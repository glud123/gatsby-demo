import React from 'react';
import Link from 'gatsby-link';
export default () => (
	<div style={{ margin: '3rem auto', maxWidth: 600 }}>
		<h1>Hello world!</h1>
		<h2>
			<Link to="/about-css-modules/">To about-css-modules page</Link>
		</h2>
		<p>
			From Richard Hamming’s classic and must-read talk, “<a href="http://www.cs.virginia.edu/~robins/YouAndYourResearch.html">
				You and Your Research
			</a>”.
		</p>
		<blockquote>
			<p>
				There is indeed an element of luck, and no, there isn’t. The prepared mind sooner or later finds
				something important and does it. So yes, it is luck.{' '}
				<em>The particular thing you do is luck, but that you do something is not.</em>
			</p>
		</blockquote>
		<p>Posted April 09, 2011</p>
	</div>
);
