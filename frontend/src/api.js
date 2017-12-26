import axios from 'axios';

export const fetchCategories = async () => {
  const response = await axios.get('http://localhost:3001/categories', {
    headers: { 'Authorization': 'whatever-you-want' }
  });
  return response.data;
};

export const fetchPosts = async () => {
  const response = await axios.get('http://localhost:3001/posts', {
    headers: { 'Authorization': 'whatever-you-want' }
  });
  return response.data;
};

export const fetchPostsByCategory = async (category) => {
  const response = await axios.get(`http://localhost:3001/${category}/posts`, {
    headers: { 'Authorization': 'whatever-you-want' }
  });
  return response.data;
};

export const fetchCommentsByPost = async (postId) => {
  const response = await axios.get(`http://localhost:3001/posts/${postId}/comments`, {
    headers: { 'Authorization': 'whatever-you-want' }
  });
  return response.data;
};

export const fetchPost = async (postId) => {
  const response = await axios.get(`http://localhost:3001/posts/${postId}`, {
    headers: { 'Authorization': 'whatever-you-want' }
  });
  return response.data;
};

export const deletePost = async (postId) => {
  const response = await axios.delete(`http://localhost:3001/posts/${postId}`, {
    headers: { 'Authorization': 'whatever-you-want' }
  });
  return response.data;
};

export const deleteComment = async (commentId) => {
  const response = await axios.delete(`http://localhost:3001/comments/${commentId}`, {
    headers: { 'Authorization': 'whatever-you-want' }
  });
  return response.data;
};

export const addPost = async (data) => {
  const request = {
    method: 'post',
    url: 'http://localhost:3001/posts',
    data,
    headers: {
      'Authorization': 'whatever-you-want'
    }
  };

  return axios(request);
};

export const addComment = async (data) => {
  console.log('inside about to request', data);
  const request = {
    method: 'post',
    url: 'http://localhost:3001/comments',
    data,
    headers: {
      'Authorization': 'whatever-you-want'
    }
  };

  return axios(request);
};

export const modifyPost = async (id, data) => {
  const request = {
    method: 'put',
    url: `http://localhost:3001/posts/${id}`,
    data,
    headers: {
      'Authorization': 'whatever-you-want'
    }
  };

  return axios(request);
};

export const modifyComment = async (id, data) => {
  const request = {
    method: 'put',
    url: `http://localhost:3001/comments/${id}`,
    data,
    headers: {
      'Authorization': 'whatever-you-want'
    }
  };

  return axios(request);
};

export const voteComment = async (id, data) => {
  const request = {
    method: 'post',
    url: `http://localhost:3001/comments/${id}`,
    data,
    headers: {
      'Authorization': 'whatever-you-want'
    }
  };

  return axios(request);
};

export const votePost = async (id, data) => {
  const request = {
    method: 'post',
    url: `http://localhost:3001/posts/${id}`,
    data,
    headers: {
      'Authorization': 'whatever-you-want'
    }
  };

  return axios(request);
};

