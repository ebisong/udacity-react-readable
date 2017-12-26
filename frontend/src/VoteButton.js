import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { rateComment, ratePost } from './actions/post_actions';
import { connect } from 'react-redux';

const style = {
  margin: 12,
};

class App extends Component {
  label = '';
  constructor(props) {
    super(props);
    this.label = props.voteType === 'upVote' ? 'Up Vote' : 'Down Vote'
  }
  handleClick = () => {
    if (this.props.itemType === 'post') {
      this.props.dispatch(ratePost(this.props.postId, { option: this.props.voteType }));
    } else {
      this.props.dispatch(rateComment(this.props.postId, this.props.commentId, { option: this.props.voteType }));
    }
  };

  render() {
    return (
      <RaisedButton label={this.label} primary={true} onClick={this.handleClick} style={style} />
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    ...ownProps
  };
}
export default connect(mapStateToProps)(App);

