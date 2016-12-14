import React, { Component, PropTypes } from 'react';
import AvatarSimple from './AvatarSimple';
import SelectFieldSimple from '../components/SelectFieldSimple';

import * as t from 'material-ui/Tabs';
import * as IB from 'material-ui/IconButton';
import SelectField from 'material-ui/SelectField';
import DropDownMenu from 'material-ui/DropDownMenu';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';

import {
	    Icon, 
        Textfield, 
		IconButton, 
		Grid, 
		Cell, 
		Chip,
		Card,
		CardText,
		CardTitle,
		CardActions,
		CardMenu,
		Button,
		Menu,
		MenuItem
} from 'react-mdl';

import NavigationMoreVert from 'material-ui/svg-icons/navigation/more-vert';

const styles = {
  div:{
    display: 'flex',
    flexDirection: 'row wrap',
    padding: 0,
    width: '100%'
  },
  chip: {
    margin: 4
  },
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  }
};

class MainSection extends Component {
	constructor(){
		super();
		var w = window,
        d = document,
        documentElement = d.documentElement,
        body = d.getElementsByTagName('body')[0],
        width = w.innerWidth || documentElement.clientWidth || body.clientWidth,
		flag = width>769? true:false;
		
		//alert (flag)
		this.state = {
		value: 1,
		//displayGrid: flag,
		displayCard: true,
		disabledFlag: true
	  };

		this.updateDimensions = this.updateDimensions.bind(this);	  
	}

	  updateDimensions() {
		var w = window,
			d = document,
			documentElement = d.documentElement,
			body = d.getElementsByTagName('body')[0],
			width = w.innerWidth || documentElement.clientWidth || body.clientWidth;
			this.setState({ width: width });
    
  }
  
    /**
   * Add event listener
   */
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
	
  }

  /**
   * Remove event listener
   */
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
	
  }
  
  
  render() {
	const showGrid = {
	'display': this.state.displayGrid ? 'flex' : 'none'
	} 

	const showCard = {
	'display': this.state.displayCard ? 'flex' : 'none',
	margin:'auto',
	float: 'left'
	} 

	const showForm = () => {
		var w = window,
			d = document,
			documentElement = d.documentElement,
			body = d.getElementsByTagName('body')[0],
			width = w.innerWidth || documentElement.clientWidth || body.clientWidth;
		//alert (this.state.width < 769);
		if (this.state.width < 769){ 
		this.setState({displayGrid: !this.state.displayGrid, displayCard: this.state.displayGrid});	
		}  

	}
	const disabledForm = () => {
		
		this.setState({disabledFlag: !this.state.disabledFlag});			 
	}
    return (
	
	
    <div> 
	
	
	<Card id="maxsize" shadow={0} style={showCard}>
		<CardTitle style={{color: '#fff', height: '48px', backgroundColor: 'rgb(92, 106, 192)'}}>

		<Textfield
						onChange={() => {}}
						label="Expandable Input"
						expandable
						expandableIcon="search"
						style={{width:'200px', paddingTop: '10px'}}
					/></CardTitle>
		<CardText style={{height: '610px', overflowY: 'scroll'}}>
			<AvatarSimple />
		</CardText>

		<CardMenu style={{color: '#fff',position: 'absolute', right: '0px', top: '0px'}}>
			<IconButton className="muidocs-icon-custom-sort" name=""  style={{top: '4px'}}/>
			<IconButton name="filter_list" style={{top: '5px'}} onClick={showForm}/>
			<Chip style={styles.chip}>9999</Chip>	
			<IconButton name="more_vert" id="demo-menu-lower-right" style={{top: '5px'}}/>
			<Menu target="demo-menu-lower-right" align="right">
				<MenuItem>Some Action</MenuItem>
				<MenuItem disabled>Disabled Action</MenuItem>
			</Menu>
		</CardMenu>
	</Card>
	
	<Grid className="fadeshow" >

		<Cell col={8} style={{width: '100%'}}>
		<t.Tabs>
				<t.Tab icon={<Icon name="person" />} style={{backgroundColor: 'rgb(92, 106, 192)', height:'inherit'}} >
				  <div style={{padding: '0px 0px 0px 10px'}}>
					<h2 style={styles.headline}><IconButton name="filter_list" style={{top: '5px'}} onClick={showForm}/>Employee Management</h2>

						<Grid style={{margin: '0px'}}>
								<Cell col={4} style={{width: 'calc(50%)'}}>
								
											<Textfield
												onChange={() => {}}
												label="Text..."
												floatingLabel
												style={{width: '300px'}}
												disabled={this.state.disabledFlag}
											/>
											
											<Textfield
												onChange={() => {}}
												pattern="-?[0-9]*(\.[0-9]+)?"
												error="Input is not a number!"
												label="Number..."
												floatingLabel
												disabled={this.state.disabledFlag}
											/>
											
											<Textfield
												onChange={() => {}}
												label="Text lines..."
												rows={3}
												style={{width: '300px'}}
												floatingLabel
												disabled={this.state.disabledFlag}
											/>

						</Cell>
						<Cell col={4} style={{width: 'calc(50%)'}}>
											<TextField
											  hintText="Hint Text"
											  floatingLabelText="Fixed Floating Label Text"
											  floatingLabelFixed={true}
											  
											  disabled={this.state.disabledFlag}
											/>

								<SelectFieldSimple />
								<DatePicker hintText="Portrait"  floatingLabelText="Ranged Date Picker" disabled={this.state.disabledFlag}/>
								
								<Button raised colored ripple onClick={disabledForm}>Edit</Button>
							</Cell>	
						</Grid>	
				  </div>
				</t.Tab>
				<t.Tab style={{backgroundColor: 'rgb(92, 106, 192)'}}
				  icon={<Icon name="history" />} >
				  <div>
					<h2 style={styles.headline}>Employement History</h2>
					<p>
					  This is another example tab. 
					</p>

				  </div>
				</t.Tab>
				<t.Tab style={{backgroundColor: 'rgb(92, 106, 192)'}}
				  icon={<Icon name="grade" />} >
				  <div>
					<h2 style={styles.headline}>Grade History</h2>
					<p>
					  This is another example tab.
					</p>
				  </div>
				</t.Tab>
				<t.Tab style={{backgroundColor: 'rgb(92, 106, 192)'}}
				  icon={<Icon name="people" />} >
				  <div>
					<h2 style={styles.headline}>Family Members</h2>
					<p>
					  This is another example tab.
					</p>
				  </div>
				</t.Tab>
				<t.Tab style={{backgroundColor: 'rgb(92, 106, 192)'}}
				  icon={<Icon name="home" />} >
				  <div>
					<h2 style={styles.headline}>Addresses</h2>
					<p>
					  This is another example tab.
					</p>
				  </div>
				</t.Tab>
				<t.Tab style={{backgroundColor: 'rgb(92, 106, 192)'}}
				  icon={<Icon name="person_pin" />} >
				  <div>
					<h2 style={styles.headline}>Office Location</h2>
					<p>
					  This is another example tab.
					</p>
				  </div>
				</t.Tab>
			  </t.Tabs>
		
		</Cell>
	</Grid>
	</div>
    );
  }
}

export default MainSection;
