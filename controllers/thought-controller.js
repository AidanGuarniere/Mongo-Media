// requirements
const { Thought, User } = require("../models");

const thoughtController = {
  // create a Thought
  createThought({ params, body }, res) {
    Thought.create(body)
      .then(({ _id }) => {
        // add thought to the appropriate User subdocument
        return User.findOneAndUpdate(
          { _id: params.userId },
          { $push: { thoughts: _id } },
          { new: true }
        );
      })
      // if User not found
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No user found with this id!" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => res.json(err));
  },
  // create Reaction
  createReaction({ params, body }, res) {
    Thought.findOneAndUpdate(
      { _id: params.thoughtId },
      { $push: { reactions: body } },
      { new: true }
    )
      .select("-id")
      .then((dbUserData) => {
        console.log(dbUserData);
        if (!dbUserData) {
          return res
            .status(404)
            .json({ message: "No user found with this id!" });
        }
        res.json(dbUserData);
      })
      .catch((err) => res.json(err));
  },
  // remove thought
  deleteThought({ params }, res) {
    // find Thought by id and delete
    Thought.findOneAndDelete({ _id: params.thoughtId })
      .then((deletedThought) => {
        // if no thought
        if (!deletedThought) {
          return res.status(404).json({ message: "No thought with this id!" });
        }
        // return updated User
        return User.findOneAndUpdate(
          { _id: params.userId },
          { $pull: { thoughts: params.thoughtId } },
          { new: true }
        );
      })
      .then((dbUserData) => {
        // if no User
        if (!dbUserData) {
          return res.status(404).json({ message: "No User found with this id!" });
        }
        res.json(dbUserData);
      })
      .catch((err) => res.json(err));
  },
  // delete reaction
  deleteReaction({ params }, res) {
    Thought.findOneAndUpdate(
      { _id: params.thoughtId },
      { $pull: { reactions: { reactionId: params.reactionId } } },
      { new: true }
    )
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.json(err));
  },
};

module.exports = thoughtController;
