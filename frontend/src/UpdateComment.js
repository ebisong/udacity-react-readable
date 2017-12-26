import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { updateComment } from './actions/post_actions';

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
    timestamp: this.props.timestamp,
    body: this.props.body,
  };
  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submit = () => {
    this.props.dispatch(updateComment(this.props.postId, this.props.commentId, { timestamp: this.state.timestamp, body: this.state.body }));
    this.setState({open: false});
  };

  render() {

    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <RaisedButton
        label="Done"
        primary={true}
        onClick={this.submit}
      />,
    ];

    return (
      <div>
        <RaisedButton label="Update Post" onClick={this.handleOpen} />
        <Dialog
          title="Update Comment"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <TextField
            hintText="Timestamp"
            name="timestamp"
            value={this.state.timestamp}
            onChange={this.handleChange}
          /><br />
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
    ...ownProps
  };
}
export default connect(mapStateToProps)(DialogExampleSimple);

