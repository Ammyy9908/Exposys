import React from "react"
import mountain from "../mountain.png"


const HeroTraining2 = () =>
{
    return <div>
        <div className="hero">
            <div className="hero-body">
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            <h1 className="title is-size-1 has-text-centered">We Offer Optimised Training According To Your Skillset</h1>
                            <center><hr className="type_3"/></center>
                                
                                    
                               
                            
                        </div>
                        
                    </div>

                    <div className="columns">
                        <div className="column">
                        <div className="column has-text-centered">
                        <img src={mountain} alt="" width="1080" height="1920"/>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default HeroTraining2;