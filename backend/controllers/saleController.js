const { Member, Finance } = require('../models')

async function getMember(req) {
    return Member.findAll({})
}

async function saveFinance(
    request
) {
    const {
        memberId,
        transactionDate,
        category,
        description,
        amount,
        memo
    } = request

    Finance.create({
        memberId: memberId,
        transactionDate: transactionDate,
        category: category,
        description: description,
        amount: amount,
        memo: memo
    })
}

module.exports = {getMember, saveFinance}