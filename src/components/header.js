import dia from './../assets/img/그룹 6961.svg';

function Header() {
  return(
    <header className='header'>
      <div className='header-nav'>
        <ul className='main-nav'>
          <li className='header-logo'>로고</li>
          <li className='locker-btn-set'>라카설정</li>
          <li className='locker-btn-status'>라카현황</li>
          <li className='locker-btn-allMember'>전체회원</li>
        </ul>
        <ul className='sub-nav'>
          <li>문의</li>
          <img src={dia} className='sub-dia' alt='dia'/>
          <li>로그인</li>
          <img src={dia} className='sub-dia' alt='dia'/>
          <li>회원가입</li>
        </ul>
      </div>  
    </header>
  )
}

export default Header;