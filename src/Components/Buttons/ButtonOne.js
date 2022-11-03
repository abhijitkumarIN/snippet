import React from "react";
import Button from "../JsonData/Button";
import Banner1 from "./../Banners/Banner1";
import { toast } from "react-toastify";

export default function ButtonOne() {
    function copyDivToClipboard(codeBoard) {
        var copyText = document.getElementById(codeBoard);
        navigator.clipboard
            .writeText(copyText.value)
            .then((done) => {
                toast.success("Copied !");
            })
            .catch((err) => {
                toast.error("Oops Something has been gone wrong  !");
            });
    }
    const props = {
        img: "https://images.pexels.com/photos/886521/pexels-photo-886521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        titleOne: "Elevate",
        titleTwo: "your",
        titleThird: "productivity",
        articles:
            "Get beautiful css snippet of various Components soon you'll be able to find out here input box css , color plates , box shadow and Glassmorphism generator so",
        suggestion: "Ctrl+D 🟡",
    };

    return (
        <div>
            <Banner1 {...props} />
            <div className="lg:px-5 md:px-3 px-2 py-8 grid lg:grid-cols-6 md:grid-cols-6 grid-cols-2 gap-5">
               {Button
                    ? Button.map((btnData, index) => (
                          <div key={index} className="grid ">
                              <div className="m-auto">
                                  <button
                                      onClick={() =>
                                          copyDivToClipboard(btnData.id)
                                      }
                                      className={
                                          btnData.clsNm ? btnData.clsNm : ""
                                      }
                                  >
                                      {btnData.btnInnerText
                                          ? btnData.btnInnerText
                                          : ""}
                                  </button>
                                  <input
                                      type="hidden"
                                      value={btnData.styleCode}
                                      id={btnData.id}
                                  />
                              </div>
                          </div>
                      ))
                    : ""}
            </div>
        </div>
    );
}
