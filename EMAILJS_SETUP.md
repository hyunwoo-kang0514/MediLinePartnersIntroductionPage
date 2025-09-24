# EmailJS 설정 가이드

## 1. EmailJS 계정 생성
1. https://www.emailjs.com/ 에서 계정을 생성합니다.

## 2. 이메일 서비스 추가
1. Dashboard에서 "Add New Service" 클릭
2. Gmail을 선택하고 연결
3. 서비스 ID를 복사 (예: service_mediline)

## 3. 이메일 템플릿 생성
1. "Email Templates" 섹션에서 "Create New Template" 클릭
2. 다음 템플릿 내용을 사용:

**템플릿 내용:**
```
Subject: 메디라인파트너스 문의 - {{from_name}}

안녕하세요,

{{from_name}}님이 메디라인파트너스 웹사이트를 통해 문의를 보내셨습니다.

문의자 정보:
- 이름: {{from_name}}
- 이메일: {{from_email}}
- 회사: {{company}}
- 문의내용: {{message}}

빠른 시일 내에 답변드리겠습니다.

감사합니다.
메디라인파트너스
```

3. 템플릿 ID를 복사 (예: template_contact)

## 4. Public Key 확인
1. Account → General → Public Key 복사

## 5. Contact.jsx 파일 수정
Contact.jsx 파일에서 다음 값들을 실제 값으로 변경:

```javascript
const serviceId = '실제_서비스_ID'
const templateId = '실제_템플릿_ID' 
const publicKey = '실제_퍼블릭_키'
```

## 6. 테스트
1. 웹사이트에서 문의 폼을 작성하고 제출
2. hyunwoo307403@gmail.com으로 이메일이 도착하는지 확인

## 주의사항
- 이메일 서비스는 무료 플랜에서 월 200통까지만 전송 가능
- 프로덕션 환경에서는 환경변수를 사용하여 키를 관리하는 것이 좋습니다
