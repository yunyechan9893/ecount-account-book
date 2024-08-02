const { Sequelize, DataTypes } = require('sequelize');
const models = require('.');

module.exports = function(sequelize){
    // foreign Key : (Room)room_no, (User)user_no
    const Finance = sequelize.define('finance', {
        id: {
            field: 'id',
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        memberId: {
            field: 'member_id',
            type: DataTypes.BIGINT,
            allowNull: false,
            references: {
                model: 'member', // 참조할 모델 이름
                key: 'id' // 참조할 키
            }
        },
        transactionDate: {
            field: 'transaction_date',
            type: DataTypes.DATE,
            allowNull: false
        },
        categoryId: {
            field: 'category_id',
            type: DataTypes.BIGINT,
            allowNull: false,
            references: {
                model: 'category',
                key: 'id'
            }
        },
        description: {
            field: 'description',
            type: DataTypes.STRING,
            allowNull: false
        },
        amount: {
            field: 'amount',
            type: DataTypes.BIGINT,
            allowNull: false
        },
        memo: {
            field: 'memo',
            type: DataTypes.STRING,
            allowNull: true
        },
        asset: {
            field: 'asset',
            type: DataTypes.STRING,
            allowNull: false
        },
        classification: {
            field: 'classification',
            type: DataTypes.STRING,
            allowNull: false
        }
    }, 
    {
        underscored: true, // updateAt -> updateAt (underscored: update_at)
        freezeTableName: true,
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'modified_at',
        tableName: 'finance'
    });
    
    return Finance;
}