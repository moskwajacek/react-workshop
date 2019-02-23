import React, { Component } from 'react';
import Contact from './contact.js';


class Main extends Component  {

    state = {
        clickNumber: 0
    }

    handleclick = () => {
        this.setState({
            clickNumber: this.state.clickNumber + 1
        })
    }


    render() {
        let mainObj = this.props.mainObj;
        console.log(mainObj);

        let list = mainObj.map((element, index) =>
            <div key={index}>

                <Contact handleclick={this.handleclick} clickNumber={this.state.clickNumber} index={index} element={element}/>
            </div>);

        return <div>{list}</div>

    }
}

export default Main;
