// requirements
const router = require("express").Router();

const {
    createThought, 
    deleteThought,
} = require("../controllers/thought-controller");

router.route("/:userId")
.post(createThought);

router.route("/:userId/:thoughtId")
.delete(deleteThought);

module.exports = router;
