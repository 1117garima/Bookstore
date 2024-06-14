'use client'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const ParallexHeader = ({ title, pathname }) => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start']
    })

    const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

    return (
        <div>
            {/* HEADER */}

            <div
                className='mb-[80px]   h-[40vh] overflow-y-scroll  bg-cover bg-fixed'
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                    overflow: 'hidden'
                }}
            >
                {/* TITLES */}
                <div className='pt-[70px]'>
                    {/* PAGENAME */}
                    <h1 className='text-center text-[35px]  font-bold text-[#484848] lg:text-[50px] '>{title}</h1>

                    {/* PAGEPATH */}

                    <div className='flex justify-center '>
                        <div className='inline-block bg-[#82b440] px-[4px] py-[4px]  text-sm text-white '>
                            <span>
                                <Link href='/'>Home</Link> &gt; {pathname}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ParallexHeader
