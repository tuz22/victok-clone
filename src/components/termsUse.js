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
const AlertText = styled.div`
  color: #DB473C;
  font-size: 14px;
  margin-bottom: 5px;
  display: ${props => props.display}
`

function TermsUse({ onChangeIndex }) {
  const data = [
    {id: 0, content: '빅톡 서비스 이용약관 동의합니다. (필수)', url: 'https://victok.notion.site/e8bb0ea024934aadb052205673d484f2'},
    {id: 1, content: '빅톡 개인정보 수집 및 이용에 동의합니다. (필수)', url: 'https://victok.notion.site/36e0eaba20614ae9a2e09723dc797060'},
    {id: 2, content: '빅톡 마케팅 정보 수신에 동의합니다.', url: ''},
  ];
  
  const [checkedArr, setCheckedArr] = useState([])
  const [display, setDisplay] = useState('none')

  const singleCheck = (checked, id) => {
    console.log(id)
    if (checked) {
      setCheckedArr(prev => [...prev, id])
    } else {
      setCheckedArr(checkedArr.filter((e) => e !== id))
    }
  };

  const allCheck = (checked) => {
    if (checked) {
      const idArr = [];
      data.forEach((e) => idArr.push(e.id))
      setCheckedArr(idArr)
    } else {
      setCheckedArr([])
    }
  }

  const nextBtn = () => {
    if (checkedArr.includes(0)) {
      if (checkedArr.includes(1)) {
        setDisplay('none')
        onChangeIndex()
      } 
    } else {
      setDisplay('block')
    }
  }
  return (
    <section>
      <div className='register-form'>
        <h2>이용약관</h2>
        <div className='form check-form'>
          <article>
            <div className='check-list-input'>
              <input type='checkbox' id='checkAll' 
                onChange={(e) => allCheck(e.target.checked)} 
                checked={checkedArr.length === data.length ? true : false}
              />
              <label for='checkAll'/>
              <h3>모든 약관에 동의합니다.</h3>
            </div>
          </article>
          <Line/>
          <article>
            {data.map((data, i) => (
              <div className='check-list' key={i}>
                <div className='check-list-input'>
                  <input type='checkbox' id={`check${data.id}`} 
                    onChange={(e) => singleCheck(e.target.checked, data.id)} 
                    checked={checkedArr.includes(data.id) ? true : false}
                  />
                  <label for={`check${data.id}`}/>
                  <h4>{data.content}</h4>
                </div>
                <a href={data.url}>{data.url ? '자세히' : null}</a>
              </div>
            ))}
          </article>
          <AlertText display={display}>필수 약관에 동의해 주세요.</AlertText>
          <button onClick={nextBtn}>동의하기</button>
        </div>
      </div>
    </section>
  )
}
export default TermsUse;