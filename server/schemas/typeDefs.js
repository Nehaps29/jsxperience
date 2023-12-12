const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    posts: [Post]
  }
  
  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
  }

  type Category {
    _id: ID
    name: String
    
  }

  type Post {
    _id: ID
    postTitle: String!
    postBody: String! 
    comments: [Comment]
    category: Category
    postAuthor: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    posts: [Post]
    me: User
    post(postId: ID!): Post
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addPost(postTitle: String!, postBody: String!): Post
    updatePost(postId: ID!, postTitle: String!, postBody: String!): Post
    removePost(postId: ID!): Post
    addComment(postId: ID!, commentText: String!): Post
  }
`;

module.exports = typeDefs;
