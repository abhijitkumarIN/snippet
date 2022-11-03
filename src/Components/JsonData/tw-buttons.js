const buttons = [
    // button class that offers a gradient background
    () => {
        const className =
            "bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-600 hover:to-blue-400 text-white font-bold py-2 px-4 rounded";
        return className;
    },
    // button class that is raised and has a shadow
    () => {
        const className =
            "shadow-lg bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded";
        return className;
    },
    // button class that has bottom and right dark borders which give it a 3D effect
    () => {
        const className =
            "bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border-b-4 border-r-4 border-gray-400 rounded";
        return className;
    },
    // button class that has bottom and right dark borders which give it a 3D effect and border is removed on active
    () => {
        const className =
            "bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border-b-4 border-r-4 border-gray-400 rounded active:border-transparent";
        return className;
    },
    // button class for basic success button
    () => {
        const className =
            "bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded";
        return className;
    },
    // button class that has bottom and right dark borders which give it a 3D effect and border is removed on active and offset the transform x and y on active
    () => {
        const className =
            "bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border-b-4 border-r-4 border-gray-400 rounded active:border-transparent active:translate-x-1 active:translate-y-1";
        return className;
    },
    // the above button but with a shadow
    () => {
        const className =
            "shadow-lg bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border-b-4 border-r-4 border-gray-400 rounded active:border-transparent active:translate-x-1 active:translate-y-1";
        return className;
    },
    // the button above the button above but rainbow
    () => {
        const className =
            "shadow-lg bg-gradient-to-r from-red-400 to-yellow-500 hover:from-yellow-500 hover:to-red-400 text-white font-bold py-2 px-4 rounded active:translate-x-1 active:translate-y-1";
        return className;
    },
];

export default buttons;
