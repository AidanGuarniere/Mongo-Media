// requirements
const { Schema, model } = require("mongoose");

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: "Please enter a reaction between 1 and 280 characters long!",
            minLength: 1, 
            maxLength: 280,
        },
        username: {
            type: String,
            required: "Please enter your Username!"
        },
        createdAt: {
            type: Date,
            default: Date.now,
            // use getter to format createdAt data before it gets to the controllers
            get: (createdAtVal) => dateFormat(createdAtVal),
          },
    }
)
const Reaction = model("reaction", reactionSchema);

module.exports = reaction;

const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: "Please enter a thought between 1 and 280 characters long!",
            minLength: 1, 
            maxLength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            // use getter to format createdAt data before it gets to the controllers
            get: (createdAtVal) => dateFormat(createdAtVal),
          },
          reactions: [
            {
              type: Schema.Types.ObjectId,
              ref: "Reaction",
            },
          ],
    }
)
const Thought = model("Thought", ThoughtSchema);

module.exports = {Thought, Reaction};