
import React, { useState, useEffect } from 'react'

import { FaRocketchat } from 'react-icons/fa';
import Banner1 from '../Banners/Banner1';
export default function GlassMorphism() {
    const [detailState, jsonDetails] = useState({
        opacitySet: 0.2,
        blueSet: 9,
        barderRadius: 0
    });
    const [state, setState] = useState({
        background: '#fff'
    })
    const [pickedColor, setPickedColor] = useState()
    const [blurState, setblur] = useState(7)
    const [saturateState, setSaturate] = useState(null)
    const [userImageState, SetUserImage] = useState(false)
    function opacityChange() {
        var getValue = document.getElementById('opacityID').value;
        jsonDetails({
            opacitySet: (getValue / 100),
            blueSet: detailState.blueSet,
            barderRadius: detailState.barderRadius
        })
    }
    function blurChange() {
        var getValue = document.getElementById('blurID').value;
        jsonDetails({
            blueSet: (getValue / 5),
            opacitySet: detailState.opacitySet,
            barderRadius: detailState.barderRadius
        })
    }

    function borderRadiusnChange() {
        var getValue = document.getElementById('radiusID').value;
        jsonDetails({
            barderRadius: (getValue / 5),
            opacitySet: detailState.opacitySet,
            blueSet: detailState.blueSet
        })
    }
    function copyDivToClipboard(codeBoard, copybtn) {
        var range = document.createRange();
        range.selectNode(document.getElementById(codeBoard));
        window.getSelection().removeAllRanges(); // clear current selection
        window.getSelection().addRange(range); // to select text
        document.execCommand("copy");
        window.getSelection().removeAllRanges();// to deselect
        var btn = document.getElementById(copybtn)
        if (btn.innerText == 'Copy') {
            btn.innerText = 'Copied'
        }
        else {
            btn.innerText = 'Copy'
        }
    }

    function functionSec(e) {
        try {
            const color = e.target.value
            const r = parseInt(color.substr(1, 2), 16)
            const g = parseInt(color.substr(3, 2), 16)
            const b = parseInt(color.substr(5, 2), 16)
            setPickedColor(r + "," + g + "," + b);
        } catch (e) {
            // error object 
            console.log()
        }

    }



    const userImage = (e) => {

        setTimeout(() => {

            if (e.target.value != undefined) {
                SetUserImage(e.target.value)
                console.log(userImageState, "that is user image ");
            }
        }, 3000)


    }






    return (
        <>
          <Banner1/>
            <div className="grid mb-10 lg:grid-cols-2  md:grid-cols-2 grid-cols-1 ">
                <div className="grid">
                    <div className="m-auto">
                        <section style={userImageState != false && userImageState != null && userImageState != '' ? { backgroundImage: `url(${userImageState})`, backgroundPosition: "center", backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat", padding: "20px" } : { backgroundImage: "url(https://media.istockphoto.com/photos/abstract-wavy-object-picture-id1198271727?b=1&k=20&m=1198271727&s=170667a&w=0&h=b626WM5c-lq9g_yGyD0vgufb4LQRX9UgYNWPaNUVses=)", backgroundPosition: "center", backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat", padding: "20px" }}>
                            <div style={{ margin: "10px", background: `rgba( ${pickedColor != undefined && pickedColor != null && pickedColor != '' ? pickedColor : `237,232,232`}, ${detailState.opacitySet} )`, backdropFilter: `blur(${detailState.blueSet}px)`, borderRadius: `${detailState.barderRadius}px` }}>
                                {/* first section  */}
                                {
                                    Array(4).fill().map((_, i) => (
                                        <div  key={i}className="grid grid-cols-8 py-2" style={{ borderBottom: "1px solid #ffffff45 ", overflow: "hidden" }}>
                                            <div className="col-span-2">
                                                <div className="grid">
                                                    <img className="m-auto w-[50px] h-[50px] bg-white p-1 rounded-full " src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QCuRXhpZgAATU0AKgAAAAgABQESAAMAAAABAAEAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgExAAIAAAAhAAAAWodpAAQAAAABAAAAfAAAAAAAAABIAAAAAQAAAEgAAAABQWRvYmUgUGhvdG9zaG9wIDIxLjAgKE1hY2ludG9zaCkAAAADoAEAAwAAAAEAAQAAoAIABAAAAAEAAABAoAMABAAAAAEAAABAAAAAAP/hC1lodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDYuMC4wIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDM4NzEyOTk1NEU1MTFFQkE5NUFBNDNDN0ExMTE5QUMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDM4NzEyOTg1NEU1MTFFQkE5NUFBNDNDN0ExMTE5QUMiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo3NTAxMDgwNDEyMTAxMUVBOTNGNUU1NkMyNEY0RUY2MCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMCAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjUzZDhlNGZmLWRkMDctNDQxZC04ZDlhLTRhNjcxYmI5OGMzNyIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjY5ZWQxZGVkLTZmNzYtNWM0MS1iZGIwLWU0OWNkMjVjYzhlMyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8P3hwYWNrZXQgZW5kPSJ3Ij8+AP/tADhQaG90b3Nob3AgMy4wADhCSU0EBAAAAAAAADhCSU0EJQAAAAAAENQdjNmPALIE6YAJmOz4Qn7/wAARCABAAEADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn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"  alt="loading..."  />
                                                </div>
                                            </div>
                                            <div className="col-span-4 grid ">
                                                <div className="m-auto">
                                                    <p className="text-sm font-semibold">Lorem ipsum how are </p>
                                                    <p className="text-xs font-semibold">🟡  Online</p>
                                                </div>
                                            </div>
                                            <div className="col-span-2  grid ">
                                                <div className="m-auto">
                                                    <button className="bg-blue-500 shadow-lg shadow-blue-500/50 px-4 py-2 rounded text-base text-white" ><FaRocketchat /></button>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                                {/* first desgin has been finished  */}

                            </div>
                        </section>
                    </div>
                </div>
                <div className="grid">
                    <div className="m-auto">
                        <section>
                            <input type="color" onChange={(e) => functionSec(e)} />


                            <input type="url" onChange={(e) => userImage(e)} placeholder="imh-url" />
                            <div>
                                <lable htmlFor="opacity" className="lg:text-sm md:text-sm  text-xs">Opacity </lable>
                                <br />
                                <div className="slidecontainer">
                                    <input onChange={opacityChange} className="slider" value={detailState.opacitySet * 100} type="range" name="opacity" min={1} max={100} id="opacityID" />
                                </div>
                            </div>
                            <div>
                                <lable htmlFor="blur " className="lg:text-sm md:text-sm  text-xs">Blur </lable>
                                <br />
                                <div className="slidecontainer">
                                    <input onChange={blurChange} className="slider" type="range" name="blur" min={1} max={100} id="blurID" />
                                </div>
                            </div>
                            <div>
                                <lable htmlFor="radius" className="lg:text-sm md:text-sm  text-xs">Border Radius </lable>
                                <br />
                                <div className="slidecontainer">
                                    <input onChange={borderRadiusnChange} type="range" className='slider' name="radius" min={1} max={100} id="radiusID" />

                                </div>
                            </div>
                        </section>
                        <code style={{ background: "black", color: "white", width: "300px", padding: "10px", fontSize: "13px" }} id="codeBoard1">
                            background: rgba( {`${pickedColor ? pickedColor : "228,226,226"}`}, {`${detailState.opacitySet}`} );
                            backdrop-filter: blur({`${detailState.blueSet}`}px);
                            border-radius:{`${detailState.barderRadius}px`}
                        </code>
                        <button className='bg-blue-500 shadow-lg shadow-blue-500/50 px-4 py-2 rounded text-base text-white' style={{ width: "100%", border: "1px solid  balck" }} onClick={() => copyDivToClipboard('codeBoard1', 'copybtn1')} id="copybtn1">Copy</button>
                    </div>
                </div>
            </div>

        </>
    )
}
