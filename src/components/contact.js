import React, { Component } from 'react';

class Contact extends Component{
    render() {
        return <div>
            <div>{this.props.index}</div>
            <div>{this.props.element.name}</div>
            <button onClick={this.props.handleclick}>Click me: {this.props.clickNumber}</button>
        </div>
    }
}
export default Contact;
