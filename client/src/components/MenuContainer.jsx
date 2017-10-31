import React, { Component } from 'react';
// import { slide as Menu } from 'react-burger-menu'
import { Link } from 'react-router-dom'

class MenuCategories extends Component{
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return(
            <div>
                {this.props.categories.map(function(category){
                    // return (<h3 className='category'><Link to={`/${category}`}>{category}</Link></h3>)
                    return (<h3 className='category'>{category}</h3>)
                })}
            </div>
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
        let body=document.querySelector('body')
        console.log(app.style.backgroundColor)
        if(!app.style.filter){
            // html.style.backgroundColor = 'rgba(128, 128, 128, .8)'
            app.style.filter= 'blur(5px)'
            body.addEventListener('onClick', this.toggleHTMLBackground)
            console.log('added event')
        }
        else{
            app.style.filter=''
            body.removeEventListener('onClick', this.toggleHTMLBackground, false)
            console.log('removed event')
        }
        
    }

    handleMenu = (e) => {
        this.toggleHTMLBackground()
        
        this.setState({
            show: !this.state.show
        })
    }



    render(){
        return(
            <div className='menuContainer'>
                <i onClick={(e) => {this.handleMenu(e)}} className="fa fa-bars fa-2x" aria-hidden="true"></i> 
                {<Menu show={this.state.show} categories={this.props.categories}/>}
            </div>
            
        )
    }
}



export default MenuContainer;
