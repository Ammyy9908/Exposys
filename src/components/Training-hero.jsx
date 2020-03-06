import React from "react"
import Navbar from "./navbar"


const styles={"backgroundColor":"#243268"};

const TrainingHero = () =>
{
    return <div>
        <div className="hero is-medium is-black" style={styles}>
            <Navbar activeclass="Training"/>
            <div className="hero-body">
                        <div className="container">
                        <h1 className="title has-text-white is-size-1">Student Internships & Industry Ready Trainings</h1>
                        <h4 className="subtitle has-text-white">Lorem ipsum dolor sit amet consectetur adipisicing 
                        elit. Distinctio dolores temporibus facere voluptatibus totam officia, odit mollitia voluptatum 
                            laboriosam aliquam qui eos facilis reiciendis rerum molestias placeat, impedit quos quam.</h4>
                            <div className="buttons">
                                <a href="/#" className="button is-danger is-rounded">Internships</a>
                                <a href="/#" className="button is-primary is-rounded">Workshops</a>
                                <a href="/#" className="button is-info is-rounded">Trainings</a>
                                <a href="/#" className="button is-warning is-rounded">Online Training</a>
                            </div>
                        </div>
            </div>
        </div>
    </div>
}

export default TrainingHero;