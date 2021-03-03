// requirements
const { Schema, model } = require("mongoose");
const thoughtSchema = require("./Thought")

const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      trim: true,
      required: "Please enter a unique username, it's required!",
    },
    email: {
      type: String,
      unique: true,
      match: [
        /.+@.+\..+/,
        "Please enter a valid e-mail address that is NOT registered with an existing account, it's required!",
      ],
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false,
  }
);

UserSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

const User = model("User", UserSchema);

module.exports = User;


