import Banner1 from "../Banners/Banner1";
import { toast } from "react-toastify";
import buttons from "../JsonData/tw-buttons";

function TailwindButtons() {
    const props = {
        img: "https://images.pexels.com/photos/886521/pexels-photo-886521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        titleOne: "Elevate",
        titleTwo: "your",
        titleThird: "productivity",
        articles:
            "Get beautiful css snippet of various Components soon you'll be able to find out here input box css , color plates , box shadow and Glassmorphism generator so",
        suggestion: "Ctrl+D 🟡",
    };

    function copyToClipboard(class_names) {
        navigator.clipboard
            .writeText(class_names)
            .then(() => {
                toast.success("Copied!");
            })
            .catch((err) => {
                toast.error("Oops Something has been gone wrong  ! " + err);
            });
    }

    return (
        <div>
            <Banner1 {...props} />
            <div className="lg:px-5 md:px-3 px-2 py-8 grid lg:grid-cols-6 md:grid-cols-6 grid-cols-2 gap-10">
            
                {buttons.map((btn, index) => (
                    <button
                        key={index}
                        onClick={() => copyToClipboard(btn())}
                        className={btn()}
                    >
                        Copy Classes
                    </button>
                ))}
            </div>
        </div>
    );
}

export default TailwindButtons;
