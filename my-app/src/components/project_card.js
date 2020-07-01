import React, { Component } from 'react'
import {
    Card,
    CardTitle,
    CardText,
    CardActions,
    Button,
} from 'react-mdl';

import {Col} from 'react-bootstrap'


class Project_Card extends Component {
    render() {
        return this.props.projects.map((project) => (
            <div style={{margin: 'auto 3%', marginBottom: 60}}>
                <Col>
                    <Card shadow={3} style={{maxWidth: '100%', height: '550px'}}>
                        <CardTitle style={{ textAlign: 'center' ,color: '#fff', height: '300px', background: `url(${project.image}) center / cover`}}></CardTitle>
                        <CardText style={{height: '250px'}}>
                          <h5>{project.projectTitle}</h5>  
                            {project.description}
                        </CardText>
                        <CardActions border>
                            <Button colored ><a style={{ color:'blue', textDecoration: 'none'}} href={project.gitHubLink}>GitHub</a></Button>
                        </CardActions>
                    </Card> 
                </Col>
              
            </div>
        ));
    }
}

export default Project_Card;
