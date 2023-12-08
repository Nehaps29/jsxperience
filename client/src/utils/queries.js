import { gql } from '@apollo/client';
export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      posts {
        _id
        postTitle
        postBody
        postAuthor
      }
    }
  }
`;
export const QUERY_POST = gql`
  query getPost {
    posts {
      _id
      postBody
      postAuthor
      postTitle
    }
  }
`;
export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      posts {
        _id
        postTitle
        postBody
        postAuthor
      }
    }
  }
`;