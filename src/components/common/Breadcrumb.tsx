'use client'
import Link from 'next/link'

import React from 'react'

type BreadCrubmbLink = {
    title: string
    link: string
}
export default function Breadcrumb({ links, title }: { links?: BreadCrubmbLink[]; title?: string }) {
    const lastElement = links?.slice(-1)

    return (
        <>
            <div
                style={{
                    backgroundImage:
                        // "url('https://ooty-theme.myshopify.com/cdn/shop/files/breadcrumb_bg_image_1.jpg?v=1620193526')"
                        "url('https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
                }}
                className='grid items-center justify-center bg-cover bg-center bg-no-repeat py-[75px] align-middle'
            >
                <div className='grid items-center justify-center text-center align-middle'>
                    <p className='breadcrumb-header'>{lastElement ? lastElement[0].title : title}</p>
                    <p className='breadcrumb-title text-center'>
                        <Link href={'/'} className='cursor-pointer hover:underline'>
                            Home
                        </Link>
                        {links?.map((el, index) => {
                            el.title = el.title.replaceAll('-', ' ').toLowerCase()
                            return (
                                <span className='' key={index}>
                                    <span>&nbsp;/&nbsp;</span>
                                    {index == links.length - 1 ? (
                                        <span className='capitalize'>{el.title}</span>
                                    ) : (
                                        <Link className='capitalize hover:underline' href={`${el.link.toLowerCase()}`}>
                                            {el.title}
                                        </Link>
                                    )}
                                </span>
                            )
                        })}
                    </p>
                </div>
            </div>
        </>
    )
}
