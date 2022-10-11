import React, { useState } from 'react';
import Button from '../JsonData/Button';
import Banner1 from './../Banners/Banner1';
import {  toast } from 'react-toastify';

export default function ButtonOne() {
    const notify = (e) => toast(e);
    function copyDivToClipboard(codeBoard) {
        var copyText = document.getElementById(codeBoard);
        navigator.clipboard.writeText(copyText.value).then((done) => {
            notify.success('Has been copied !');
        }).catch((err) => {
            notify.error('Oops Something has been gone wrong  !');
        });
    }

    return (
        <div>
            
            <Banner1 />
            <div className='grid lg:grid-cols-8 md:grid-cols-8 grid-cols-2'>
                {
                    Button ? Button.map((btnData, index) => (
                        <div key={index} className="grid my-6">
                            <div className="m-auto">
                                <button onClick={() => copyDivToClipboard(btnData.id)} className={btnData.clsNm ? btnData.clsNm : ''}>{btnData.btnInnerText ? btnData.btnInnerText : ''}</button>
                                <input type="hidden" value={btnData.styleCode} id={btnData.id} />
                            </div>
                        </div>
                    ))
                        : ''
                }
            </div>
        </div>
    )
}
