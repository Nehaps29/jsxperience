const { User, Post } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    
    posts: async () => {
      return await Post.find({});
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

    addPost: async (parent, { postTitle, postBody, postAuthor}, context) => {
       
      if (context.user){
        const post = await Post.create({
          postTitle,
          postBody,
          postAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { posts: post._id } }
        );

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
          { $pull: { posts: post._id } },
          {new : true}
        );
  
        return post;
      }
      throw AuthenticationError;
    },
    updatePost: async (parent, { postId, postTitle, postBody }, context) => {
      console.log(`postId: ${postId}`)
      console.log(`postTitle: ${postTitle}`)
      console.log(`postBody: ${postBody}`)
      const post = await Post.findByIdAndUpdate(postId, { 
        
        postTitle: postTitle,
        postBody: postBody,
      }, {new: true});
  
      if (!post) {
        throw new Error
      }
      return post;
    }
     
  },
  
 
};

module.exports = resolvers;
