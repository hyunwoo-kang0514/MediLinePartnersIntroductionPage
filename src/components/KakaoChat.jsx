import React from 'react'
import './KakaoChat.css'

const KakaoChat = () => {
  const handleKakaoChat = () => {
    // 카카오톡 채널 링크
    window.open('http://pf.kakao.com/_tzxakn', '_blank')
  }

  return (
    <div className="kakao-chat" onClick={handleKakaoChat}>
      <div className="kakao-icon">💬</div>
      <div className="kakao-text">
        <span>카카오톡</span>
        <span>빠른 문의</span>
      </div>
    </div>
  )
}

export default KakaoChat 