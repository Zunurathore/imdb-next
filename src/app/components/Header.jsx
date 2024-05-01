import React from 'react';
import Menuitem from './Menuitem';
import { IoIosHome } from "react-icons/io";
import { IoIosInformationCircle } from "react-icons/io";
import Link from 'next/link';

export default function Header() {
  return (
    <div className='flex justify-between items-center p-3 max-w-6xl mx-auto'>
        <div className="flex gap-4">
            <Menuitem title="home" address="/" Icon={IoIosHome} />
            <Menuitem title="about" address="/about" Icon={IoIosInformationCircle} />
        </div>
        <Link href={"/"} className="flex gap-2 items-center">
            <span className="text-2xl font-bold bg-amber-500 px-2 rounded-lg">IMDb</span>
            <span className="text-xl hidden sm:inline">Clone</span>
        </Link>
    </div>
  )
}
