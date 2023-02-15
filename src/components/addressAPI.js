import './../style/register.css'
import { useState } from "react";
import DaumPostcode from "react-daum-postcode";

function AddressAPI({ getAddressData }) {
  const [openPostcode, setOpenPostcode] = useState(false);
  const onButton = () => {
    setOpenPostcode(current => !current);
  }

  const selectAddress = (data) => {
    const address = data.address
    const code = data.zonecode
    getAddressData({'add' : address, 'code' : code })
    setOpenPostcode(false);
  }

  return (
    <div>
      <button onClick={onButton} className='code-search-btn'>우편번호 검색</button>

      {openPostcode && 
        <DaumPostcode 
          className='post-style'
          onComplete={selectAddress}  // 값을 선택할 경우 실행되는 이벤트
          autoClose={false}
          defaultQuery='판교역로 235' // 팝업을 열때 기본적으로 입력되는 검색어 
          />
        }
    </div>
  )

}
export default AddressAPI;