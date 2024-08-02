const { getAllFinance, saveFinance } = require('../controllers/saleController');
const { body, validationResult  } = require('express-validator');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'send' });
});


router.post('/finances', [
    body("memberId").exists().withMessage('멤버아이디가 비었습니다'),
    body("transactionDate").exists().withMessage('사용 혹은 입금된 날짜를 입력해주세요'),
    body("category").exists().withMessage('카테고리를 입력해주세요'),
    body("description").exists().withMessage('내용이 필요합니다'),
    body("amount").exists().withMessage('가격을 입력해주세요'),
    body("asset").exists().withMessage('카드사 종류를 입력해주세요'),
    body("classification").exists().withMessage('출처 종류를 확인해주세요').isIn(["INCOME", "EXPENDITURE"]).withMessage('INCOME/EXPENDITURE을 입력해주세요'),
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

router.get('/finance', async (req, res) => {
  console.log(getAllFinance(req.headers))
  return res.status(200)
});

module.exports = router;
