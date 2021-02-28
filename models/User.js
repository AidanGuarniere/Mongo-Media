// requirements
const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      trim: true,
      required: "Please enter a unique username, it's required!",
    },
    password: {
      type: String,
      trim: true,
      required: "Please enter a password, it's required!",
      match: [
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
        "Your password must be at least 8 characters long and contain at least one uppercase character, one lowercase character, and one number!",
      ],
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


