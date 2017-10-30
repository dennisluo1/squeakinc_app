import React, { Component } from 'react';


class Menu extends Component{
    constructor(){
        super();
        this.state = {
            show: false
        }
    }

    handleMenu = (e) => {
        console.log('clicked')
        this.setState({
            show: !this.state.show
        })
    }


    render(){
        if(this.state.show){
            return(
                <div onClick={(e) => {this.handleMenu(e)}} className='menu'>
                    Test
                </div>
            )
        }
        return (
            <i onClick={(e) => {this.handleMenu(e)}} className="fa fa-bars fa-2x" aria-hidden="true"></i> 
        )
    }
}



export default Menu;
