const TodoTask = require('../models/todotask')

module.exports = {
    getEdit: (req, res) => {
    const id = req.params.id;
    TodoTask.find({}, (err, tasks) => {
        res.render("edit.ejs", { todoTasks: tasks, idTask: id });
    });
},
    deleteTask: (req, res) => {
        const id = req.params.id;
        TodoTask.findByIdAndRemove(id, err => {
            if (err) return res.send(500, err);
            res.redirect("/");
        });
    },
    updateTask: (req, res) => {
        const id = req.params.id;
        TodoTask.findByIdAndUpdate(
            id,
            {
                title: req.body.title,
                content: req.body.content
            },
            err => {
                if (err) return res.status(500).send(err);
                res.redirect("/");
            });
    }
}