import './../style/register.css'
import { EmailAlert, PwAlert, PwCheck } from '../components/registerAlert';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addAccount } from '../store/userSlice';

function RegisterUser({ onChangeIndex }) {
  const [account, setAccount] = useState({
    email: ' ',
    pw: ' ',
  });
  const [pwCheck, setPwCheck] = useState()
  const [pwType, setPwType] = useState('password')
  const [checkType, setCheckType] = useState('password')
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const id = state.user.length;

  const onChangeAccount = (e) => {
    setAccount({
      ...account,
      [e.target.name]: e.target.value
    })
  }

  const onChangePwCheck = (e) => {
    setPwCheck(e.target.value)
  }

  const onAddAccount = () => {
    dispatch(addAccount({ id: id, email: account.email, pw: account.pw }))
    onChangeIndex()
    console.log('완료?')
  }

  return (
    <section>
      <div className='register-form'>
        <h2>회원가입</h2>
        <div className='input-form'>
          <article>
            <h3>이메일</h3>
            <input placeholder='이메일을 입력해주세요.' name='email' onChange={onChangeAccount}/>
            <EmailAlert email={account.email}/>
          </article>
          <article>
            <h3>비밀번호</h3>
            <input type={pwType} placeholder='비밀번호를 입력해주세요.' name='pw' onChange={onChangeAccount}/>
            <PwAlert pw={account.pw} />
            <div className='condition pw-condition'>
              <ul>
                <li>ㆍ최소 8글자</li>
                <li>ㆍ영어 대문자 또는 소문자, 숫자, 특수문자 최소 1자씩 조합</li>
              </ul>
            </div>
            <h3>비밀번호 확인</h3>
            <input type={checkType} className='pw-check' placeholder='비밀번호 확인을 입력해주세요.' onChange={onChangePwCheck}/>
            <PwCheck pw={account.pw} pwCheck={pwCheck}/>
          </article>
          <button onClick={onAddAccount}>다음</button>
        </div>
      </div>
    </section>
  )
}
export default RegisterUser;