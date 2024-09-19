import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp, FaSkype } from 'react-icons/fa'; // Import React Icons
import { AiOutlineCaretRight } from "react-icons/ai";

function Footer() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <footer className="px-4 divide-y bg-gradient-to-r to-orange-600 from-white  mt-20">
        <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
          <div className="lg:w-1/3">
            <a rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 lg:justify-start">
              <div className="flex items-center justify-center w-12 h-12 rounded-full dark:bg-violet-600">
                <img src="https://i.imgur.com/jbqcnpj.png" alt="logo" className="w-16 h-12" />
              </div>
              <span className="self-center text-2xl font-semibold">ABC Technologies</span>
            </a>
            <p className="mx-10 text-justify mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </p>
          </div>
          <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
            <div className="space-y-3">
              <h3 className="tracking-wide uppercase dark:text-gray-900 text-lg font-bold">Product</h3>
              <ul className="space-y-1">
                <li className="group">
                  <a rel="noopener noreferrer" href="#" className="text-white group-hover:text-blue-600 transition flex gap-2  items-center">
                    <span className='text-black'><AiOutlineCaretRight /></span>Features
                  </a>
                </li>
                <li className="group">
                  <a rel="noopener noreferrer" href="#" className="text-white group-hover:text-blue-600 transition flex gap-2  items-center">
                  <span className='text-black'><AiOutlineCaretRight /></span>Integrations
                  </a>
                </li>
                <li className="group">
                  <a rel="noopener noreferrer" href="#" className="text-white group-hover:text-blue-600 transition flex gap-2  items-center">
                  <span className='text-black'><AiOutlineCaretRight /></span>Pricing
                  </a>
                </li>
                <li className="group">
                  <a rel="noopener noreferrer" href="#" className="text-white group-hover:text-blue-600 transition flex gap-2  items-center">
                  <span className='text-black'><AiOutlineCaretRight /></span> FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="tracking-wide uppercase dark:text-gray-900 text-lg font-bold">Company</h3>
              <ul className="space-y-1">
                <li className="group">
                  <a rel="noopener noreferrer" href="#" className="text-white group-hover:text-blue-600 transition flex gap-2  items-center">
                  <span className='text-black'><AiOutlineCaretRight /></span> Privacy
                  </a>
                </li>
                <li className="group">
                  <a rel="noopener noreferrer" href="#" className="text-white group-hover:text-blue-600 transition flex gap-2  items-center">
                  <span className='text-black'><AiOutlineCaretRight /></span> Terms of Service
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="uppercase dark:text-gray-900 text-lg font-bold">Developers</h3>
              <ul className="space-y-1">
                <li className="group">
                  <a rel="noopener noreferrer" href="#" className="text-white group-hover:text-blue-600 transition flex gap-2  items-center">
                  <span className='text-black'><AiOutlineCaretRight /></span> Public API
                  </a>
                </li>
                <li className="group">
                  <a rel="noopener noreferrer" href="#" className="text-white group-hover:text-blue-600 transition flex gap-2  items-center">
                  <span className='text-black'><AiOutlineCaretRight /></span> Documentation
                  </a>
                </li>
                <li className="group">
                  <a rel="noopener noreferrer" href="#" className="text-white group-hover:text-blue-600 transition flex gap-2  items-center">
                  <span className='text-black'><AiOutlineCaretRight /></span> Guides
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <div className="uppercase dark:text-gray-900 text-lg font-bold">Social Media</div>
              <div className="flex justify-start space-x-3">
                <a rel="noopener noreferrer" href="#" className="text-white hover:text-blue-600 transition ">
                  <FaFacebookF className="w-5 h-5" />
                </a>
                <a rel="noopener noreferrer" href="#" className="text-white hover:text-blue-600 transition">
                  <FaTwitter className="w-5 h-5" />
                </a>
                <a rel="noopener noreferrer" href="#" className="text-white hover:text-blue-600 transition">
                  <FaInstagram className="w-5 h-5" />
                </a>
                <a rel="noopener noreferrer" href="#" className="text-white hover:text-blue-600 transition">
                  <FaWhatsapp className="w-5 h-5" />
                </a>
                <a rel="noopener noreferrer" href="#" className="text-white hover:text-blue-600 transition">
                  <FaSkype className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="py-6 text-sm text-center dark:text-gray-600">© 1968 Company Co. All rights reserved.</div>
      </footer>
    </div>
  );
}

export default Footer;
