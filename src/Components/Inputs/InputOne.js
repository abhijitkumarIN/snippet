import React from 'react'
import Inputs from '../JsonData/Inputs'
import Banner1 from '../Banners/Banner1';
import {  toast } from 'react-toastify';
export default function InputOne() {
    function copyDivToClipboard(codeBoard) {
        var copyText = document.getElementById(codeBoard);
        navigator.clipboard.writeText(copyText.value).then((done) => {
            toast.success('Has been copied !');
        }).catch((err) => {
            toast.error('Oops Something has been gone wrong  !');
        });
    }

    const props={
        img:'https://images.pexels.com/photos/159825/color-pencil-drawing-coloring-colored-pencils-159825.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        titleOne:"Elevate",
        titleTwo:"your",
        titleThird:"productivity",
        articles:"Get beautiful css snippet of various Components\
        soon you 'll be able to find out here input box css , color plates , box shadow and Glassmorphism generator \
        so",
        suggestion:"Ctrl+D 🟡"
    }
  return (
    <React.Fragment>
    <Banner1 {...props}/>
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
    </React.Fragment>
  )
}
