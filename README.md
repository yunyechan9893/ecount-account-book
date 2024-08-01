# ERD
![image](https://github.com/user-attachments/assets/0491e323-ac03-4d5a-b485-0ef69d8cffca)

### 필요한 API
1. 수입과 지출의 입력
    - /finance
    - POST
    - Request
      - body = {
          "memberId":1,
          "transactionDate":"2020-05-05 11:11:10",
          "category": ["INCOME" | "EXPENDITURE"],
          "description": [식비 | 여행,여가 | 교통비 | 생활용품 | 지식,문화 | 의복,미용 | 수리,수선 | 주거,통신| 교육비 | 의료,건강,보험 | 증여,세금,이자 | 경조사비 | 아내사랑해 | 월급 | 퇴직연금(회사몫) | 상여금 | 배당금 | 기타수익], // 띄어쓰기 없이
          "amount":1000,
          "memo":"메모" // null 이어도 됨
        }
      - Response
          - 
2. 수입과 지출의 조회
    - /finance
    - GET
    - Request
- 월별 수입 지출 현황
