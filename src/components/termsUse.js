import './../style/register.css'
import styled from 'styled-components'
import { useState } from 'react'

const Line = styled.div`
  width: 447px;
  height: 1px;
  background: #162D59;
  margin: 20px 0;
  content: '';
`
function TermsUse({ onChangeIndex }) {
  return (
    <section>
      <div className='register-form'>
        <h2>이용약관</h2>
        <div className='form check-form'>
          <article>
            <div className='check-list-input'>
              <input type='checkbox' id='allCheck'/>
              <label for='allCheck'/>
              <h3>모든 약관에 동의합니다.</h3>
            </div>
          </article>
          <Line/>
          <article>
            <div className='check-list'>
              <div className='check-list-input'>
                <input type='checkbox' id='check1'/>
                <label for='check1'/>
                <h4>빅톡 서비스 이용약관 동의합니다.<span>(필수)</span></h4>
              </div>
              <a href='https://victok.notion.site/e8bb0ea024934aadb052205673d484f2'>자세히</a>
            </div>
            <div className='check-list'>
              <div className='check-list-input'>
                <input type='checkbox' id='check2'/>
                <label for='check2'/>
                <h4>빅톡 개인정보 수집 및 이용에 동의합니다.<span>(필수)</span></h4>
              </div>
              <a href='https://victok.notion.site/36e0eaba20614ae9a2e09723dc797060'>자세히</a>
            </div>
            <div className='check-list'>
              <div className='check-list-input'>
                <input type='checkbox' id='check3'/>
                <label for='check3'/>
                <h4>빅톡 마케팅 정보 수신에 동의합니다.</h4>
              </div>
            </div>
          </article>
          <button onClick={() => onChangeIndex()}>동의하기</button>
        </div>
      </div>
    </section>
  )
}
export default TermsUse;