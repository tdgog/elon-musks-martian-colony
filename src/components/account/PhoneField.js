import { TextField } from "@mui/material";
import React from 'react';

export default class PhoneField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            helperText: '',
            error: false
        }
    }

    onChange(event) {}

    render() {
        return <TextField
            className='w-full'
            label="Phone Number"
            variant="outlined"
            size='small' 
        
            helperText={this.state.helperText}
            onChange={this.onChange.bind(this)}
            error={this.state.error}
        />
    }
}
