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
                <section className='heroSection'>
                    <div className='serviceIcons top'>
                        <div className='outerIconContainer'>
                            <div className='innerIconContainer'>
                                <i class="fa fa-cloud-upload  serviceIcon" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                    <div className='serviceIcons midtop'>
                        <div className='outerIconContainer'>
                            <div className='innerIconContainer'>
                                <i class="fa fa-cubes  serviceIcon" aria-hidden="true"></i>
                            </div>
                        </div>
                        <div className='outerIconContainer'>
                            <div className='innerIconContainer'>
                                <i class="fa fa-check-square  serviceIcon" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                    <i class="fa fa-desktop computerIcon" aria-hidden="true"></i>
                    <div className='serviceIcons midbot'>
                        <div className='outerIconContainer'>
                            <div className='innerIconContainer'>
                                <i class="fa fa-first-order  serviceIcon" aria-hidden="true"></i>
                            </div>
                        </div>
                        <div className='outerIconContainer'>
                            <div className='innerIconContainer'>
                                <i class="fa fa-list-alt  serviceIcon" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                    <div className='bot'>
                        <h2>Hello There!</h2>
                        <h3>We are fun, we are approachable, we are Squeak Inc.</h3>
                    </div>
                </section>
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
