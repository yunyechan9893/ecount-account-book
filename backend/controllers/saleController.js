const { Member, Finance, Category } = require('../models')
const { Op } = require('sequelize');



async function getAllFinance(memberId, date, type) {
    const [year, month] = date.split('-').map(Number);
    const startDate = new Date(year, month - 1, 1,  0,  0,  0,  0); // 월은 0부터 시작하므로 month - 1
    const endDate   = new Date(year, month - 1, 31, 23, 59, 59, 999); // 해당 월의 마지막 날의 끝 시간

    let whereCondition = {
        memberId: memberId,
        transactionDate: {
            [Op.between]: [startDate, endDate]
        }
    };

    if (type!=null && type != "ALL") {
        whereCondition.classification = type
    }

    return await Finance.findAll({
        attributes: ['id', 'transaction_date', 'category_id', 'description', 'amount', 'memo', 'asset', 'classification'],
        where: whereCondition,
        include: [{
            model: Category,
            attributes: ['category_type', 'major_category', 'middle_category']
        }]
    })
}

async function getFinanceCount(memberId, date) {
    const [year, month] = date.split('-').map(Number);
    const startDate = new Date(year, month - 1, 1,  0,  0,  0,  0); // 월은 0부터 시작하므로 month - 1
    const endDate   = new Date(year, month - 1, 31, 23, 59, 59, 999); // 해당 월의 마지막 날의 끝 시간


    let finance = await Finance.findAll({
        attributes: ['amount', 'classification'],
        where: {
            memberId: memberId,
            transactionDate: {
                [Op.between]: [startDate, endDate]
            }
        }
    })

    let response = {
        money:{
            all: 0,
            income: 0,
            expenditure: 0
        },
        count: {
            all: 0,
            income: 0,
            expenditure: 0,
        }
    }

    if (finance==0) {
        return response
    }

    finance.forEach(item => {
        response.count.all += 1;
        response.money.all += item.amount;

        if (item.classification == "INCOME") {
            response.count.income += 1;
            response.money.income += item.amount;
        } else {
            response.count.expenditure += 1;
            response.money.expenditure += item.amount
        }
    });

    return response
}

async function saveFinance(
    request
) {
    try {
        const category = await Category.findOne({
            attributes: ['id'],
            where: {
                middleCategory: request.category
            }
        });

        if (!category) {
            throw new Error('Category not found');
        }

        await Finance.create({
            memberId: request.memberId,
            transactionDate: request.transactionDate,
            categoryId: category.id, // 외래 키 ID를 사용해야 합니다.
            description: request.description,
            amount: request.amount,
            memo: request.memo,
            asset: request.asset,
            classification: request.classification
        });
    } catch (error) {
        console.error('Error saving finance:', error);
        throw error;
    } 
    
}


module.exports = {getAllFinance, saveFinance, getFinanceCount}