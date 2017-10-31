import React, { Component } from 'react';
// import { slide as Menu } from 'react-burger-menu'


class Menu extends Component{
    constructor(){
        super();
        this.state={

        }
    }

    render(){
        if(this.props.show){
            return(
                <div className='menu'>   
                    test
                </div>
            )
        }
        return(null)
    }
}

class MenuContainer extends Component{
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
        return(
            <div className='menuContainer'>
                <i onClick={(e) => {this.handleMenu(e)}} className="fa fa-bars fa-2x" aria-hidden="true"></i> 
                {<Menu show={this.state.show}/>}
            </div>
            
        )
    }
}



export default MenuContainer;
