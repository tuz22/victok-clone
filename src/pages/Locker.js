import { useState } from 'react';
import './../style/locker.css'
function Locker() {

  const lockerStatus = [
    {id: 0, name: '홍길동', phone: '010-1234-1234', type: '일반', numb: 123, startDate: '21.12.23', endDate: '21.12.24', remainingDate: 1},
    {id: 1, name: '홍길동', phone: '010-1234-1234', type: '일반', numb: 123, startDate: '21.12.23', endDate: '21.12.24', remainingDate: 1},
  ]

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
              <thead>
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
              <tbody>
                {lockerStatus.map((data, i) => (
                  <tr>
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
          <article className='locker-status-form'>
            <h2>라카 현황</h2>
            <table>
              <thead>
                <tr>
                  <th>
                    <input type='checkbox' id='checkAll' 
                      onChange={(e) => allCheck(e.target.checked)} 
                      checked={checkedArr.length === lockerStatus.length ? true : false}
                    />
                    <label for='checkAll'/></th>
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
                    <td>
                      <div className='check-list' key={i}>
                        <div className='check-list-input'>
                          <input type='checkbox' id={`check${data.id}`} 
                            onChange={(e) => singleCheck(e.target.checked, data.id)} 
                            checked={checkedArr.includes(data.id) ? true : false}
                          />
                          <label for={`check${data.id}`}/>
                          <h4>{data.content}</h4>
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
export default Locker;