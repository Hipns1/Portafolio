import React, { StrictMode } from 'react';	
import ReactDOM from 'react-dom';
import Container from './Container/Container.js';
import "../src/Styles/General.scss";

ReactDOM.render(
	<StrictMode>
		<Container/>
	</StrictMode>,
	document.getElementById('root')
)
