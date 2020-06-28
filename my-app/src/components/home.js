import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl';

export class landingpage extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                       <img
                            src="https://cdn0.iconfinder.com/data/icons/user-pictures/100/malecostume-512.png"
                            alt="avatar"
                            className="avatar-img"
                       /> 

                       <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>
                            <hr />
                            <p>HTML/CSS | React JS | Java | </p>
                       
                       <div className="social-links">
                           <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                               <i className="fa fa=linkedin-square" rel="noopener noreferrer" aria-hidden="true"/>
                           </a>
                       </div>
                       
                       </div>


                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default landingpage;
