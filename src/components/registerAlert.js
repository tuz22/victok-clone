import { useState } from 'react';
import styled from 'styled-components'

const AlertText = styled.div`
  color: #DB473C;
  font-size: 14px;
  margin-bottom: 5px;
` 
const regexEmail = /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
const regexPw = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;

function EmailAlert(props) {
  return (
    <div>
      {props.email ===  ' ' 
        ? null 
        : <AlertText>
            <p>{ props.email.length < 1 ? '이메일을 입력해 주세요!' : null }</p>
            <p>{ !regexEmail.test(props.email) ? '올바른 이메일 형식이 아닙니다.' : null }</p>
          </AlertText>
      }
    </div>
  )
}

function PwAlert(props) {
  const test = regexPw.test(props.pw);
  const length = props.pw.length;
  return (
    <div>
      {props.pw ===  ' ' 
        ? null 
        : <AlertText>
            <p>{ length < 1 ? '영어 대문자 또는 소문자, 숫자, 특수문자 최소 1자씩 조합해 주세요.' : null }</p>
            <p>{ length < 1 ? '비밀번호를 입력해 주세요!' : null }</p>
            <p>{ length > 0  && length <8 ? '비밀번호는 최소 8자 이상이어야 합니다.' : null }</p>
            <p>{ !test && length > 7 ? '영어 대문자 또는 소문자, 숫자, 특수문자 최소 1자씩 조합해 주세요.' : null }</p>
          </AlertText>
      }
    </div>
  )
}

function PwCheck(props) {
  const pw = props.pw;
  const pwCheck = props.pwCheck;
  const length = props.pw.length;
  return (
    <div>
      {props.pw ===  ' ' 
        ? null 
        : <AlertText>
            <p>{ length < 1 ? '비밀번호를 입력해 주세요!' : null }</p>
            <p>{ pw !== pwCheck ? '비밀번호가 서로 일치하지 않습니다.' : null }</p>
          </AlertText>
      }
    </div>
  )
}

function NextBtn(/* props,  */{ onChangeIndex }) {
  // const [result, setResult] = useState(false)
  // // console.log(props.data.email)
  // const emailTest = regexEmail.test(props.data.email);
  // const pwTest = regexPw.test(props.data.pw);
  // const pwCheckTest = props.data.pw === props.pwCheck;

  // console.log(emailTest)
  // console.log(pwCheckTest)

  const test = () => {
    // if (emailTest && pwTest && pwCheckTest) {
    //   setResult(true)
    //   console.log(result)
    //   console.log('완료!')
      onChangeIndex()
    // }
  }
  // console.log('email : '+emailTest)
  // console.log('pw : '+pwTest)
  // console.log('check : '+pwCheckTest)
  // console.log(props.data.pw)
  // console.log(props)
  // console.log('result : '+emailTest && pwTest && pwCheckTest)
  return (
    <>
      <button onClick={test}>땡</button>
    </>
  )
}

export { EmailAlert, PwAlert, PwCheck, NextBtn };