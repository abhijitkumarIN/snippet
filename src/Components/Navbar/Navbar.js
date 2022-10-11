import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {


  const navlink = [
    {
      name: 'Buttons',
      link: '/'
    },
    {
      name: 'Shadow',
      link: '/shadow'
    },
    {
      name: 'Input Box',
      link: '/inputs'
    },
    {
      name: 'Glassmorphism',
      link: '/glassmorphism'
    }
  ]
  return (
    <>
      <div className="bg-[#030b20ce] py-2 px-1">
        <div className="grid grid-cols-12">
          <div className="col-span-2">🟡</div>
          <div className="lg:col-span-6 md:col-span-6 col-span-9">
            <div className="grid grid-cols-4">
              { navlink?
                navlink.map((item, index, arr) => (
                  <div className=" md:text-sm lg:text-sm text-xs mx-1 text-center" key={index}><NavLink to={item.link} className={({isActive})=> isActive?'text-white font-semibold underline' :''}>{item.name}</NavLink></div>
                ))
                :''
              }
            </div>
          </div>
          <div className="lg:col-span-4 md:col-span-4 col-span-2"></div>
        </div>
      </div>


    </>
  );
}
export default Navbar