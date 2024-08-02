const { getAllFinance, saveFinance, getFinanceCount } = require('../controllers/saleController');
const { body, validationResult, header  } = require('express-validator');
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
      await saveFinance(req.body)
    } catch {
      return res.status(500).json({ errors: errors.array() });
    }
  
  return res.status(200).send("저장 성공")
});

// 통합 금액(+건수), 수입(+건수), 지출(+건수), 날짜, 자산, 분류, 내용, 금액
// 월별로 조회 가능
router.get('/finance', [
    header('memberId').exists().withMessage('멤버 아이디를 입력해주세요'),
  ], 
  async (req, res) => {
    const memberId = req.headers.memberid;
    const date = req.query.date;
    const type = req.query.type;

    if (date == null) {
      return res.status(400).json({errors: "날짜를 입력하세요"});
    }

    const data = await getAllFinance(memberId, date, type)

    return res.status(200).send(data)
});

router.get('/finance/count', [
  header('memberId').exists().withMessage('멤버 아이디를 입력해주세요'),
], 
async (req, res) => {
  const memberId = req.headers.memberid;
  const date = req.query.date;

  if (date == null) {
    return res.status(400).json({errors: "날짜를 입력하세요"});
  }

  const data = await getFinanceCount(memberId, date)

  return res.status(200).send(data)
});

module.exports = router;
