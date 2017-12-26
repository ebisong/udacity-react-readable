import { fetchPosts, fetchPostsByCategory, fetchCommentsByPost, fetchPost, deletePost, modifyPost, addComment, deleteComment, modifyComment, votePost, voteComment} from '../api';

export const GET_POSTS = "GET_POSTS";
export const GET_POST = "GET_POST";

export const receivePosts = (posts) => {
  return {
    type: GET_POSTS,
    posts
  }
};

export const receivePost = (post) => {
  return {
    type: GET_POST,
    post
  }
};

export const getPosts = (category) => {
  return (dispatch) => {
    console.log(category);
    if (category) {
      console.log('in here');
      fetchPostsByCategory(category)
        .then((data) => {
          return dispatch(receivePosts(data));
        });
    } else {
      fetchPosts()
        .then((data) => {
          console.log(data);
          return dispatch(receivePosts(data));
        });
    }
  }
};

export const removePost = (id) => {
    return (dispatch) => {
      deletePost(id)
        .then(() => {
          fetchPosts()
            .then((data) => {
              return dispatch(receivePosts(data));
            });
          })
      }
};

export const removeComment = (postId, commentId) => {
  return (dispatch) => {
    deleteComment(commentId)
      .then(() => {
        fetchPost(postId)
          .then((post) => {
            fetchCommentsByPost(postId)
              .then((comments) => {
                post.comments = comments;
                return dispatch(receivePost(post));
              });
          })
      });
  }
};

export const getPost = (id) => {
  return (dispatch) => {
    fetchPost(id)
      .then((post) => {
        console.log(post);
        fetchCommentsByPost(id)
          .then((comments) => {
            post.comments = comments;
            return dispatch(receivePost(post));
          });
      });
  }
};

export const updatePost = (id, data) => {
  return (dispatch) => {
    modifyPost(id, data)
      .then(() => {
        fetchPost(id)
          .then((post) => {
            fetchCommentsByPost(id)
              .then((comments) => {
                post.comments = comments;
                return dispatch(receivePost(post));
              });
          });
      });
  }
};

export const rateComment = (postId, commentId, data) => {
  return (dispatch) => {
    voteComment(commentId, data)
      .then((res) => {
        console.log(res);
        fetchPost(postId)
          .then((post) => {
            fetchCommentsByPost(postId)
              .then((comments) => {
                post.comments = comments;
                return dispatch(receivePost(post));
              });
          });
      });
  }
};

export const ratePost = (postId, data) => {
  return (dispatch) => {
    votePost(postId, data)
      .then(() => {
        fetchPosts(postId)
          .then((post) => {
            return dispatch(receivePosts(post));
          });
      });
  }
};

export const updateComment = (postId, commentId, data) => {
  return (dispatch) => {
    modifyComment(commentId, data)
      .then(() => {
        fetchPost(postId)
          .then((post) => {
            fetchCommentsByPost(postId)
              .then((comments) => {
                post.comments = comments;
                return dispatch(receivePost(post));
              });
          });
      });
  }
};

export const createComment = (data) => {
  console.log('we mad it in comments', data);
  return (dispatch) => {
    console.log('made it here');
    addComment(data)
      .then((results) => {
        console.log('here');
        console.log('results', results);
        fetchPost(data.parentId)
          .then((post) => {
            fetchCommentsByPost(data.parentId)
              .then((comments) => {
                post.comments = comments;
                return dispatch(receivePost(post));
              });
          });
      });
  }
};