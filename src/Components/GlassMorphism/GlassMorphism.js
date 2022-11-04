import React, { useState } from "react";
import { FaRocketchat } from "react-icons/fa";
import Banner1 from "../Banners/Banner1";
import { toast } from "react-toastify";
export default function GlassMorphism() {
    const [detailState, jsonDetails] = useState({
        opacitySet: 0.2,
        blueSet: 9,
        barderRadius: 0,
    });
    const [pickedColor, setPickedColor] = useState();
    const [userImageState, SetUserImage] = useState(false);
    function opacityChange() {
        var getValue = document.getElementById("opacityID").value;
        jsonDetails({
            opacitySet: getValue / 100,
            blueSet: detailState.blueSet,
            barderRadius: detailState.barderRadius,
        });
    }
    function blurChange() {
        var getValue = document.getElementById("blurID").value;
        jsonDetails({
            blueSet: getValue / 5,
            opacitySet: detailState.opacitySet,
            barderRadius: detailState.barderRadius,
        });
    }

    function borderRadiusnChange() {
        var getValue = document.getElementById("radiusID").value;
        jsonDetails({
            barderRadius: getValue / 5,
            opacitySet: detailState.opacitySet,
            blueSet: detailState.blueSet,
        });
    }
    function copyDivToClipboard(codeBoard, copybtn) {
        var range = document.createRange();
        range.selectNode(document.getElementById(codeBoard));
        window.getSelection().removeAllRanges(); // clear current selection
        window.getSelection().addRange(range); // to select text
        document.execCommand("copy");
        window.getSelection().removeAllRanges(); // to deselect
        toast.success("Copied ");
    }

    function functionSec(e) {
        try {
            const color = e.target.value;
            const r = parseInt(color.substr(1, 2), 16);
            const g = parseInt(color.substr(3, 2), 16);
            const b = parseInt(color.substr(5, 2), 16);
            setPickedColor(r + "," + g + "," + b);
        } catch (e) {
            console.log();
        }
    }

    const userImage = (e) => {
        setTimeout(() => {
            if (e.target.value !== undefined) {
                SetUserImage(e.target.value);
                console.log(userImageState, "===> ");
            }
        }, 3000);
    };
    const props = {
        img: "https://images.pexels.com/photos/12498767/pexels-photo-12498767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        titleOne: "Elevate",
        titleTwo: "your",
        titleThird: "productivity",
        articles:
            "Get beautiful css snippet of various Components soon you 'll be able to find out here input box css , color plates , box shadow and Glassmorphism generator so",
        suggestion: "Ctrl+D 🟡",
    };
    return (
        <React.Fragment>
            <Banner1 {...props} />
            <div className="grid mb-10 lg:grid-cols-2  md:grid-cols-2 grid-cols-1 ">
                <div className="grid mt-4">
                    <div className="m-auto">
                        <section
                            style={
                                userImageState !== false &&
                                userImageState !== null &&
                                userImageState !== ""
                                    ? {
                                          backgroundImage: `url(${userImageState})`,
                                          backgroundSize: "cover",
                                          backgroundRepeat: "no-repeat",
                                          padding: "20px",
                                      }
                                    : {
                                          backgroundImage:
                                              "url(https://media.istockphoto.com/photos/abstract-wavy-object-picture-id1198271727?b=1&k=20&m=1198271727&s=170667a&w=0&h=b626WM5c-lq9g_yGyD0vgufb4LQRX9UgYNWPaNUVses=)",
                                          backgroundPosition: "center",
                                          backgroundSize: "cover",
                                          backgroundRepeat: "no-repeat",
                                          padding: "20px",
                                      }
                            }
                        >
                            <div
                                style={{
                                    margin: "10px",
                                    background: `rgba( ${
                                        pickedColor !== undefined &&
                                        pickedColor !== null &&
                                        pickedColor !== ""
                                            ? pickedColor
                                            : `237,232,232`
                                    }, ${detailState.opacitySet} )`,
                                    backdropFilter: `blur(${detailState.blueSet}px)`,
                                    borderRadius: `${detailState.barderRadius}px`,
                                }}
                            >
                                {Array(4)
                                    .fill()
                                    .map((_, i) => (
                                        <div
                                            key={i}
                                            className="grid grid-cols-8 py-2"
                                            style={{
                                                borderBottom:
                                                    i < 3
                                                        ? "1px solid #ffffff45"
                                                        : "",
                                                overflow: "hidden",
                                            }}
                                        >
                                            <div className="col-span-2">
                                                <div className="grid">
                                                    <img
                                                        className="m-auto w-[50px] h-[50px] bg-white p-1 rounded-full "
                                                        src="https://avatars.githubusercontent.com/u/70304119?v=4"
                                                        alt="loading..."
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-span-4 grid ">
                                                <div className="m-auto">
                                                    <p className="text-sm font-semibold">
                                                        Lorem ipsum how are{" "}
                                                    </p>
                                                    <p className="text-xs font-semibold">
                                                        🟡 Online
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-span-2  grid p-2 ">
                                                <div className="m-auto">
                                                    <button className="bg-blue-500 shadow-lg shadow-blue-500/50 px-4 py-2 rounded text-base text-white">
                                                        <FaRocketchat />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        </section>
                    </div>
                </div>
                <div className="grid lg:p-1 md:p-1 p-2">
                    <div className="m-auto">
                        <section>
                            <input
                                type="color"
                                onChange={(e) => functionSec(e)}
                            />
                            <input
                                type="url"
                                onChange={(e) => userImage(e)}
                                placeholder="Remote Image url"
                            />
                            <div>
                                <label
                                    htmlFor="opacity"
                                    className="lg:text-sm md:text-sm  text-xs"
                                >
                                    Opacity{" "}
                                </label>
                                <br />
                                <div className="slidecontainer">
                                    <input
                                        onChange={opacityChange}
                                        className="slider"
                                        value={detailState.opacitySet * 100}
                                        type="range"
                                        name="opacity"
                                        min={1}
                                        max={100}
                                        id="opacityID"
                                    />
                                </div>
                            </div>
                            <div>
                                <label
                                    htmlFor="blur "
                                    className="lg:text-sm md:text-sm  text-xs"
                                >
                                    Blur{" "}
                                </label>
                                <br />
                                <div className="slidecontainer">
                                    <input
                                        onChange={blurChange}
                                        className="slider"
                                        type="range"
                                        name="blur"
                                        min={1}
                                        max={100}
                                        id="blurID"
                                    />
                                </div>
                            </div>
                            <div>
                                <label
                                    htmlFor="radius"
                                    className="lg:text-sm md:text-sm  text-xs"
                                >
                                    Border Radius{" "}
                                </label>
                                <br />
                                <div className="slidecontainer">
                                    <input
                                        onChange={borderRadiusnChange}
                                        type="range"
                                        className="slider"
                                        name="radius"
                                        min={1}
                                        max={100}
                                        id="radiusID"
                                    />
                                </div>
                            </div>
                        </section>
                        <br />
                        <div className="w-full">
                            <code
                                style={{
                                    background: "black",
                                    color: "white",
                                    width: "300px",
                                    padding: "10px",
                                    fontSize: "13px",
                                }}
                                id="codeBoard1"
                            >
                                background: rgba({" "}
                                {`${pickedColor ? pickedColor : "228,226,226"}`}
                                , {`${detailState.opacitySet}`} );
                                backdrop-filter: blur({`${detailState.blueSet}`}
                                px); border-radius:
                                {`${detailState.barderRadius}px`}
                            </code>
                        </div>
                        <div className="p-2 mt-3">
                            <button
                                className="w-full rounded-sm shadow-lg bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 roundede"
                                onClick={() =>
                                    copyDivToClipboard("codeBoard1", "copybtn1")
                                }
                            >
                                Copy
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
