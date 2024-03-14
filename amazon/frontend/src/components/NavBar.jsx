import React from 'react'
import Logo from '../uploads/amazon.png'
import { Navbar, Typography, IconButton, Input } from "@material-tailwind/react";
import { FaSearch } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";

const NavBar = () => {
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    const navList = (
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography as="li" className="text-xs">
                <a href="/" className=""><span className='flex'>Hello Guest</span> <span className='text-sm font-bold'>Sign in</span></a>
            </Typography>
            <Typography as="li" variant="small" className="text-xs">
                <a href="/" className=""><span className='flex'>Returns</span> <span className='text-sm font-bold'>& Orders</span></a>
            </Typography>
            <Typography as="li" variant="small" className="text-xs">
                <a href="/" className=""><span className='flex'>Your</span> <span className='text-sm font-bold'>Prime</span></a>
            </Typography>
            <Typography as="li" variant="small" className="">
                <a href="/" className="flex items-center"><GiShoppingBag className='w-10 h-8' /> <span className='text-lg pl-2'>0</span></a>
            </Typography>
        </ul>
    );

    return (
        <Navbar className=" mx-auto px-4 bg-blue-10 lg:px-8">
            <div className="container mx-auto flex flex-wrap items-center justify-between text-white py-2">
                <Typography as="a" href="/" className="mr-4 cursor-pointer font-medium mt-1"><img src={Logo} alt='logo amzon' width='100px' height='auto' /></Typography>
                <div className="hidden  items-center gap-x-3 lg:flex">
                    <div className="relative flex items-center md:w-max">
                        <Input type="search" containerProps={{ className: "min-w-[750px]", }} className="w-full h-8 p-3" />
                        <div className='bg-orange-500 p-2'><FaSearch className='flex items-center mx-1' color='dark' /></div>
                    </div>
                    <div className="hidden lg:block">{navList}</div>
                </div>
                <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            className="h-6 w-6"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </IconButton>
            </div>
        </Navbar>
    );
}

export default NavBar
