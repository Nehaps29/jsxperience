import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_POST = gql`
 mutation AddPost($postTitle: String!, $postBody: String!) {
   addPost(postTitle: $postTitle, postBody: $postBody) {
    _id
    postTitle
    postBody
    postAuthor
   }
 }
`;

export const DELETE_POST = gql`
  mutation removePost($postId: ID!) {
    removePost(postId: $postId) {
      _id
      }
  }
`
export const REMOVE_POST = gql`
  mutation removePost($postId: ID!) {
    removePost(postId: $postId) {
      _id
      postTitle
      postBody
    }
  }
`
export const UPDATE_POST1 = gql`
  mutation UpdatePost($postId: ID!, $postTitle: String!, $postBody: String!) {
    updatePost(postId: $postId, postTitle: $postTitle, postBody: $postBody) {
      _id
      postTitle
      postBody
    }
  }
`
export const UPDATE_POST = gql`
mutation updatePost($postId: ID!, $postTitle: String!, $postBody: String!) {
  updatePost(postId: $postId, postTitle: $postTitle, postBody: $postBody) {
    postTitle
    postBody
    postAuthor
    createdAt
    category{
      _id
      name
    }
  }
}`
;
