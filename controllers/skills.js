module.exports = {
  index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill,
    edit,
    update,
};


function index(req, res) {
    res.render('skills/index', {
      skills: Skill.getAll()
    });
  }

  function show(req, res) {
    res.render("skills/show", {
      skill: Skill.getOne(req.params.id)
    })
  }
 // Convention is to name the model in uppercase and singular
 const Skill = require('../models/skill');


 
 function deleteSkill(req, res) {
  Skill.deleteOne(req.params.id);
  res.redirect('/skills');
}

function update(req, res) {
  Skill.update(req.params.id, req.body);
  res.redirect(`/skills/${req.params.id}`)
}
function edit(req,res) {
  const skill = Skill.getOne(req.params.id)
  res.render("skills/edit", {
    title: "Edit Skill",
    skill,
  });
}

function create(req, res) {
console.log(req.body);

Skill.create(req.body);
//Always do redirect when change data
res.redirect("/skills");
}

function newSkill(req,res) {
res.render("skills/new", {
  title: "New Skill"
})
}

function show(req,res) {
  res.render("skills/show", {
    title: "Skill Details",
      skill : Skill.getOne(req.params.id)
  });
}

function index(req, res) {
  res.render('skills/index', {
    skills: Skill.getAll(),
    title: "All Skills",
  });
}