import React, { Component } from 'react';
import UploadPreview from 'material-ui-upload/UploadPreview';
 
export default class UploadFilePreview extends Component {
    constructor() {
        super();
        this.state = {
            pictures: {}
        };
    }
 
    onChange(pictures){ this.setState({ pictures });}
 
    render() {
        return (
            <UploadPreview
              title="Upload Photo"
              label="Add"
              initialItems={this.state.pictures}
              onChange={this.onChange}
              />
        );
    }
}