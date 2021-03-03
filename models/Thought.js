// requirements
const { Schema, model, Types } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: "Please enter a reaction between 1 and 280 characters long!",
      minLength: 1,
      maxLength: 280,
    },
    username: {
      type: String,
      required: "Please enter your Username!",
    },
    createdAt: {
      type: Date,
      default: Date.now,
      // use getter to format createdAt data before it gets to the controllers
      get: (createdAtVal) => dateFormat(createdAtVal),
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: "Please enter a thought between 1 and 280 characters long!",
      minLength: 1,
      maxLength: 280,
    },
    username: {
      type: String,
      required: "Please enter your Username!",
    },
    createdAt: {
      type: Date,
      default: Date.now,
      // use getter to format createdAt data before it gets to the controllers
      get: (createdAtVal) => dateFormat(createdAtVal),
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);
const Thought = model("Thought", thoughtSchema);

module.exports = { Thought };
