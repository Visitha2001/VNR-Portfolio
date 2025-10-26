import Image from "next/image"
import Link from "next/link"
import { DropDowm } from "./DropDowm"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
]

const Header = () => {
  return (
    <header className="bg-transparent m-2 sticky top-2">
      <div className="container mx-auto flex items-center justify-between px-6 bg-gray-900/50 backdrop-blur-sm rounded-full">
        <div className="flex items-center w-auto h-20 object-contain">
          <Link href="/" className="text-white hover:text-blue-400 transition-all cursor-pointer">
            <Image src="/no-bg.png" alt="Logo" width={150} height={100} />
          </Link>
        </div>
        <div className="hidden sm:block"> 
          <ul className="flex items-center gap-5 font-medium">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="text-white hover:text-blue-300 transition-all cursor-pointer">{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden lg:block">
          <Button variant="outline" className="px-4 py-2 bg-white hover:bg-blue-400 border-0 text-black rounded-full transition-all" >
            Get in touch
          </Button>
        </div>
        <div className="block sm:hidden">
          <DropDowm navLinks={navLinks} />
        </div>
      </div>
    </header>
  )
}

export default Header