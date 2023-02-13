import './../style/register.css'

function Register() {
  return (
    <section>
      <div className='register-form'>
        <h2>회원가입</h2>
        <div className='input-form'>
          <article>
            <h3>이메일</h3>
            <input placeholder='이메일을 입력해주세요.'/>
          </article>
          <article>
            <h3>비밀번호</h3>
            <input placeholder='비밀번호를 입력해주세요.'/>
            <div className='condition pw-condition'>
              <ul>
                <li>ㆍ최소 8글자</li>
                <li>ㆍ영어 대문자 또는 소문자, 숫자, 특수문자 최소 1자씩 조합</li>
              </ul>
            </div>
            <h3>비밀번호 확인</h3>
            <input className='pw-check' placeholder='비밀번호 확인을 입력해주세요.'/>
          </article>
          <button>회원가입</button>
        </div>
      </div>
    </section>
  )
}
export default Register;