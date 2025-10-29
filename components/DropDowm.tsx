import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu } from "lucide-react";
import Link from "next/link"

export function DropDowm({navLinks}: {navLinks: {href: string; label: string}[]}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="px-4 py-2 dark bg-gray-800/50 backdrop-blur-sm rounded-full text-white hover:text-blue-400 transition-all">
            <Menu className="w-10 h-10" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-auto dark bg-gray-800/50 backdrop-blur-sm rounded-lg" align="end">
        <DropdownMenuLabel>Visitha N. Rajapaksha</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
            {navLinks.map((link) => (
              <DropdownMenuItem key={link.label}>
                <Link href={link.href} className="text-white hover:text-blue-300 transition-all cursor-pointer">{link.label}</Link>
              </DropdownMenuItem>
            ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
