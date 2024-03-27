const skills = [
    {id: 0, skill: "Programming Languages", desc:"Basic proficiency in Python and JavaScript. Understanding the syntax, basic data structures (like arrays, lists, dictionaries), control structures (if statements, loops), and functions/methods."},
    {id: 1, skill: "Version Control", desc:"Understanding of version control systems, primarily Git. Knowledge of basic commands (commit, push, pull, merge) and concepts like branches, repositories, and pull requests."},
    {id: 2, skill: "CSS and HTML", desc:"Foundational knowledge of HTML and CSS"},
    {id: 3, skill: "Basic Development Tools", desc:"Familiarity with Integrated Development Environment (IDE) such as Visual Studio Code. Knowing how to navigate and use the features of these tools to write and debug code."},
    {id: 4, skill: "Algorithmic thinking and problem-solving", desc:"Ability to break down problems and devise solutions algorithmically."},
    {id: 5, skill: "Basic understanding of client-server architecture", desc:"Knowing how the browser (client) interacts with the server and the role of HTTP requests/responses."},
    {id: 6, skill: "Database Knowledge", desc:"Ability to perform simple CRUD (Create, Read, Update, Delete) operations."},
    {id: 7, skill: "Operating System Basics", desc:"Familiarity with operating system concepts (file systems, process management) "},
    {id: 8, skill: "Growth Mindset", desc:"Staying up-to-date with new programming languages, tools, and practices "},
  ];
	
  module.exports = {
    getAll,
    getOne,
  };
	
  function getOne(id) {
    id = parseInt(id);
    return skills.find( skill => skill.id ===id);
  }

  function getAll() {
    return skills;
  }