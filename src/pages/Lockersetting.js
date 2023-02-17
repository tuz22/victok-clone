import { useState } from "react";

const lockerSettings = [
  {id: 0, lockerName: '라카A', totalNumb: 30, startNumb: 1, fee1: 5000, fee2: 7000, notifiyCycle: 3},
]

function Lockersetting() {
  const [checkedArr, setCheckedArr] = useState([])
  let [count, setCount] = useState(0)
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
      lockerSettings.forEach((e) => idArr.push(e.id))
      setCheckedArr(idArr)
    } else {
      setCheckedArr([])
    }
  }

  return (
    <section className='settings'>
      <div className='locker-form'>
        <article className='locker-status-form'>
          <div className='locker-status-header'>
            <div className='left-btn'>
              <h2>라카 설정</h2>
            </div>
            <div className='right-btn'>
              <button className='add-btn'>라카 구분 추가</button>
              {/* <button className='select-del-btn'>삭제</button> */}
            </div>
          </div>
          <div className='status-note'>
            <p>* 요금(금액/기간/보증금)</p>
          </div>
          <table>
            <thead>
              <tr>
                <th>
                  <div className='check-list-input'>
                    <input type='checkbox' id='checkAll' 
                      onChange={(e) => allCheck(e.target.checked)} 
                      checked={checkedArr.length === lockerSettings.length ? true : false}
                    />
                    <label for='checkAll'/>
                  </div>
                </th>
                <th>라카 구분</th>
                <th>라카 개수</th>
                <th>시작 번호</th>
                <th>요금1</th>
                <th>요금2</th>
                <th>알림 주기</th>
              </tr>
            </thead>
            <tbody>
              {lockerSettings.map((data, i) => (
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
                  <td>{data.lockerName}</td>
                  <td>{data.totalNumb}</td>
                  <td>{data.startNumb}</td>
                  <td>{data.fee1}</td>
                  <td>{data.fee2}</td>
                  <td>{data.notifiyCycle}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </article>
      </div>
    </section>
  )
}
export default Lockersetting;