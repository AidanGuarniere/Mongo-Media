// requirements
const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    firstName: {
      type: String,
      trim: true,
      required: "Please enter your first name, it's required!",
    },

    lastName: {
      type: String,
      trim: true,
      required: "Please enter your last name, it's required!",
    },

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
      match: [/.+@.+\..+/, "Please enter a valid e-mail address that is NOT registered with an existing account, it's required!"],
    },

    userCreated: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// UserSchema.pre('save', function(next) {
//     User.findOne({username: this.username})
//     .then(found => {
//       if(found){
//         this.username += Math.floor(Math.random() * 1000)
//       }
//       next();
//     })
//   });

const User = model("User", UserSchema);

module.exports = User;
