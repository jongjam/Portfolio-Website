import React, { Component } from 'react'
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, CardText, Button, CardMenu, IconButton} from 'react-mdl';

export class projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }
    
    toggleCategories(){
        if(this.state.activeTab === 0){ //projects page
            return(
                <div>
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height:'176px', background: 'url(https://img.kpopmap.com/2017/01/kpop-idols-kakao-talk-characters-ryan-made-in-korea-icon.jpg) center / cover'}}>
                            React Project #1
                        </CardTitle>
                        <CardText>
                            Aliquip irure ipsum officia amet reprehenderit mollit qui. Laborum irure ullamco consequat ullamco eiusmod esse dolor fugiat minim ut. Tempor sit ipsum anim magna officia non aute mollit velit dolor sunt. In deserunt do enim nisi quis nisi sint incididunt exercitation mollit cupidatat id.
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LivePen</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        } 
    }


    

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})}>
                    <Tab>Code</Tab>
                </Tabs>

                <section className="projects-grid">
                    <Grid className="projects-grid">
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>                    
                </section>
            </div>
        )
    }
}

export default projects;
