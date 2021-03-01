// requirements
const { Thought } = require("../models");

const thoughtController = {
  // create a Thought
  createThought({ params, body }, res) {
    Thought.create(body)
      .then(({ _id }) => {
        // add comment to the appropriate Pizza subdocument
        return User.findOneAndUpdate(
          { _id: params.UserId },
          { $push: { thoughts: _id } },
          { new: true }
        );
      })
      // if User not found
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No User found with this id!" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => res.json(err));
  },
  // remove thought
  deleteThought({ params }, res) {
    // find comment by id and delete
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
          res.status(404).json({ message: "No User found with this id!" });
          return;
        }
        res.json(dbPizzaData);
      })
      .catch((err) => res.json(err));
  },
};

module.exports = thoughtController