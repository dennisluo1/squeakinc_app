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
