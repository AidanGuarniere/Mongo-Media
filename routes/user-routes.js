// requirements
const router = require("express").Router();

const {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  createFriend,
  deleteFriend
} = require("../controllers/user-controller");

// Set up GET all and POST at /users
router.route("/")
.get(getAllUser)
.post(createUser);

// Set up GET one, PUT, and DELETE at users/:id
router.route("/:id")
.get(getUserById)
.put(updateUser)
.delete(deleteUser);

router.route("/:userId/friends/:friendId")
.put(createFriend)
.delete(deleteFriend)

module.exports = router;
