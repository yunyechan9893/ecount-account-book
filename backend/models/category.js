const { Sequelize, DataTypes } = require('sequelize');
const models = require('.');

module.exports = function(sequelize){
    const Category = sequelize.define('category', {
        id: {
            field: 'id',
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        categoryType: {
            field: 'category_type',
            type: DataTypes.STRING,
            allowNull: false
        },
        majorCategory: {
            field: 'major_category',
            type: DataTypes.STRING,
            allowNull: false
        },
        middleCategory: {
            field: 'middle_category',
            type: DataTypes.STRING,
            allowNull: false
        }
    }, 
    {
        underscored: true, // updateAt -> updateAt (underscored: update_at)
        freezeTableName: true,
        tableName: 'category'
    });
    
    return Category;
}