import React from "react"
import rect from "../rect.png"

const custome_style={"backgroundColor":"#fff6ec"}
const styles={"color":"#243268"};
const imageStyle={"transform":"skewZ(5deg)"}

const TrainingHero3 = () =>

{
    return <div>
        <div className="hero is-fullheight is-danger" style={custome_style}>
                <div className="hero-body">
                    <div className="container">
                        <h1 className="subtitle has-text-dark">WHAT WE OFFER TO STUDENTS</h1>
                        <h1 style={styles} className="is-size-1">INDUSTRY INTERNSHIPS</h1>
                        <div className="columns">
                            <div className="column">
                            <figure className="image">
                            <img src={rect} alt="" width="200" height="200" style={imageStyle}/>
                        </figure>
                            </div>
                            <div className="column">
                                <div className="buttons">
                                    <a href="#/" className="button is-primary is-small is-rounded">INDUSTRY INTERNSHIPS</a>
                                    <a href="#/" className="button is-dark is-small is-rounded">BOOTCAMPS/WORKSHOPS</a>
                                    <a href="#/" className="button is-danger is-small is-rounded">TRAINING PROGRAM</a>
                                    <a href="#/" className="button is-link is-small is-rounded">ONLINE TRAINING</a>
                                </div>
                            </div>

                            <div className="column">
                                <h1>OUR OPPORTUNITIES & SELECTION PROCESS</h1>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
}

export default TrainingHero3;