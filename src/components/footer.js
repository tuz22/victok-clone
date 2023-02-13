/* 이미지 */
import instagram from './../assets/icons/icon-instagram.png'
import kakaotalk from './../assets/icons/icon-kakaotalk.png'
import youtube from './../assets/icons/icon-youtube.png'
import blog from './../assets/icons/icon-blog.png'

function Footer() {
  return (
    <footer>
        <div className='footer-p'>
          <ul>
            <li>
              <a href='https://victok.notion.site/e8bb0ea024934aadb052205673d484f2'>서비스 이용약관</a>
            </li>
            <li>
              <a href='https://victok.notion.site/36e0eaba20614ae9a2e09723dc797060'>개인정보처리방침</a>
            </li>
            <li>
              <a href='https://victok.notion.site/91f3beb8dd5d4bef8d640d7442a0a8fe?v=473c48e72b0b4a079c14e0f4a98dd317'>FAQ</a>
            </li>
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
              <a href='https://www.instagram.com/victok_v/' target='_blank' rel='noopener noreferrer'>
                <img src={instagram} className='sns-icon' alt=''/>
              </a>
            </li>
            <li>
              <a href='https://pf.kakao.com/_Afxdxfb' target='_blank' rel='noopener noreferrer'>
                <img src={kakaotalk} className='sns-icon' alt=''/>
              </a>
            </li>
            <li>
              <a href='https://www.youtube.com/channel/UCU0DHWyc790ANpg9UbF83Ag?themeRefresh=1' target='_blank' rel='noopener noreferrer'>
                <img src={youtube} className='sns-icon' alt=''/>
              </a>
            </li>
            <li>
              <a href='https://blog.naver.com/victok2022' target='_blank' rel='noopener noreferrer'>
                <img src={blog} className='sns-icon' alt=''/>
              </a>
            </li>
          </ul>
        </div>
      </footer>
  )
}
export default Footer;