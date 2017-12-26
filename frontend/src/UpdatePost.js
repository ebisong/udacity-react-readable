import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { updatePost } from './actions/post_actions';

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
    timestamp: this.props.post.timestamp,
    title: this.props.post.title,
    body: this.props.post.body,
    author: this.props.post.author,
    category: this.props.post.category
  };
  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  submit = () => {
    this.setState({open: false});
  };

  handleChange = (event) => {
    this.props.dispatch(updatePost(this.props.post.id, { [event.target.name]: event.target.value }));
  };

  render() {
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
          <TextField
            hintText="Title"
            name="title"
            value={this.props.post.title}
            onChange={this.handleChange}
          /><br />
          <TextField
            hintText="Body"
            name="body"
            value={this.props.post.body}
            onChange={this.handleChange}
          /><br />
          <TextField
            hintText="Author"
            name="author"
            value={this.props.post.author}
            onChange={this.handleChange}
          /><br />
          <TextField
            hintText="Category"
            name="category"
            value={this.props.post.category}
            onChange={this.handleChange}
          /><br />
        </Dialog>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return state;
}
export default connect(mapStateToProps)(DialogExampleSimple);

