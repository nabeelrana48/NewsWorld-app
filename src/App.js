import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  apiKey=process.env.REACT_APP_NEWS_API

  state= {
    progress: 0
  }
  setProgress = (progress) =>{
    this.setState({progress:progress})
  }
  render() {
    let pageSize = 100;


    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
            height={3}
          />
          <Switch>
            <Route exact path="/"><News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={pageSize} category={'general'} /></Route>
            <Route exact path="/business"><News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={pageSize} category={'business'} /></Route>
            <Route exact path="/entertainment"><News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={pageSize} category={'entertainment'} /></Route>
            <Route exact path="/health"><News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={pageSize} category={'health'} /></Route>
            <Route exact path="/science"><News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={pageSize} category={'science'} /></Route>
            <Route exact path="/sports"><News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={pageSize} category={'sports'} /></Route>
            <Route exact path="/technology"><News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={pageSize} category={'technology'} /></Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

