var express = require('express');
var router = express.Router();

// Require the controller that exports Skills CRUD functions
var skillsCtrl = require('../controllers/skills');

// All actual paths start with "/skills"

// GET /skills
router.get('/', skillsCtrl.index);

// Get /skills/new
router.get('/new', skillsCtrl.new);

// GET /skills/id
router.get('/:id', skillsCtrl.show);

// GEt /skills/:id/edit
router.get("/:id/edit", skillsCtrl.edit)

//POST /skills
router.post("/", skillsCtrl.create)

// Delete /skills
router.delete("/:id", skillsCtrl.delete)


// PUT /skills/:id
router.put("/:id", skillsCtrl.update)


module.exports = router;
