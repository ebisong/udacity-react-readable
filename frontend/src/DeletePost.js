import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { removePost } from './actions/post_actions';
import { connect } from 'react-redux';

const style = {
  margin: 12,
};

class DeletePost extends Component {
  handleClick = () => {
    const id = this.props.postId ? this.props.postId : this.props.post.id;
    this.props.dispatch(removePost(id));
    this.props.history.push('/');
  };

  render() {
    return (
      <RaisedButton label="Delete Post" primary={true} onClick={this.handleClick} style={style} />
    );
  }
}

function mapStateToProps(state) {
  return state;
}
export default connect(mapStateToProps)(DeletePost);

