'use client'
import { useState, useEffect, useCallback } from 'react'
import { IconMenu2, IconX } from '@tabler/icons-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function Navbar() {
  const pathname = usePathname()
  const [scrollPosition, setScrollPosition] = useState(0)

  const handleScroll = useCallback(() => {
    const position = window.pageYOffset
    setScrollPosition(position)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  return (
    // <div className={scrollPosition > 150 ? 'navbar active' : 'navbar'}>
    <div
      className={`${
        scrollPosition > 150 && 'fixed top-0 bg-[#644222]'
      } absolute bg-black/40 text-white py-3 transition-all duration-300 ease-in-out inset-x-0 flex flex-wrap z-50 w-full`}
    >
      <div className="w-full flex items-center justify-between px-24">
        <Link href="/" className="text-center">
          <h2 className="text-xl font-bold">TashkentHotel</h2>
          <span>LUXURY HOTEL</span>
        </Link>
        <ul className="flex items-center gap-5 text-lg font-bold">
          <li>
            <Link href="/" className={pathname === '/' ? 'underline' : ''}>
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/rooms"
              className={pathname.endsWith('/rooms') ? 'underline' : ''}
            >
              Our Rooms
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={pathname.endsWith('/about') ? 'underline' : ''}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={pathname.endsWith('/contact') ? 'underline' : ''}
            >
              Contact
            </Link>
          </li>
        </ul>
        <Link href="/book-now" className="bg-[#9a7a5c] text-lg py-4 px-7">
          Book Now
        </Link>
        {/* <div className="menu">
          <IconMenu2 className="icon" onClick={() => setIsMenuClick(true)} />
        </div> */}
      </div>
    </div>
  )
}

export default Navbar
