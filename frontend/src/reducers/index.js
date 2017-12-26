import { GET_CATEGORIES } from '../actions/category_actions';
import { GET_POSTS, GET_POST } from '../actions/post_actions';
const initialAppState = {
  categories: [],
  posts: [],
  post: {
    title: '',
    body: '',
    timestamp: '',
    commentCount: '',
    voteScore: 0,
    comments: [],
    author: ''
  }
};


function app(state = initialAppState, action) {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.categories,
      };
    case GET_POSTS:
      return {
        ...state,
        posts: action.posts,
      };
    case GET_POST:
      return {
        ...state,
        post: action.post,
      };
    default: {
      return state;
    }
  }
}

export default app;