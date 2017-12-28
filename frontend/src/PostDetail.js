import React, { Component } from 'react';
import {connect} from 'react-redux';
import 'react-table/react-table.css'
import { getPost } from './actions/post_actions';
import moment from 'moment';
import DeletePost from './DeletePost';
import UpdatePost from './UpdatePost';
import CreateComment from './CreateComment';
import DeleteComment from './DeleteComment';
import UpdateComment from './UpdateComment';
import VoteButton from './VoteButton';
import NotFound from './NotFound';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(getPost(this.props.match.params.id));
  }
  render() {
    if (!this.props.post.id) {
        return <NotFound/>
    } else {
      return (
        <div className="post-detail">
          <DeletePost history={this.props.history}/>
          <UpdatePost listPost={this.props.post}/>
          <CreateComment parentId={this.props.post.id}/>
          <h5>Timestamp: {moment(this.props.post.timestamp).toString()} </h5>
          <h5>Title: {this.props.post.title} </h5>
          <h5>Body: {this.props.post.body} </h5>
          <h5>Author: {this.props.post.author}</h5>
          <h5>Category: {this.props.post.category}</h5>
          <h5>Vote Score: {this.props.post.voteScore}</h5>
          <h5>Comment Count: {this.props.post.commentCount}</h5>
          <VoteButton postId={this.props.post.id} itemType="post" voteType="upVote" postDetail={true}/>
          <VoteButton postId={this.props.post.id} itemType="post" voteType="downVote" postDetail={true}/>
          <h5>Comments:</h5>
          <table>
            <thead>
            <tr>
              <td> Timestamp </td>
              <td> Body </td>
              <td> Author </td>
              <td> VoteScore </td>
              <td> Delete </td>
            </tr>
            </thead>
            <tbody>
            { this.props.post.comments.map((comment) => {
              return (<tr key={comment.id}>
                <td>{moment(comment.timestamp).toString()}</td>
                <td>{comment.body}</td>
                <td>{comment.author}</td>
                <td>{comment.voteScore}</td>
                <td><DeleteComment commentId={comment.id}/></td>
                <td><UpdateComment postId={this.props.post.id} body={comment.body} timestamp={comment.timestamp} commentId={comment.id}/></td>
                <td><VoteButton postId={this.props.post.id} commentId={comment.id} itemType="comment" voteType="upVote"/></td>
                <td><VoteButton postId={this.props.post.id} commentId={comment.id} itemType="comment" voteType="downVote"/></td>
              </tr>)
            })}
            </tbody>
          </table>
        </div>)
    }
  };
}


const mapStateToProps = (state, ownProps) => {
  return {
    ...state,
    ...ownProps
  };
};

export default connect(mapStateToProps)(App);

