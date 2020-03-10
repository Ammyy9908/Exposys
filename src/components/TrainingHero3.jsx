import React from "react"
import rect from "../rect.png"

const custome_style={"backgroundColor":"#fff6ec"}
const styles={"color":"#243268","fontWeight":"700","color":"#0631b5"};
const imageStyle={"transform":"skewZ(5deg)"}
const style_2={"height":"600px","backgroundImage":"url(https://firebasestorage.googleapis.com/v0/b/my-project-1544342477588.appspot.com/o/rect.png?alt=media&token=81b7834a-2b15-47c6-a700-29676cb48e8f)","backgroundSize":"cover","backgroundColor":"transparent"}
const btn1_style={"position":"absolute","right":"-10px","backgroundColor":"#0631b5","border":"none"}
const btn2_style={"position":"absolute","right":"-10px","top":"90px","backgroundColor":"#0631b5","border":"none"}
const btn3_style={"position":"absolute","right":"-10px","top":"160px","backgroundColor":"#0631b5","border":"none"}
const btn4_style={"position":"absolute","right":"-10px","top":"230px","backgroundColor":"#0631b5","border":"none"}
const style1={"fontWeight":"700","color":"#ccc"}
const style2={"color":"#748ef7","fontWeight":"800"}
const apply_btn={"backgroundColor":"#0631b5","color":"#ffffff"}
const TrainingHero3 = () =>

{
    return <div>
        <div className="hero is-fullheight is-danger" style={custome_style}>
                <div className="hero-body">
                    <div className="container">
                        <h1 className="subtitle" style={style1}>WHAT WE OFFER TO STUDENTS</h1>
                        <h1 style={styles} className="is-size-1">Industry Internships</h1>
                        <div className="columns">
                            <div className="column">
                           <div className="notification" style={style_2}>
                           <div className="btns">
                                    <ul>
                                        <li><a href="#/" className="button btn has-text-white" style={btn1_style}>Industry Internships</a></li>
                                        <li><a href="#/" className="button btn has-text-white" style={btn2_style}>Bootcamps & Workshops</a></li>
                                        <li><a href="#/" className="button btn has-text-white" style={btn3_style}>Training Program</a></li>
                                        <li><a href="#/" className="button btn has-text-white" style={btn4_style}>Online Training</a></li>
                                    </ul>
                                </div>
                           </div>
                            </div>
                            <div className="column">
                                
                            </div>

                            <div className="column">
                                <h1 style={style2} className="is-size-5">OUR OPPORTUNITIES & SELECTION PROCESS</h1>
                                <p className="has-text-dark subtitle">MEAN Stack Developer,Content Writer,Digital Marketing,Web Developer,Full Stack Developer,Graphic Designer,UI/UX Designer,Motion Designer,Social Media Strategist,Social Media Manager.</p>
                                <strong>Selection Process:</strong>
                                <ol className="has-text-dark">
                                    <li>Screening of applications.</li>
                                    <li>Telephonic interview <br/>Selected Student get confirmation mail.</li>
                                </ol>
                                <p className="has-text-dark subtitle">Stripend Range :Rs 6000 to 25000/- Per Month.
                                Online Application Fee: Rs 300/- No Cash Only Online Payment Accepted.</p>
                                <strong>Benifits for Students:</strong>
                                <p className="has-text-dark subtitle">Internship certificate, Work on Real Time Projects,Based on Performance of the candidate will given job offer for full time employment. Industry Explosure</p>
                                <a href="#/" className="button is-large" style={apply_btn}>Apply Now</a>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
}

export default TrainingHero3;