import React from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div style={{height: '100%'}}>
        <Layout fixedHeader>
            <Header className="header-color"title={<span><span style={{ color: '/ddd' }}> </span><strong>James Jhong</strong></span>}>
                <Navigation>
                    <Link to="/home">Home</Link>
                    <Link to="/about">About Me</Link>
                </Navigation>
            </Header>
            <Drawer title="">
                <Navigation>
                    <Link to="/home">Home</Link>
                    <Link to="/about">About Me</Link>
                </Navigation>
            </Drawer>
            <Content>
                <div className="page-content" />
                <Main/>
            </Content>
        </Layout>
    </div>
  );
}

export default App;
