'use client';
import Link from "next/link"
import { useParams } from 'next/navigation'
import { Crown, Clapperboard, Popcorn, FlameIcon, AlignJustify, X } from "lucide-react";
import { ICommandProps } from "@/type/header";
import { useEffect, useState } from "react";
import { motion } from "framer-motion"

const Navbar = () => {

    const params = useParams()
    const [hash, setHash] = useState('');

    useEffect(() => {
        const currentHash = window.location.hash;
        setHash(currentHash)
    }, [params]);
    
    const categories:ICommandProps["categories"] = [
        { id:1, value: "#trending", label: "Trending", icon: FlameIcon, color:'red' },
        { id:2, value: "#now-playing", label: "Now Playing", icon: Popcorn, color:'yellow'},
        { id:3, value: "#top-rated", label: "Top Rated", icon: Crown, color:'yellow'},
    ];

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const handleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    }

    return (
        <nav className="py-4 flex justify-between items-center bg-slate-600 fixed w-full z-10 mb-32 shadow-xl">
            <Link href='/' className="px-5 md:px-12">
                <Clapperboard/>
            </Link>
            
            {/* pc menu start */}
            <div className="hidden sm:flex justify-between space-x-10 px-5 2xl:px-16 text-sm">
                {
                    categories.map(category=>(
                       
                        <Link key={category.id} 
                                href={category.value} 
                                className={`link ${hash === category.value ? 'active ' : ''} `}>
                                <motion.span 
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className={`categories-link`}>
                                        {category.label}
                                        <category.icon fill={`${hash === category.value ? category.color : 'transparent'} `} className="px-1"/>
                                </motion.span>
                        </Link>
                    ))
                }
            </div>
            {/* pc menu end */}


            {/* mobile menu start */}
            <div className="sm:hidden mx-5 cursor-pointer" onClick={handleMobileMenu}>
                <AlignJustify />
            </div>
            <div className={
                 `fixed top-0 p-10 bg-box ease-in duration-500 h-screen
                    ${mobileMenuOpen ?
                    'left-0  w-[65%] sm:hidden'
                    : 'left-[-100%]'} `
            }>
                <div className="flex w-full items-center justify-end">
                    <div onClick={handleMobileMenu} className="cursor-pointer">
                        <X />
                    </div>
                </div>
                <div className="flex-col ">
                    {
                        categories.map(category=>(
                        
                            <Link key={category.id} 
                                    href={category.value} 
                                    >
                                    <motion.span 
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="categories-link py-5"
                                        onClick={()=>setMobileMenuOpen(false)}>
                                            {category.label}
                                            <category.icon fill={`${hash === category.value ? category.color : 'transparent'} `} className="px-1"/>
                                    </motion.span>
                            </Link>
                        ))
                    }
                </div>
            </div>
            {/* mobile menu end */}
        </nav>
    )
}

export default Navbar