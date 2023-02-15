import './../style/register.css'
import { Link } from "react-router-dom";
import bgImg from './../assets/img/welcome.png'

function Welcome() {
  return (
    <section>
      <div className='welcome-form'>
        <div className='form-wrap'>
          <article>
            <div>
              <h1>회원가입이</h1>
              <h1>완료<span>되었습니다.</span></h1>
              <p>이제 편리하게 관리해보세요.</p>
            </div>
            <img src={bgImg}/>
          </article>
          <Link to='/login'>
            <button>로그인 하러가기</button>
          </Link>
          </div>
      </div>
    </section>
  )
}
export default Welcome;