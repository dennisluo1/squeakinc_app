import React, { Component } from 'react';
import ServiceBasicDescription from './ServiceBasicDescription'


class Home extends Component{
    constructor(){
        super();
        this.state = {

        }
    }



    render(){
        return (
            <div>
                <div className='top'>

                    <img className='logo' src="./images/logo.png" alt=""/>
                    <div className='companyName'>
                        <h1>SQUEAK Inc.</h1>
                    </div>
                    <i className="fa fa-bars fa-2x" aria-hidden="true"></i> 
                </div>

                <section className='heroSection'></section>
                <section className='whatWeDoSection'>
                    <h1>What we do</h1>
                    <ServiceBasicDescription icon='' title='' description=''/>
                    <ServiceBasicDescription/>
                    <ServiceBasicDescription/>

                </section>
            </div>
            
        )
    }
}



export default Home;
