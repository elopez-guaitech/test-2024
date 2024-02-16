const { DataTypes } = require("sequelize");
const db = require('../db/connection');

const Tasks = db.define('Tasks', {
    task: {
        type: DataTypes.STRING
    },
    isCompleted: {
        type: DataTypes.BOOLEAN
    },
    isActive: {
        type: DataTypes.BOOLEAN
    }
}, {
    createdAt: false,
    updatedAt: false
})

module.exports = Tasks;