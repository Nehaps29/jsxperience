const db = require('../config/connection');
const { User, Post } = require('../models');
const userSeeds = require('../seeders/userSeeds.json');
const postSeeds = require('../seeders/postSeeds.json');
const cleanDB = require('../seeders/cleanDB');

db.once('open', async () => {
  try {
    await cleanDB('Post', 'posts');

    await cleanDB('User', 'users');

    await User.create(userSeeds);

    for (let i = 0; i < postSeeds.length; i++) {
      const { _id, postCreater } = await Post.create(postSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: postCreater },
        {
          $addToSet: {
            posts: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
