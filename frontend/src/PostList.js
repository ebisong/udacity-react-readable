import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPosts, getPost } from './actions/post_actions';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import VoteButton from './VoteButton';
import DeletePost from './DeletePost';
import UpdatePost from './UpdatePost';

class PostList extends Component {
  componentDidMount() {
    this.props.dispatch(getPosts(this.props.match.params.category));
  }

  handleTdProps = (state, rowInfo, column, instance) => {
    return {
      onClick: (event, handleOriginal) => {
        if (!(column.id === 'upVote' || column.id === 'downVote' || column.id === 'delete' || column.id === 'update')) {
          this.props.history.push(`/${rowInfo.original.category}/${rowInfo.original.id}`)
        } else {
          this.props.dispatch(getPost(rowInfo.original.id));
        }
      }
    }
  };

  render() {
    const columns = [
      {
        Header: 'Timestamp',
        accessor: 'timestamp'
      },
      {
        Header: 'Title',
        accessor: 'title'
      },
      {
        Header: 'Body',
        accessor: 'body'
      },
      {
        Header: 'Author',
        accessor: 'author'
      },
      {
        Header: 'Category',
        accessor: 'category'
      },
      {
        Header: 'Vote Score',
        accessor: 'voteScore'
      },
      {
        Header: 'Comment Count',
        accessor: 'commentCount'
      },
      {
        Header: 'Up Vote',
        id: 'upVote',
        Cell: row => {
          return <VoteButton postId={row.original.id} itemType="post" voteType="upVote" category={this.props.match.params.category} />
        }
      },
      {
        Header: 'Down Vote',
        id: 'downVote',
        Cell: row => {
          return <VoteButton postId={row.original.id} itemType="post" voteType="downVote" category={this.props.match.params.category} />
        }
      },
      {
        Header: 'Delete',
        id: 'delete',
        Cell: row => {
          return <DeletePost history={this.props.history} postId={row.original.id}/>
        }
      },
      {
        Header: 'Update',
        id: 'update',
        Cell: row => {
          return <UpdatePost listPost={row.original} history={this.props.history}/>
        }
      }
    ];

    return (
      <div className="post-list">
        <h2>Post List</h2>
        <ReactTable
          getTdProps={this.handleTdProps}
          data={this.props.posts}
          columns={columns}
        />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  console.log('ownProps', ownProps);
  return {
    ...state
  };
}

export default connect(mapStateToProps)(PostList);
