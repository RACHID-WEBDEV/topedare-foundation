import React, { useState, useEffect } from 'react';

import { Link } from "react-router-dom";
import { Facebook, WhatsApp, Instagram, Twitter2 } from '../../assets/svgsIcons';
import { Logo } from "./Logo"


const Footer = () => {

    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <>
            <footer id="footer" className="p-4 lg:p-10 bg-tdf-bg sm:p-6 ">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Logo />

                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 font-DmSans font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                            <ul className="text-gray-600 space-y-4 dark:text-gray-400">
                                <li >
                                    <Link to="/">
                                        <span className="hover:underline">Home</span>

                                    </Link>
                                </li>
                                <li >
                                    <Link to="/about">
                                        <span className="hover:underline">About Us</span>

                                    </Link>
                                </li>
                                <li >
                                    <Link to="/project">
                                        <span className="hover:underline">Projects</span>

                                    </Link>
                                </li>
                                {/* <li >
                                    <Link to="/project-listing">
                                        <span className="hover:underline">Projects Lists</span>

                                    </Link>
                                </li> */}
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 font-DmSans  font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                            <ul className="text-gray-600 space-y-4 dark:text-gray-400">
                                <li >
                                    <Link to="">
                                        <span className="hover:underline ">Facebook</span>

                                    </Link>
                                </li>
                                <li>
                                    <Link to="">
                                        <span className="hover:underline">Instagram</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="">
                                        <span className="hover:underline">Twitter</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 font-DmSans  font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                            <ul className="text-gray-600 space-y-4 dark:text-gray-400">
                                <li >
                                    <Link to="">
                                        <span className="hover:underline">Privacy Policy</span>

                                    </Link>
                                </li>
                                <li>
                                    <Link to="">
                                        <span className="hover:underline">Terms &amp; Conditions</span>

                                    </Link>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className=" text-gray-600 sm:text-center dark:text-gray-400">© {new Date().getFullYear()} <a href="https://topedare.org/" className="hover:underline">TDF Foundation™</a>. All Rights Reserved- Made with ❤ by
                        <a href="https://roatek.com.ng/" target="_blank" rel="noreferrer" className="text-tdf-blue-500 font-medium underline-hover ml-1">
                            Roatek
                        </a>
                    </span>
                    <div className="flex mt-4 mr-10 space-x-6 sm:justify-center sm:mt-0">
                        <Link to="">
                            <Facebook />
                        </Link>
                        <Link to="">

                            <Instagram />
                        </Link>
                        <Link to="">
                            <Twitter2 />

                        </Link>
                        <Link to="">
                            <WhatsApp />
                        </Link>

                    </div>

                    {
                        isVisible &&
                        <Link onClick={scrollToTop} to='#' id="scroll-top">
                            <svg xmlns="http://www.w3.org/2000/svg" cl width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="text-white"><line x1="12" y1="19" x2="12" y2="5" id="id_101" /><polyline points="5 12 12 5 19 12" id="id_102" /></svg>
                        </Link>
                    }
                </div>
            </footer>
        </>

    )
}

export default Footer