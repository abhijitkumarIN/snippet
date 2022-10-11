import React from 'react'
import Inputs from '../JsonData/Inputs'
import Banner1 from '../Banners/Banner1';
export default function InputOne() {
    function copyDivToClipboard(codeBoard) {
        var copyText = document.getElementById(codeBoard);
        navigator.clipboard.writeText(copyText.value);
        alert('has been copied here ')
    }
  return (
    <>
    <Banner1/>
    <div className="grid lg:grid-cols-4 md:grid-cols-4 grid-cols-1">
        {
            Inputs?
            Inputs.map((input__ , index)=>(
                <div className="grid mx-4 my-2" key={index}>
                    <input style={{margin:"auto" , width:"100%"}} onClick={()=>copyDivToClipboard(input__.id)} type="text" className={input__.clsNm} placeholder={input__.plcInnerText} />
                    <input type="hidden" value={input__.styleCode} id={input__.id}/>
                    </div>
            ))

            :''
        }
    </div>
    </>
  )
}
