import AddressAPI from "./addressAPI";

function FacilityInfo() {

  return (
    <section>
      <div className='register-form'>
        <h2>시설정보</h2>
        <div className='form facility-form'>
          <article>
            <div>
              <h3>시설 유형</h3>
              <select>
                <option id='0'>선택해주세요</option>
              </select>
            </div>
            <div>
              <h3>시설 이름</h3>
              <input placeholder='시설 이름을 입력해주세요.'/>
            </div>
            <div>
              <h3>시설 주소</h3>
              <input placeholder='우편번호 검색'/>
              <input placeholder='상세주소 입력'/>
              <input placeholder='상세주소 입력'/>
            </div>
            <AddressAPI />
            <div>
              <h3>시설 연락처</h3>
              <input placeholder='연락처를 입력해주세요.'/>
            </div>
          </article>
          <footer>
            <button>프로필 작성 완료</button>
          </footer>
        </div>
      </div>
    </section>
  )
}
export default FacilityInfo;