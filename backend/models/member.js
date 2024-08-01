const { Sequelize, DataTypes } = require('sequelize');
const models = require('.');

module.exports = function(sequelize){
    // foreign Key : (Room)room_no, (User)user_no
    const Member = sequelize.define('member', {
        id: {
            field: 'id',
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        memberId: {
            field: 'member_id',
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            field: 'password',
            type: DataTypes.STRING ,
            allowNull: false
        }
    }, 
    {
        underscored: false, // updateAt -> updateAt (underscored: update_at)
        freezeTableName: true,
        timestamps: true,
        createdAt: false,
        updatedAt: false,
        tableName: 'member'
    });
    
    return Member;
}