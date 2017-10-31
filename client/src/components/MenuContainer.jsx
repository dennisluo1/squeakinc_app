import React, { Component } from 'react';
// import { slide as Menu } from 'react-burger-menu'

class MenuCategories extends Component{
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        console.log('menu categories');
        console.log(this.props.categories)
        return(
            <ul>
                {this.props.categories.map(function(category){
                    return (<li>{category}</li>)
                })}
            </ul>
        )
    }
}


class Menu extends Component{
    constructor(){
        super();
        this.state = {

        }
    }


    render(){

        if(this.props.show){
            console.log('menu');
            console.log(this.props.categories)
            return(
                <div className='menu'>   
                    <MenuCategories categories={this.props.categories} />
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
        console.log('menucontainer');
        console.log(this.props.categories)
        return(
            <div className='menuContainer'>
                <i onClick={(e) => {this.handleMenu(e)}} className="fa fa-bars fa-2x" aria-hidden="true"></i> 
                {<Menu show={this.state.show} categories={this.props.categories}/>}
            </div>
            
        )
    }
}



export default MenuContainer;
