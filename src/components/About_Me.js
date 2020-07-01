import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export class About_Me extends Component {
    render() {
        return (
            <div>
                <Container fluid="md">
                    <Row>
                        <Col><img src='../../grad.jpg' alt='grad' class="about-me"/></Col>
                    </Row>
                    <Row>
                        <Col><h1 class ="about-me-head">Hello, my name is James Jhong!</h1></Col>
                        <p class="am-para1">I'm a first year Engineering Student at UW and I aspire to become an embedded systems engineer! The more I have interacted with different technologies,
                            I've become fascinated by the bond between hardware and software. Computers are in all of the technologies we use today, whether we can see them or not,
                            and I want to have the power to create and control powerful harmonies between computers and hard technology. I'd love to learn more in the Electrical Engineering
                            Department, but as of now, I have learned HTML/CSS, React JS, and Java to set me in the path, with a simple Automated Assistant under my experience belt.
                        </p>
                        <p class="am-para2"> To make the best technology, I need to have the sharpest mind, and that requires a fit body. To keep myself strong and healthy, you can find me at home lugging 
                            rice bags and water jugs to keep my muscles tight and strong. And to fuel myself properly, I cook most of my meals, and my specialty is the French Omelette. Fancy. 
                            I also have hopes to study and work abroad, so I'm glad to say I speak fluent Korean and am in the process of learning Mandarin. The world is full of knowledge, 
                            so as a young man, I might as well learn it.
                        </p>
                    </Row>
                </Container>
                
                <p></p>
            </div>
        )
    }
}

export default About_Me;
