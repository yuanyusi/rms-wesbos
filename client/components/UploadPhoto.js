import React, {Component} from 'react';
import ReactDOM from "react-dom";
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

export default class UploadPhoto extends Component {
constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
	this._openFileDialog = this._openFileDialog.bind(this);
  }
handleChange(e){
  console.log(e.target.value)
}
_openFileDialog(){
  var fileUploadDom = ReactDOM.findDOMNode(this.refs.fileUpload);
  fileUploadDom.click();
}
render() {
  return (<div>
    <FlatButton
      label="Upload file"
      onClick={this._openFileDialog}>
    <input
      ref="fileUpload"
      type="file" 
      style={{"display" : "none"}}
      onChange={this._handleChange}/>
	  </FlatButton>

</div>
  );
}
}