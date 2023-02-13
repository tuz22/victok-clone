import './../style/banner.css'

function Banner() {
  return (
    <div className='main-banner'>
      <div className='main-banner-img'>
        <article>
          <h1>라카 관리의 시작은</h1>
          <h1>빅톡에서!</h1>
          <div className='main-banner-p'>
            <p>이용자 라카사용기간에 따라 자동으로 알림톡을 보내드립니다.</p>
            <p>번거로운 일은 저희에게 맡기세요.</p>
            <button className='main-btn'>지금 바로 시작하기 〉</button>
          </div>
        </article>
      </div>
    </div>
  )
}
export default Banner;