import React from "react";
import './style.css'
// import img1 from './images/akira1.jpg'

const Introduction = () =>{
    return(
        <div>
            <h1 className="heading">What I have learnt about React JS</h1>
            
            <h2>React is a Library/ Framework</h2> 
            <p>It has Reusable components</p>
            <p>The writting Format is JSX</p>
            <p>It is Fast</p>
            <h1 className="heading" >Here are some things you must know as a techie.</h1>
                        <h2>Don't be basic, Go extra</h2>
            <h2>Always capture the moments</h2>

            <img className="image2" src="images/notbasic.jpeg" alt="not basic" />
            <img className="image3" src="images/cyb.jpg" alt="Camera" />
            <br /><br /><br />

        </div>
    );
};

export default Introduction