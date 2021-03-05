// requirements
const router = require("express").Router();

const {
    createThought,
    getAllThought,
    getThoughtById, 
    deleteThought,
    createReaction,
    deleteReaction
} = require("../controllers/thought-controller");

// /thoughts/<userId>
router.route("/:userId")
.post(createThought)
.get(getAllThought)

// /thoughts/<userId>/<thoughtId>
router.route("/:userId/:thoughtId")
.get(getThoughtById)
.put(createReaction)
.delete(deleteThought);

// /thoughts/<userId>/<thoughtId>/<reactionId>
router.route('/:userId/:thoughtId/:reactionId')
.delete(deleteReaction);

module.exports = router;
