import './../style/register.css'
import { useSelector } from 'react-redux';

function FindPw() {
  return (
    <section>
      <div className='register-form find-pw'>
        <h2>비밀번호 재설정</h2>
        <div className='form findPw-form'>
          <article>
            <div className='find-phone-text'>
              <p>가입 시 등록한 휴대폰번호를 입력해주세요.</p>
              <p>인중 후 비빌번호 재설정이 가능합니다.</p>
            </div>
            <div className='user-phone'>
              <h3 className='phone-text'>휴대폰 번호</h3>
              <div className='phone-numb'>
                <input placeholder='휴대폰 번호'/>
                <button>인증번호 요청</button>
                <input placeholder='인증 번호'/>
                <button>확인</button>
              </div>
            </div>
            <button className='next-btn'>다음</button>
          </article>
        </div>
      </div>
    </section>
  )
}
export default FindPw;