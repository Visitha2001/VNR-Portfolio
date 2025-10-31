"use client";

import Image from "next/image";
import Link from "next/link";
import { DropDowm } from "./DropDowm";
import { Github, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa6";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
];

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <header className="bg-transparent sticky top-2 z-40">
        <div className="p-2">
          <div className="container mx-auto flex items-center justify-between px-6 bg-gray-900/50 backdrop-blur-sm rounded-full">
            <div className="flex items-center w-auto h-20 object-contain">
              <Link href="/" className="text-white hover:text-blue-400 transition-all cursor-pointer">
                <Image src="/no-bg.png" alt="Logo" width={150} height={100} />
              </Link>
            </div>
            <div className="hidden sm:block">
              <ul className="flex items-center gap-8 font-medium">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="
                        text-white 
                        hover:text-blue-300 
                        cursor-pointer 
                        relative 
                        after:content-[''] 
                        after:absolute 
                        after:left-1/2           
                        after:-translate-x-1/2   
                        after:bottom-[-6px] 
                        after:w-1/2              
                        after:h-[3px] 
                        after:bg-blue-300 
                        after:scale-x-0 
                        after:origin-center 
                        after:transition-transform 
                        after:duration-300 
                        hover:after:scale-x-100
                    "
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="hidden lg:block">
              <a href="https://github.com/Visitha2001/" target="_blank" rel="noreferrer" 
                className="px-4 py-2 bg-white border-0 text-black rounded-full transition-all flex items-center gap-2 
                bg-gradient-to-r from-blue-400 to-transparent hover:bg-gradient-to-r from-blue-400 to-transparent" 
              >
                <Github />
                <span className="font-bold">
                  Get in touch
                </span>
              </a>
            </div>
            <div className="visible sm:hidden">
              <DropDowm navLinks={navLinks} />
            </div>
          </div>
        </div>
      </header>

      {isVisible && (
        <div className="flex">
          <Link
            href="https://wa.me/qr/MYI3VWZYIAECG1"
            target="_blank"
            className="fixed bottom-20 right-6 bg-green-400 hover:bg-green-500 text-black p-3 rounded-full shadow-lg transition-opacity duration-300 z-50 font-bold"
          >
            <FaWhatsapp size={25} />
          </Link>
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 bg-blue-400 hover:bg-blue-500 text-black p-3 rounded-full shadow-lg transition-opacity duration-300 z-50 font-bold"
          >
            <ArrowUp size={25} />
          </button>
        </div>
      )}
    </>
  );
};

export default Header;