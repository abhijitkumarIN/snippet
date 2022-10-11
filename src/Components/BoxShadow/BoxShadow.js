import React from 'react'
import Shadows from '../JsonData/Shadows'
import Banner1 from '../Banners/Banner1';
import {  toast } from 'react-toastify';
export default function BoxShadow() {
    function copyDivToClipboard(codeBoard) {
        var copyText = document.getElementById(codeBoard);
        navigator.clipboard.writeText(copyText.value).then((done) => {
            toast.success('Has been copied !');
        }).catch((err) => {
            toast.error('Oops Something has been gone wrong  !');
        });


    }
    return (
        <>
            <Banner1 />

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
        </>
    )
}
