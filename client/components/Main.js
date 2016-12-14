import React from 'react';
import { Link } from 'react-router';
import CustomHeader from './CustomHeader';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from '../css/material_ui_raw_theme_file'

class Main extends React.Component {
	render(){
		return (
			<div>
			<CustomHeader />
			 <MuiThemeProvider muiTheme={theme}>	
				{React.cloneElement(this.props.children, this.props)}
			 </MuiThemeProvider>
			</div>
		);
	}
};

export default Main;