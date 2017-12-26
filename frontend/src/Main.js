import React, { Component } from 'react';
import CategoryList from './CategoryList';
import PostList from './PostList';
import CreatePost from './CreatePost'

class App extends Component {
  render() {
    return (
      <div className="Main">
          <CategoryList/>
          <CreatePost/>
          <PostList {...this.props}/>
      </div>
    );
  }
}

export default App;
