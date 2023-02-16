import './../style/register.css'
import { EmailAlert, PwAlert, PwCheck } from './RegisterAlert';
import { useState } from 'react';
import { useSelector } from 'react-redux';

function RegisterUserInfo({ onChangeIndex, onBackIndex }) {
  const id = useSelector((state) => state.user.length)-1
  console.log(id)
  const email = useSelector((state) => state.user[id].email)
  console.log(email)
  return (
    <section>
      <div className='register-form'>
        <h2>기본정보</h2>
        <div className='form user-form'>
          <article>
            <div>
              <h3>대표자 이름</h3>
              <input placeholder='이름을 입력해 주세요.'/>
            </div>
            <div>
              <h3>닉네임</h3>
              <input placeholder='10자 이내'/>
              {/* <input placeholder='비밀번호를 입력해주세요.' name='pw' onChange={onChangeAccount}/> */}
            </div>
            <div>
              <h3>이메일</h3>
              <input value={email} readOnly/>
            </div>
            <div className='user-phone'>
              <h3>휴대폰 번호</h3>
              <div className='phone-numb'>
                <input placeholder='휴대폰 번호'/>
                <button>인증번호 요청</button>
                <input placeholder='인증 번호'/>
                <button>확인</button>
              </div>
            </div>
          </article>
          <footer>
            <button className='prev-btn' onClick={() => onBackIndex()}>이전</button>
            <button className='next-btn' onClick={() => onChangeIndex()}>다음</button>
          </footer>
        </div>
      </div>
    </section>
  )
}
export default RegisterUserInfo;