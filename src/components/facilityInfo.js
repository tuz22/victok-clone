import './../style/register.css'
import { useState } from 'react';
import AddressAPI from './AddressAPI';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Select = styled.select`
  color: ${props => props.color};
`
const Option = styled.option`
  color: 'black';
`
function FacilityInfo() {
  const [addressData, setAddressData] = useState(0)
  const [color, setColor] = useState('#A8A8A8')
  const getAddressData = (data) => {
    setAddressData(data)
    console.log(addressData)
    console.log('완료')
  };

  const changeOption = (e) => {
    const value = e.target.value;
    value === '선택해주세요' ? setColor('#A8A8A8') : setColor('black')
  }

  return (
    <section>
      <div className='register-form'>
        <h2>시설정보</h2>
        <div className='form facility-form'>
          <article className='facility-type'>
            <div>
              <h3>시설 유형</h3>
              <Select onChange={changeOption} color={color}>
                <Option label='선택해주세요'>선택해주세요</Option>
                <Option id='1'>option1</Option>
                <Option id='2'>option2</Option>
              </Select>
            </div>
            <div className='name-wrap'>
              <h3>시설 이름</h3>
              <input className='name-input' placeholder='시설 이름을 입력해주세요.'/>
            </div>
          </article>
          <article className='facility-add'>
              <h3>시설 주소</h3>
              <div className='code-wrap'>
                <input className='code-input' placeholder='우편번호 검색' value={addressData.code} readOnly/>
                <AddressAPI getAddressData={getAddressData}/>
              </div>
              <input placeholder='상세주소 입력' value={addressData.add} readOnly/>
              <input placeholder='상세주소 입력'/>
            <div>
              <h3>시설 연락처</h3>
              <input placeholder='연락처를 입력해주세요.'/>
            </div>
          </article>
          <Link to='/welcome'><button>프로필 작성 완료</button></Link>
        </div>
      </div>
    </section>
  )
}
export default FacilityInfo;