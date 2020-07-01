import React, { Component } from 'react'
import Project_Card from './Project_Card';
import { Container, Row, Col} from 'react-bootstrap';
export class Landing_Page extends Component {
    state = {
        projects: [
            {
                color:'#8A2BE2',
                image: '../img/wordpigeon.png',
                projectTitle: 'WordPigeon',
                description: 'WordPigeon can identify objects within images using a machine learning model and translate them using the Firebase API. The translations can be printed to the Brother QL-800 label printer and stuck on surfaces.  Made to help language learners find a more interactive way to learn vocabulary of foreign languages. ',
                gitHubLink: 'https://github.com/jongjam/WordPigeon'
            },
            {
                color: '#EE82EE',
                image: '../img/cherrylogo.png',
                projectTitle: 'Cherry Jokes',
                description: 'A simple app directed towards the elderly that holds a database of silly jokes that can be printed as stickers using the Brother QL-800 label printer and stuck on surfaces. Made to bring smiles to the elderly during the quarantine.',
                gitHubLink:'https://github.com/jongjam/Cherry-Jokes'
            },
            {
                color: '#3076F0',
                image: '../img/ai.jpg',
                projectTitle: 'Automated Assistant',
                description: 'A small, homemade glass pane holographic display that utilizes devices with LCD screens to display selfmade 2D images of  a self coded AI assistant that responds to basic voice commands. ',
                gitHubLink:'https://github.com/JhongHawan/Project-ELOC'
            }
        ]
    }
    
    render() {
        return (
            <div className="all">
                <div>
                    <div className="landing-img">
                        <div className="banner-text">
                        <h1>Full Stack Web Developer</h1>
                        <hr />
                        <p>HTML/CSS | React JS | Java | </p>
                        </div>
                    </div>
                </div>
                <div className="project-section"> 
                    <section>
                    <Container>
                        <Row style={{
                            display: 'flex', 
                            flexDirection: 'row',
                            justifyContent: 'center'
                        }}>
                            <Project_Card projects={this.state.projects}></Project_Card>
                        </Row>
                    </Container>   
                    </section>
                       
                </div>
                
                
            </div>
            
        )
    }
}

export default Landing_Page;
