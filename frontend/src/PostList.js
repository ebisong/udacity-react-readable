import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPosts } from './actions/post_actions';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import {Link} from 'react-router-dom';
import VoteButton from './VoteButton';

class PostList extends Component {
  componentDidMount() {
    this.props.dispatch(getPosts(this.props.match.params.category));
  }

  handleTdProps = (state, rowInfo, column, instance) => {
    return {
      onClick: (event, handleOriginal) => {
        if (!(column.id === 'upVote' || column.id === 'downVote')) {
          this.props.history.push(`/post-detail/${rowInfo.original.id}`)
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
          return <VoteButton postId={row.original.id} itemType="post" voteType="upVote" />
        }
      },
      {
        Header: 'Down Vote',
        id: 'downVote',
        Cell: row => {
          return <VoteButton postId={row.original.id} itemType="post" voteType="downVote" />
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
  return {
    ...state,
    ...ownProps
  };
}

export default connect(mapStateToProps)(PostList);
