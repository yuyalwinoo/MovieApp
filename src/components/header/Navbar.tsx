'use client';
import Link from "next/link"
import { useParams } from 'next/navigation'
import { CircleCheck, Clapperboard, Crown, TrendingUp } from "lucide-react";
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
        { id:1, value: "#trendings", label: "Trendings", icon: TrendingUp },
        { id:2, value: "#recommendations", label: "Recommendations", icon: CircleCheck },
        { id:3, value: "#rankings", label: "Rankings", icon: Crown },
    ];

    return (
        <nav className="py-3 flex justify-between items-center bg-box fixed w-full">
            <Link href='/' className="px-5">
                <Clapperboard/>
            </Link>
            
            <div className="flex justify-between space-x-10 px-5 text-sm">
                {
                    categories.map(category=>(
                       
                        <Link key={category.id} 
                                href={category.value} 
                                className={`link ${hash === category.value ? 'active' : ''} `}>
                                <motion.span 
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="categories-link">
                                        {category.label}
                                        <category.icon className="px-1"/>
                                </motion.span>
                        </Link>
                    ))
                }
            </div>
        </nav>
    )
}

export default Navbar