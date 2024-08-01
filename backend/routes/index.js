const { getMember, saveFinance } = require('../controllers/saleController');
const { body, validationResult  } = require('express-validator');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'send' });
});


router.post('/finances', [
    body("memberId").exists().withMessage('memberId is required'),
    body("transactionDate").exists().withMessage('transactionDate is required'),
    body("category").exists().withMessage('category is required').isIn(["INCOME", "EXPENDITURE"]).withMessage('category must be either INCOME or EXPENDITURE'),
    body("description").exists().withMessage('description is required'),
    body("amount").exists().withMessage('amount is required'),
  ],
  async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      saveFinance(req.body)
    } catch {
      return res.status(500).json({ errors: errors.array() });
    }
  
  return res.status(200).send("저장 성공")
});

router.get('/test2', async (req, res, next) => {
  const member = getMember(req)
  return res.status(200).send(member)
});

module.exports = router;
