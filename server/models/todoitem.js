'use strict';
module.exports = function(sequelize, DataTypes) {
  var TodoItem = sequelize.define('TodoItem', {
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    complete: { 
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        //foreign key relationship between todoItem.todoItem & todo.todoId
        //if todo.todoID deleted, then cascade deletion to affected rows in todoItem
        TodoItem.belongsTo(models.Todo, {
          foreignKey: 'todoId',
          onDelete: 'CASCADE',
        });

      }
    }
  });
  return TodoItem;
};