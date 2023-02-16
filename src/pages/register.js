import './../style/register.css'
// import { EmailAlert, PwAlert, PwCheck } from '../components/registerAlert';
import { useState } from 'react';
import RegisterUser from '../components/RegisterUser';
import TermsUse from '../components/TermsUse';
import RegisterUserInfo from '../components/RegisterUserInfo';
import FacilityInfo from '../components/FacilityInfo';

function Register() {
  const [index, setIndex] = useState(0)
  const onChangeIndex = () => {
    setIndex(index+1)
  };
  const onBackIndex = () => {
    setIndex(index-1)
  };
  switch (index) {
    case 0 :
      return <TermsUse onChangeIndex={onChangeIndex}/>
    case 1 :
      return <RegisterUser onChangeIndex={onChangeIndex}/>
    case 2 :
      return <RegisterUserInfo onChangeIndex={onChangeIndex} onBackIndex={onBackIndex}/>
    case 3 :
      return <FacilityInfo onChangeIndex={onChangeIndex}/>
  }
}
export default Register;