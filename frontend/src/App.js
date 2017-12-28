import React, { Component } from 'react';
import Main from './Main';
import PostList from './PostList';
import PostDetail from './PostDetail';
import { Route } from  'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Main}/>
        <Route path="/posts/:category" render={ (props) => <PostList {...props} />}/>
        <Route path="/:category/:id" render={ (props) => <PostDetail {...props} />}/>
      </div>
    );
  }
}

export default App;
