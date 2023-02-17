import { useState } from 'react';
import './../style/locker.css'
import markIcon from './../assets/icons/exclamation-mark.png';

const lockerStatus = [
  {id: 0, name: '홍길동', phone: '010-1234-1234', type: '일반', numb: 123, startDate: '21.12.23', endDate: '21.12.24', remainingDate: 1},
  {id: 1, name: '홍길동', phone: '010-1234-1234', type: '일반', numb: 123, startDate: '21.09.23', endDate: '21.12.24', remainingDate: 93},
]

function Lockershow() {
  const [checkedArr, setCheckedArr] = useState([])
  // const [display, setDisplay] = useState('none')

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
      lockerStatus.forEach((e) => idArr.push(e.id))
      setCheckedArr(idArr)
    } else {
      setCheckedArr([])
    }
  }

  return (
    <>
      <section>
        <div className='locker-form'>
          <article className='locker-30days-form'>
            <h2>남은 기간 30일 이내</h2>
            <table>
              {lockerStatus.map((data, i) => (
                <>
                  {(data.remainingDate < 31) 
                    ? <thead>
                        <tr>
                          <th>회원이름</th>
                          <th>핸드폰번호</th>
                          <th>라카구분</th>
                          <th>라카번호</th>
                          <th>시작일</th>
                          <th>종료일</th>
                          <th>잔여일</th>
                      </tr>
                    </thead>
                    : null
                  }
                </>
              ))}
              {lockerStatus.map((data, i) => (data.remainingDate < 31 === null 
              ?
                <div className='locker-30days-null'>
                  <p className='mark-icon'><img src={markIcon}/></p>
                  <p>30일 이내 만료되는 라카가 없습니다.</p>
                </div>
              : null ) )}
              <tbody>
                {lockerStatus.map((data, i) => (
                  <>
                    {(data.remainingDate < 31) 
                      ? <tr>
                        <td>{data.name}</td>
                        <td>{data.phone}</td>
                        <td>{data.type}</td>
                        <td>{data.numb}</td>
                        <td>{data.startDate}</td>
                        <td>{data.endDate}</td>
                        <td>{data.remainingDate}</td>
                        </tr>
                      : null
                    }
                  </>
                ))}
              </tbody>
            </table>
          </article>
          <article className='locker-status-form'>
            <div className='locker-status-header'>
              <div className='left-btn'>
                <h2>라카 현황</h2>
                <button>리스트</button>
                <button className='array-btn'>배열</button>
              </div>
              <div className='right-btn'>
                <input placeholder='이름 / 연락처 빠른 검색'/>
                <button className='add-btn'>이용자 추가</button>
                {/* <button className='select-del-btn'>선택 삭제</button> */}
              </div>
            </div>
            <table>
              <thead>
                <tr>
                  <th className='checkbox-th'>
                    <div className='check-list-input'>
                      <input type='checkbox' id='checkAll' 
                        onChange={(e) => allCheck(e.target.checked)} 
                        checked={checkedArr.length === lockerStatus.length ? true : false}
                      />
                      <label for='checkAll'/>
                    </div>
                  </th>
                  <th>회원이름</th>
                  <th>핸드폰번호</th>
                  <th>라카구분</th>
                  <th>라카번호</th>
                  <th>시작일</th>
                  <th>종료일</th>
                  <th>잔여일</th>
                </tr>
              </thead>
              <tbody>
                {lockerStatus.map((data, i) => (
                  <tr>
                    <td className='check-wrap'>
                      <div className='check-list' key={i}>
                        <div className='check-list-input'>
                          <input type='checkbox' id={`check${data.id}`} 
                            onChange={(e) => singleCheck(e.target.checked, data.id)} 
                            checked={checkedArr.includes(data.id) ? true : false}
                          />
                          <label for={`check${data.id}`}/>
                        </div>
                      </div>
                    </td>
                    <td>{data.name}</td>
                    <td>{data.phone}</td>
                    <td>{data.type}</td>
                    <td>{data.numb}</td>
                    <td>{data.startDate}</td>
                    <td>{data.endDate}</td>
                    <td>{data.remainingDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </article>
        </div>
      </section>
    </>
  )
}
export default Lockershow;