import styled from 'styled-components'

const AlertText = styled.div`
  color: #DB473C;
  font-size: 14px;
  margin-bottom: 5px;
` 

function EmailAlert(props) {
  const regex = /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  console.log(props)
  return (
    <div>
      {props.email ===  ' ' 
        ? null 
        : <AlertText>
            <p>{ props.email.length < 1 ? '이메일을 입력해 주세요!' : null }</p>
            <p>{ !regex.test(props.email) ? '올바른 이메일 형식이 아닙니다.' : null }</p>
          </AlertText>
      }
    </div>
  )
}

function PwAlert(props) {
  const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
  const test = regex.test(props.pw);
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

export { EmailAlert, PwAlert, PwCheck };