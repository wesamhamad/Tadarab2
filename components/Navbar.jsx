import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('white');

  const handleNav = () => {
    setNav(!nav);
    if (window.scrollY >= 90) {
      setColor(nav ? 'transparent' : '#000000');
    }
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor('#ffffff');
        setTextColor('#000000');
      } else {
        setColor('transparent');
        setTextColor('#ffffff');
      }
    };

    // Call the function initially to set the initial background color
    changeColor();

    window.addEventListener('scroll', changeColor);

    return () => {
      window.removeEventListener('scroll', changeColor);
    };
  }, []);

  return (
    <div
      style={{ backgroundColor: color }}
      className='fixed left-0 top-0 w-full z-10 ease-in duration-300 text-right'
    >
      <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-white flex-row-reverse'>
        <Link href='/'>
          <img
            src="/logo.png"
            alt="logo"
            className="w-36 h-auto text-xs font-bold"
          />
        </Link>
        {/* Mobile Button */}
        <div onClick={handleNav} className='block sm:hidden z-10'>
          {nav ? (
            <AiOutlineClose size={20} style={{ color: textColor }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: textColor }} />
          )}
        </div>
        {/* Desktop Menu */}
        <ul className='hidden sm:flex' style={{ color: textColor }}>
          <li className='p-4 text-2xl hover:bg-transparent hover:text-gray-400 transition duration-300'>
            <Link href='/contact'>اتصل بنا</Link>
          </li>
          <li className='p-4 text-2xl hover:bg-transparent hover:text-gray-400 transition duration-300'>
            <Link href='/Internship'>فرص تدريبية</Link>
          </li>
          <li className='p-4 text-2xl hover:bg-transparent hover:text-gray-400 transition duration-300'>
            <Link href='/#aboutUs'>من نحن</Link>
          </li>
          <li className='p-4 text-2xl hover:bg-transparent hover:text-gray-400 transition duration-300'>
            <Link href='/'>الصفحة الرئيسية</Link>

          </li>
        </ul>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
              : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
          }
        >
          <ul>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/'>الصفحة الرئيسية</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/#aboutUs'>من نحن</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/Internship'>فرص تدريبية</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/contact'>اتصل بنا</Link>
            </li>
          </ul>
        </div>
      </div>
    </div >
  );
};

export default Navbar;
