import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import './../style/login.css'

function Login() {
  const userData = useSelector((state) => state.user)
  const [account, setAccount] = useState([])
  const [id, setId] = useState(0)
  const navigate = useNavigate()

  const onLoginAccount = (e) => {
    setAccount({
      ...account,
      [e.target.name]: e.target.value
    })
  }

  const onCheckLogin = () => {
    userData.map((data, i) => {
      console.log(userData[i])
      if (data.email === account.email) {
        console.log('이메일 일치')
        setId(i)
        if (userData[`${id}`].pw === account.pw) {
          console.log('비밀번호도 일치')
          navigate('/')
          alert('로그인 완료')
        }
      }
      console.log('불일치')
    })
  }
console.log(account)
console.log(account.email)

  return (
    <section>
      <div className='login-form'>
        <p className='login-img'>로그인</p>
        <div className='input-form'>
          <div className='check-input'>
            <input placeholder='이메일을 입력해 주세요.' name='email' onChange={onLoginAccount}/>
            <input type='password' placeholder='비밀번호를 입력해 주세요.' name='pw' onChange={onLoginAccount}/>
            <button onClick={onCheckLogin}>로그인</button>
          </div>
          <div className='check-pw'>
            <ul>
              <li>
                <input type='checkbox' id='autoLogin'/>
                <label for='autoLogin'/>자동로그인
              </li>
              <li>
                <Link to='/findpw'>비밀번호가 기억나지 않으신가요?</Link>
              </li>
            </ul>
          </div>
        </div>
        <p className='check-register'>VICTOK을 처음 시작하시나요? <Link to='/register'>회원가입</Link></p>
      </div>
    </section>
  )
}
export default Login;