# EmailJS 설정 가이드

## 1. EmailJS 계정 설정

1. [EmailJS 웹사이트](https://www.emailjs.com/)에 가입
2. 대시보드에서 새 서비스 생성
3. Gmail 또는 원하는 이메일 서비스 연결

## 2. 템플릿 생성

1. EmailJS 대시보드에서 "Email Templates" 섹션으로 이동
2. "Create New Template" 클릭
3. 다음과 같이 설정:

### 템플릿 설정:
- **Template ID**: `contact_form`
- **Subject**: `메디라인파트너스 문의사항 발신자 : {{name}}`
- **Content**: 
```
A message by {{name}} has been received. Kindly respond at your earliest convenience.

Name: {{name}}
Email: {{email}}
Company: {{company}}
Message: {{message}}
Time: {{time}}
```

## 3. 코드 설정 업데이트

Contact.jsx 파일에서 다음 값들을 실제 값으로 교체:

```javascript
// 18번째 줄
publicKey: "YOUR_PUBLIC_KEY", // 실제 Public Key로 교체

// 108번째 줄  
const serviceId = 'contact_service' // 실제 서비스 ID로 교체

// 109번째 줄
const templateId = 'contact_form' // 실제 템플릿 ID로 교체
```

## 4. 테스트

1. 웹사이트의 문의 폼에서 테스트 메시지 발송
2. 콘솔에서 "이메일 발송 성공!" 메시지 확인
3. 설정된 이메일 주소로 메시지 수신 확인

## 5. 보안 주의사항

- Public Key는 클라이언트에 노출되므로 민감한 정보는 포함하지 마세요
- 이메일 템플릿에서 사용자 입력값 검증을 고려하세요
