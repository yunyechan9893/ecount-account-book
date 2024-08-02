const { Member, Finance, Category } = require('../models')
const member = require('../models/member')

async function getAllFinance(header) {
    return Finance.findAll({
        attributes: ['id', 'transaction_id', 'category', 'description', 'amount', 'memo', 'asset', 'classification'],
        where: {
            memberId: header.memberId
        }
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
            category: category.id, // 외래 키 ID를 사용해야 합니다.
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