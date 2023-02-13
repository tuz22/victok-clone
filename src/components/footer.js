/* 이미지 */
import instagram from './../assets/icons/icon-instagram.png'
import kakaotalk from './../assets/icons/icon-kakaotalk.png'
import youtube from './../assets/icons/icon-youtube.png'
import blog from './../assets/icons/icon-blog.png'

function Footer() {
  return(
    <footer>
        <div className='footer-p'>
          <ul>
            <li>서비스 이용약관</li>
            <li>개인정보처리방침</li>
            <li>FAQ</li>
          </ul>
          <article>
            <p>(주)골드레인 | 대표이사 : 김도현 | 사업자등록번호 : 459-88-01214 | 통신판매신고번호 : 2019-강원춘천-0043</p>
            <p>강원도 춘천시 수변공원길 19 101호 | 대표전화 : 033-818-0337</p>
            <p className='copyright'>copyright 2022 GOLDLANE All rights reserved.</p>
          </article>
        </div>
        <div className='footer-sns'>
          <ul>
            <li>
              <a href='https://www.instagram.com/victok_v/' target='_blank'>
              <img src={instagram} className='sns-icon' alt=''/></a></li>
            <li><a href='https://pf.kakao.com/_Afxdxfb' target='_blank'><img src={kakaotalk} className='sns-icon' alt=''/></a></li>
            <li><a href='https://www.youtube.com/channel/UCU0DHWyc790ANpg9UbF83Ag?themeRefresh=1' target='_blank'><img src={youtube} className='sns-icon' alt=''/></a></li>
            <li><a href='https://blog.naver.com/victok2022' target='_blank'><img src={blog} className='sns-icon' alt=''/></a></li>
          </ul>
        </div>
      </footer>
  )
}
export default Footer;