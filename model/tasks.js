const { DataTypes } = require("sequelize");
const db = require('../db/connection');

const Tasks = db.define('Tasks', {
    name: {
        type: DataTypes.STRING
    },
    description: {
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