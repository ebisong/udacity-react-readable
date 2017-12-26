import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import randomString from 'randomstring';
import { getPosts } from './actions/post_actions';
import { addPost } from './api';
import { connect } from 'react-redux';
/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */
 class CreatePost extends React.Component {
  state = {
    open: false,
    title: '',
    body: '',
    author: '',
    category: ''
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  };

  submit = () => {
    const id = randomString.generate(21);
    addPost({
      id,
      timestamp: Date.now(),
      title: this.state.title,
      body: this.state.body,
      author: this.state.author,
      category: this.state.category
    }).then(() => {
      this.props.dispatch(getPosts());
      this.setState({open: false});
    });
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
        <RaisedButton label="Create Post" onClick={this.handleOpen} />
        <Dialog
          title="Create Post"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <TextField
            hintText="Title"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          /><br />
          <TextField
            hintText="Body"
            name="body"
            value={this.state.body}
            onChange={this.handleChange}
          /><br />
          <TextField
            hintText="Author"
            name="author"
            value={this.state.author}
            onChange={this.handleChange}
          /><br />
          <TextField
            hintText="Category"
            name="category"
            value={this.state.category}
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
export default connect(mapStateToProps)(CreatePost);

