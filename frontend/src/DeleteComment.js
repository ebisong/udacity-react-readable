import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { removeComment } from './actions/post_actions';
import { connect } from 'react-redux';

const style = {
  margin: 12,
};

class DeleteComment extends Component {
  handleClick = () => {
    this.props.dispatch(removeComment(this.props.post.id, this.props.commentId));
  };

  render() {
    return (
      <RaisedButton label="Delete Comment" primary={true} onClick={this.handleClick} style={style} />
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    ...ownProps,
    ...state
  };
}
export default connect(mapStateToProps)(DeleteComment);

