// requirements
const router = require("express").Router();

const {
    createThought, 
    deleteThought,
    createReaction,
    deleteReaction
} = require("../controllers/thought-controller");

// /thoughts/<userId>
router.route("/:userId")
.post(createThought);

// /thoughts/<userId>/<thoughtId>
router.route("/:userId/:thoughtId")
.put(createReaction)
.delete(deleteThought);

// /thoughts/<userId>/<thoughtId>/<reactionId>
router.route('/:userId/:thoughtId/:reactionId')
.delete(deleteReaction);

module.exports = router;
