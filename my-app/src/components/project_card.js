import React, { Component } from 'react'
import {
    Card,
    CardTitle,
    CardText,
    CardActions,
    CardMenu,
    Button,
    IconButton
} from 'react-mdl';

class Project_Card extends Component {
    render() {
        return this.props.projects.map((project) => (
            <div>
                <Card shadow={0} style={{width: '80%', marginLeft: '10%', marginRight: '10%'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: `url(${project.image}) center / cover`}}>{project.projectTitle}</CardTitle>
                    <CardText>
                        {project.description}
                    </CardText>
                    <CardActions border>
                        <Button colored>Get Started</Button>
                    </CardActions>
                    <CardMenu style={{color: '#dedff9'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card> 
            </div>
        ));
    }
}

export default Project_Card;
