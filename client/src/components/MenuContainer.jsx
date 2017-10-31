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

    toggleHTMLBackground = () => {
        let app = document.querySelector('.App');
        console.log(app.style.backgroundColor)
        if(!app.style.filter){
            // html.style.backgroundColor = 'rgba(128, 128, 128, .8)'
            app.style.filter= 'blur(5px)'
        }
        else{
            app.style.filter=''
        }
        
    }

    handleMenu = (e) => {
        console.log('clicked')
        this.toggleHTMLBackground()
        
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
