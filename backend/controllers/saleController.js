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

    if (type!=null) {
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

module.exports = {getAllFinance, saveFinance}