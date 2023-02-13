import { Link } from 'react-router-dom';
import './../style/login.css'

function Login() {
  return (
    <section>
      <div className='login-form'>
        <p className='login-img'>로그인</p>
        <div className='input-form'>
          <div className='check-input'>
            <input placeholder='이메일을 입력해 주세요.'/>
            <input placeholder='비밀번호를 입력해 주세요.'/>
            <button>로그인</button>
          </div>
          <div className='check-pw'>
            <ul>
              <li>
                <input type='checkbox' id='autoLogin'/>
                <label for='autoLogin'/>자동로그인
              </li>
              <li>비밀번호가 기억나지 않으신가요?</li>
            </ul>
          </div>
        </div>
        <p className='check-register'>VICTOK을 처음 시작하시나요? <Link to='/register'>회원가입</Link></p>
      </div>
    </section>
  )
}
export default Login;