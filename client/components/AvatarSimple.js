import React, { Component, PropTypes } from 'react';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import Divider from 'material-ui/Divider';

import CreateEmployeeDialog from './CreateEmployeeDialog';

import {
  blue300,
  indigo900,
  orange200,
  deepOrange300,
  pink400,
  purple500
} from 'material-ui/styles/colors';

import {
	    Icon, 
        Textfield, 
		IconButton, 
		Grid, 
		Cell, 
		Layout, 
		Header, 
		FABButton,
		List,
		ListItem,
		ListItemContent,
		ListItemAction,
		Chip,
		Card,
		CardText,
		CardTitle,
		CardActions,
		CardMenu,
		Button,
		Menu,
		MenuItem,
		Dialog,
		DialogActions,
		DialogContent,
		DialogTitle
} from 'react-mdl';


const style = {
  left:{
    display: 'inline-block',
	overflow: 'hidden'
  },
    right:{
    padding: '0px 20px 0px 0px',
	textAlign: 'right',
	float: 'right'
  },
    icon:{
    margin: '0px 10px 0px 0px'
	
  }
};

export default class AvatarSimple extends React.Component {
  render() {
	    return (
<div>

  <List >
    <ListItem threeLine>
    <ListItemContent avatar={
        <Avatar
          src={require('./images/pic.png')}
          size={48}
          style={style.icon}
        />
      }
	  subtitle={
		<span>  
	  SE - PG,  CDC AsteRx <br />  
	  Bali, +6281234567890
		 </span> 
	  }>Bryan Cranston</ListItemContent>
    <ListItemAction info="22 Aug 2015">      
	  <Icon name="radio_button_unchecked" style={{color:"#673ab7"}} />
	  <a href="#"><Icon name="keyboard_arrow_right" /></a>
    </ListItemAction>
  </ListItem>
  <Divider />
    <ListItem threeLine>
    <ListItemContent avatar={
        <Avatar
          src={require('./images/pic.png')}
          size={48}
          style={style.icon}
        />
      }
	  subtitle={
		<span>  
	  SE - PG,  CDC AsteRx <br />  
	  Bali, +6281234567890
		 </span> 
	  }>Bryan Cranston</ListItemContent>
    <ListItemAction info="22 Aug 2015">      
	  <Icon name="radio_button_unchecked" style={{color:"#673ab7"}} />
	  <a href="#"><Icon name="keyboard_arrow_right" /></a>
    </ListItemAction>
  </ListItem>
  <Divider />
    <ListItem threeLine>
    <ListItemContent avatar={
        <Avatar
          src={require('./images/pic.png')}
          size={48}
          style={style.icon}
        />
      }
	  subtitle={
		<span>  
	  SE - PG,  CDC AsteRx <br />  
	  Bali, +6281234567890
		 </span> 
	  }>Bryan Cranston</ListItemContent>
    <ListItemAction info="22 Aug 2015">      
	  <Icon name="radio_button_unchecked" style={{color:"#673ab7"}} />
	  <a href="#"><Icon name="keyboard_arrow_right" /></a>
    </ListItemAction>
  </ListItem>
  <Divider />
    <ListItem threeLine>
    <ListItemContent avatar={
        <Avatar
          src={require('./images/pic.png')}
          size={48}
          style={style.icon}
        />
      }
	  subtitle={
		<span>  
	  SE - PG,  CDC AsteRx <br />  
	  Bali, +6281234567890
		 </span> 
	  }>Bryan Cranston</ListItemContent>
    <ListItemAction info="22 Aug 2015">      
	  <Icon name="radio_button_unchecked" style={{color:"#673ab7"}} />
	  <a href="#"><Icon name="keyboard_arrow_right" /></a>
    </ListItemAction>
  </ListItem>
  <Divider />
  <ListItem threeLine>
    <ListItemContent avatar={
        <Avatar
          src={require('./images/pic.png')}
          size={48}
          style={style.icon}
        />
      }
	  subtitle={
		<span>  
	  SE - PG,  CDC AsteRx <br />  
	  Bali, +6281234567890
		 </span> 
	  }>Bryan Cranston</ListItemContent>
    <ListItemAction info="22 Aug 2015">      
	  <Icon name="radio_button_unchecked" style={{color:"#673ab7"}} />
	  <a href="#"><Icon name="keyboard_arrow_right" /></a>
    </ListItemAction>
  </ListItem>
  <Divider />
  <ListItem threeLine>
    <ListItemContent avatar={
        <Avatar
          src={require('./images/pic.png')}
          size={48}
          style={style.icon}
	/>
	} 
	subtitle={
		  <span> 
	  SE - PG,  CDC AsteRx <br />  
	  Bali, +6281234567890
		  </span> 
	  }>Aaron Paul</ListItemContent>
    <ListItemAction info="22 Aug 2015">      
	  <Icon name="radio_button_checked" style={{color:"#673ab7"}} />
	  <a href="#"><Icon name="keyboard_arrow_right" /></a>
    </ListItemAction>
  </ListItem>
   <Divider />
  <ListItem threeLine>
    <ListItemContent avatar={
        <Avatar
          src={require('./images/pic.png')}
          size={48}
          style={style.icon}
	/>} subtitle={
		  <span> 
	  SE - PG,  CDC AsteRx <br />  
	  Bali, +6281234567890
		  </span> 
	  }>Bob Odenkirk</ListItemContent>
    <ListItemAction info="22 Aug 2015">      
	  <Icon name="radio_button_unchecked" style={{color:"#673ab7"}} />
	  <a href="#"><Icon name="keyboard_arrow_right" /></a>
    </ListItemAction>
  </ListItem>
   <Divider />
</List>
<div className="bd-smoothscroll-3 ">

<CreateEmployeeDialog />
</div>
</div>
)
}
}