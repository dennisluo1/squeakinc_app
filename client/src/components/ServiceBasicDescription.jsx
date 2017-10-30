import React, { Component } from 'react';


class ServiceBasicDescription extends Component{
    constructor(){
        super();
        this.state = {

        }
    }



    render(){
        return (
            <div>
                <img src={this.props.icon} alt=""/>
                <h3>{this.props.title}</h3>
                <h5>{this.props.description}</h5>
            </div>
            
        )
    }
}



export default ServiceBasicDescription;
