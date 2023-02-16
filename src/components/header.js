import { useState } from 'react';
import { Link } from 'react-router-dom';
import dia from './../assets/img/그룹 6961.svg';

function Header() {
  const [tab, setTab] = useState();
  const tabData = [
    // {id: 0, title: '로고', link: '/'}, 
    {id: 0, title: '라카설정', link: '/'}, 
    {id: 1, title: '라카현황', link: '/locker/status'},
    {id: 2, title: '전체회원', link: '/'},
  ];
  const[active, setActive] = useState();

  const onActive = (e) => {
    const tabId = e.target.getAttribute('value')
    console.log(tabId)
    console.log(active)
    setTab(tabId);
    setActive(tabId);
    if (!tabId) {
      console.log('로고')
    }
  }

  const offActive = () => {
    setTab()
    setActive()
  }

  return (
    <header className='header'>
      <div className='header-nav'>
        <ul className='main-nav'>
          <Link to='/'>
            <li className='header-logo' onClick={offActive}>로고</li>
          </Link>
          {
            tabData.map((data, i) => {
              return (
                <Link to={data.link}>
                  <li key={i}>
                    <a className={i == active ? 'active' : ''} value={i} 
                    onClick={onActive}>{data.title}</a>
                  </li>
                </Link>
              )
            })
          }
          {/* <li>라카설정</li>
          <li>라카현황</li>
          <li>전체회원</li> */}
        </ul>
        <ul className='sub-nav'>
          <Link to='/'>
            <li>문의</li>
          </Link>
          <img src={dia} className='sub-dia' alt='dia'/>
          <Link to='/login'>
            <li>로그인</li>
          </Link>
          <img src={dia} className='sub-dia' alt='dia'/>
          <Link to='/register'>
            <li>회원가입</li>
          </Link>
        </ul>
      </div>  
    </header>
  )
}

export default Header;