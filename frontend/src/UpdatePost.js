import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { updatePost, getPosts } from './actions/post_actions';

import { connect } from 'react-redux';
/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */
class DialogExampleSimple extends React.Component {
  state = {
    open: false,
    timestamp: this.props.listPost.timestamp,
    title: this.props.listPost.title,
    body: this.props.listPost.body
  };
  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  submit = () => {
    this.props.dispatch(updatePost(this.props.post.id, { title: this.state.title, body: this.state.body }));
    this.props.dispatch(getPosts());
    this.setState({open: false});
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    console.log(this.state);
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onClick={this.submit}
      />,
    ];

    return (
      <div>
        <RaisedButton label="Update Post" onClick={this.handleOpen} />
        <Dialog
          title="Update Post"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          Title:
          <TextField
            hintText="Title"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          /><br />
          Body:
          <TextField
            hintText="Body"
            name="body"
            value={this.state.body}
            onChange={this.handleChange}
          /><br />
        </Dialog>
      </div>
    );
  }
}
function mapStateToProps(state, ownProps) {
  return {
    ...state,
    ...ownProps
  };
}
export default connect(mapStateToProps)(DialogExampleSimple);

