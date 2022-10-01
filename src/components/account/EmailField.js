import { TextField } from "@mui/material";
import React from 'react';

export default class EmailField extends React.Component {
    //eslint-disable-next-line
    EMAIL_REGEX = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    constructor(props) {
        super(props);
        this.state = {
            helperText: '',
            error: false
        }
    }

    onChange(event) {
        if (event.target.value.match(this.EMAIL_REGEX)) {
            this.setState({ helperText: '', error: false });
        } else {
            this.setState({ helperText: 'Please enter a valid email address.', error: true });
        }
    }

    render() {
        return <TextField
            className='w-full'
            label="Email"
            variant="outlined"
            size='small' 
        
            helperText={this.state.helperText}
            onChange={this.onChange.bind(this)}
            error={this.state.error}
        />
    }
}
