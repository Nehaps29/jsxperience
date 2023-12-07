const { User, Post } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    
    posts: async (parent, { username }) => {
      return Post.findOne({ username }).populate('posts');
    },
   
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('posts');
      }
      throw AuthenticationError;
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },

    addPost: async (parent, { postId, postTitle, postBody }, context) => {
      if (context.user) {
        const post = await Post.create({
          _id: postId,
          postTitle,
          postBody,
          user: context.user._id,
        });
        return post;
      }
      throw AuthenticationError;
    },

    removePost: async (parent, { postId }, context) => {
      if (context.user) {
        const post = await Post.findOneAndDelete({
          _id: postId,
           postAuthor: context.user.username,
        });
  
        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { posts: post._id } }
        );
  
        return post;
      }
      throw AuthenticationError;
    },
     
  },
  
 
};

module.exports = resolvers;
