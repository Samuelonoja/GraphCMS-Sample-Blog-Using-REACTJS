import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    const [profileView] = useState("none")
    const [menuView, setMenuView] = useState("none")
    const [confirmer, setConfirmer] = useState(false)

    const viewMenu = () => {
        if (confirmer === false) {
            setMenuView("block")
            setConfirmer(true)
        } else if (confirmer !== false) {
            setMenuView("none")
            setConfirmer(false)
        }
    }
    console.log(profileView)
    return (
        <nav className="bg-gray-800">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out" aria-label="Main menu" aria-expanded="false" onClick={viewMenu}>
                            <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-center">
                        <div className="flex-shrink-0">
                            <Link to="/"><img className="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-on-dark.svg" alt="Workflow logo" /></Link>
                            <Link to="/"><img className="hidden lg:block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-on-dark.svg" alt="Workflow logo" /></Link>
                        </div>
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex">
                                <span href="#f" className="px-3 py-2 rounded-md text-sm font-medium leading-5 text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"><Link to="/">HOME</Link></span>
                                <span className="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"><Link to="/fashion">FASHION</Link></span>
                                <span className="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"><Link to="/news">NEWS</Link></span>
                                <span className="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"><Link to="/culture">CULTURE</Link></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden sm:hidden" style={{ display: menuView }}>
                <div className="px-2 pt-2 pb-3">
                    <span className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"><Link to="/">HOME</Link></span>
                    <span className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"><Link to="/fashion">FASHION</Link></span>
                    <span className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"><Link to="/news">NEWS</Link></span>
                    <span className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"><Link to="/culture">CULTURE</Link></span>
                </div>
            </div>
        </nav>
    )
}

export default Nav
