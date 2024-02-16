const { response } = require('express');
const Task = require('../model/tasks');

const getTasks = async(req, res = response) => {

    const tasks = await Task.findAll({
        where: { isActive: true }
    })

    res.json(tasks)
}

module.exports = {
    getTasks
}