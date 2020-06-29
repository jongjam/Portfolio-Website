import React, { Component } from 'react'
import { Grid, Cell} from 'react-mdl';
import Project_Card from './Project_Card';

export class Landing_Page extends Component {
    state = {
        projects: [
            {
                image: '../img/bestlanding.jpg',
                projectTitle: 'WordPigeon',
                description: 'WordPigeon can identify objects within images using a machine learning model and translate them using the Firebase API. The translations can be printed to the Brother QL-800 label printer and stuck on surfaces.  Made to help language learners find a more interactive way to learn vocabulary of foreign languages. '
            },
            {
                image: '../img/cherrylogo.png',
                projectTitle: 'Cherry Jokes',
                description: 'A simple app directed towards the elderly that holds a database of silly jokes that can be printed as stickers using the Brother QL-800 label printer and stuck on surfaces. Made to bring smiles to the elderly during the quarantine.'
            },
            {
                image: '../img/ai.jpg',
                projectTitle: 'Automated Assistant',
                description: 'A small, homemade glass pane holographic display that utilizes devices with LCD screens to display selfmade 2D images of  a self coded AI assistant that responds to basic voice commands. '
            }
        ]
    }
    
    render() {
        return (
            <div>
                {/* <div>
                    <div className="landing-img">
                        <div className="banner-text">
                        <h1>Full Stack Web Developer</h1>
                        <hr />
                        <p>HTML/CSS | React JS | Java | </p>
                        </div>
                    </div>
                </div> */}
                <div className="project-section"> 
                    <Grid>
                        <Cell col={12}>
                            <div>
                                <h1>HELLO WORLD</h1>
                                <Project_Card projects={this.state.projects}></Project_Card>
                            </div>
                        </Cell>
                    </Grid>
                </div>
                
                
            </div>
            
        )
    }
}

export default Landing_Page;
