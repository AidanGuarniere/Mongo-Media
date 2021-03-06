// requirements
const { User } = require("../models");

const userController = {
  // get all Users
  getAllUser(req, res) {
    User.find({})
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },
  // get one User by Id
  getUserById({ params }, res) {
    User.findOne({ _id: params.id })
      // populate thoughts from Thought
      .populate({
        path: "thoughts",
        select: "-__v",
      })
      // show newest thought first
      .select("-__v")
      // sort in descending order by the _id value of thought
      .then((dbThoughtData) => res.json(dbThoughtData))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },
  // create a new User
  createUser({ body }, res) {
    User.create(body)
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(400).json(err));
  },
  // update a User's data by Id
  updateUser({ params, body }, res) {
    User.findOneAndUpdate({ _id: params.id }, body, { new: true })
      .then((dbUserData) => {
        if (!dbUserData) {
          return res
            .status(404)
            .json({ message: "No User found with this Id!" });
        }
        res.json(dbUserData);
      })
      .catch((err) => res.status(400).json(err));
  },
  // create a friend in User
  createFriend({params}, res) {
    User.findOneAndUpdate(
      {_id: params.userId},
      {$push: {friends: params.friendId}},
      {new: true}
    )
    .then((dbUserData) => {
      if (!dbUserData) {
        return res
          .status(404)
          .json({ message: "No User found with this Id!" });
      }
      res.json(dbUserData);
    })
    .catch((err) => res.status(400).json(err));
  },
  // delete a friend from User
  deleteFriend({params}, res) {
    User.findOneAndUpdate(
      {_id: params.userId},
      {$pull: {friends: params.friendId}},
      {new: true}
    )
    .then((dbUserData) => {
      if (!dbUserData) {
        return res.status(404).json({ message: "No user found with this id!" });
      }
      res.json(dbUserData);
    })
    .catch((err) => res.status(400).json(err));  },

  // delete a User
  deleteUser({ params }, res) {
    User.findOneAndDelete({ _id: params.id })
      .then((dbUserData) => {
        if (!dbUserData) {
          return res.status(404).json({ message: "No user found with this id!" });
        }
        res.json(dbUserData);
      })
      .catch((err) => res.status(400).json(err));
  },

};

module.exports = userController;
