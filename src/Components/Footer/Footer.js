export default function Footer({ footer }) {
    return (
        <div>
            {footer ? (
                <div className="bg-[#030b20ce] flex flex-col gap-2 justify-center align-middle py-4">
                    <div className="flex justify-center">
                        <div className="flex gap-3">
                            {footer.map((data, index) => (
                                <span
                                    key={index}
                                    className="rounded-full bg-white shadow-lg"
                                    style={{ width: "40px", heigth: "40px" }}
                                >
                                    <a
                                        href={data.link}
                                        className="inline w-10 h-10"
                                        key={index}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <img
                                            src={data.icon}
                                            alt={data.alt}
                                            className="w-[38px] h-[38px] rounded-full bg-white p-1 hover:bg-[white]"
                                        />
                                    </a>
                                </span>
                            ))}
                        </div>
                    </div>
                    <div>
                        <div className="text-white tracking-widest just font-sm text-center">
                            <span className="">Developed</span> by{" "}
                            <span className="font-medium">Abhijeet</span>
                        </div>
                    </div>
                </div>
            ) : (
                ""
            )}
        </div>
    );
}
