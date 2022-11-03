import React from 'react'
import Shadows from '../JsonData/Shadows'
import Banner1 from '../Banners/Banner1';
import {  toast } from 'react-toastify';
export default function BoxShadow() {
    function copyDivToClipboard(codeBoard) {
        var copyText = document.getElementById(codeBoard);
        navigator.clipboard.writeText(copyText.value).then((done) => {
            toast.success('Copied !');
        }).catch((err) => {
            toast.error('Oops Something has been gone wrong  !');
        });
    }

    const props={
        img:'https://images.pexels.com/photos/390659/pexels-photo-390659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
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
            <Banner1 {...props} />
            <div className='grid lg:grid-cols-6 md:grid-cols-6 grid-cols-2 grid-gap-1'>
                {
                    Shadows ?
                        Shadows.map((shadow_, index) => (
                            <div key={index} className="m-auto">
                                <div onClick={() => copyDivToClipboard(shadow_.id)} className={`${shadow_.clsNm} my-5 hover:rounded-full`} style={{ width: "120px", height: "120px", cursor: "pointer" }} ></div>
                                <input type="hidden" value={shadow_.styleCode} id={shadow_.id} />
                            </div>
                        ))
                        : ''
                }
            </div>
        </React.Fragment>
    )
}
