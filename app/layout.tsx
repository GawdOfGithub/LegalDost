import './globals.css'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <div className="navbar bg-neutral text-primary-content">
        <div className="navbar-start">
          <div className="dropdown relative">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a
                  className="block px-4 py-2 text-base font-semibold text-gray-500 hover:bg-gray-200"
                  href="#"
                >
                  Homepage
                </a>
              </li>
              <li className="relative group">
                <a
                
                  className="block px-4 py-2 text-base font-semibold text-gray-500 hover:bg-gray-200"
                  href="#"
                >
                  HireNow
                </a>
                {/* Submenu */}
               
                <ul className="p-2 absolute hidden top-full left-0 z-10 bg-base-100 rounded-box w-52 group-hover:block">
                  <li>
                    <a
                      className="block px-4 py-2 text-base font-semibold text-gray-500 hover:bg-gray-200"
                      href="#"
                    >
                      Lawyers
                    </a>
                  </li>
                  <li>
                    <a
                      className="block px-4 py-2 text-base font-semibold text-gray-500 hover:bg-gray-200"
                      href="#"
                    >
                      Notaries
                    </a>
                  </li>
                  <li>
                    <a
                      className="block px-4 py-2 text-base font-semibold text-gray-500 hover:bg-gray-200"
                      href="#"
                    >
                      Advocates
                    </a>
                  </li>
                  <li>
                    <a
                      className="block px-4 py-2 text-base font-semibold text-gray-500 hover:bg-gray-200"
                      href="#"
                    >
                      Arbitrators
                    </a>
                  </li>
                  <li>
                    <a
                      className="block px-4 py-2 text-base font-semibold text-gray-500 hover:bg-gray-200"
                      href="#"
                    >
                      Mediators
                    </a>
                  </li>
                  <li>
                    <a
                      className="block px-4 py-2 text-base font-semibold text-gray-500 hover:bg-gray-200"
                      href="#"
                    >
                      Document Writers
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                
              <Link
                className="block px-4 py-2 text-base font-semibold text-gray-500 hover:bg-gray-200"
                href="/about"
              >
                About us 
              </Link>
              </li>
            </ul>
          </div>
        
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a
                className="block px-4 py-2 text-base font-bold text-gray-500 hover:bg-gray-200"
                href="#item1"
              >
                Homepage
              </a>
            </li>
            <li className="relative group">
              <a
                className="block px-4 py-2 text-base font-bold text-gray-500 hover:bg-gray-200"
                href="#parent"
              >
                HireNow
              </a>
              {/* Submenu */}
              <ul className="p-2 absolute hidden top-full left-0 z-10 bg-base-100 rounded-box w-52 group-hover:block">
                <li>
                  <a
                    className="block px-4 py-2 text-base font-bold text-gray-500 hover:bg-gray-200"
                    href="#submenu1"
                  >
                    Lawyers
                  </a>
                </li>
                <li>
                  <a
                    className="block px-4 py-2 text-base font-semibold text-gray-500 hover:bg-gray-200"
                    href="#submenu2"
                  >
                    Notaries
                  </a>
                </li>
                <li>
                  <a
                    className="block px-4 py-2 text-base font-semibold text-gray-500 hover:bg-gray-200"
                    href="#submenu3"
                  >
                    Advocates
                  </a>
                </li>
                <li>
                  <a
                    className="block px-4 py-2 text-base font-semibold text-gray-500 hover:bg-gray-200"
                    href="#submenu4"
                  >
                    Arbitrators
                  </a>
                </li>
                <li>
                  <a
                    className="block px-4 py-2 text-base font-semibold text-gray-500 hover:bg-gray-200"
                    href="#submenu5"
                  >
                    Mediators
                  </a>
                </li>
                <li>
                  <a
                    className="block px-4 py-2 text-base font-semibold text-gray-500 hover:bg-gray-200"
                    href="#submenu6"
                  >
                    Document Writers
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <Link
                className="block px-4 py-2 text-base font-semibold text-gray-500 hover:bg-gray-200"
                href="/about"
              >
                About us 
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end"></div>
      </div>
        {children}</body>
    </html>
  )
}
