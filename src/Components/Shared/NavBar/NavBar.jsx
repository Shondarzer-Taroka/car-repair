import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
const NavBar = () => {

    const links = [
        {
            path: '/',
            title: 'Home'
        },
        {
            path: '/about',
            title: 'About'
        },
        {
            path: '/services',
            title: 'Services'
        },
        {
            path: '/blog',
            title: 'Blog'
        },
        {
            path: '/contact',
            title: 'Contact'
        }
    ]
    return (
        <div className=' bg-base-100 '>
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {
                                links.map(link => <Link key={link.path} href={link.path}> <li> {link.title}</li></Link>)
                            }
                        </ul>
                    </div>
                    <Link href={'/'} className="btn btn-ghost text-xl">
                        <Image src={'/assets/logo.svg'} alt='logo' width={60} height={50} />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <div className="menu menu-horizontal px-1 gap-2">
                        {
                            links.map(link => <Link  key={link.path} href={link.path}> <li className='hover:text-red-500 duration-75 font-semibold'> {link.title}</li></Link>)
                        }
                    </div>
                </div>
                <div className="navbar-end">
                    <div className='flex gap-2 items-center'>
                    <FaShoppingCart className='text-2xl'   />
                    <IoSearch className='text-2xl' />
                    <a className="btn btn-outline hover:bg-red-500">Appointment</a>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default NavBar;