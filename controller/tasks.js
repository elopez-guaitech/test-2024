const { response } = require('express');
const Task = require('../model/tasks');

const getTasks = async (req, res = response) => {

    const tasks = await Task.findAll({
        where: { isActive: true }
    })

    res.json(tasks)
}

const createTask = async (req, res = response) => {
    const { ...resto } = req.body;

    try {
        const createTask = new Task(resto);
        await createTask.save();

        res.json(createTask);
    } catch (error) {
        res.status(500).json({
            msg: 'Hable con el adminsitrador'
        })
    }
}

const completedTask = async (req, res = response) => {
    const { id } = req.params;

    try {
        const completedTask = await Task.findByPk(id);

        if (!completedTask) {
            return res.status(400).json({
                msg: `No existe la tarea con el id: ${id}`
            });
        }

        await completedTask.update({ isCompleted: true })
    } catch (error) {
        res.status(500).json({
            msg: 'Hable con el adminsitrador'
        })
    }
}

module.exports = {
    getTasks,
    createTask,
    completedTask
}