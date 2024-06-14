'use client'

import { useState } from 'react'
const ProductDescription = () => {
    const [status, setStatus] = useState(false)
    return (
        <div className='text-[14px] text-[#666]'>
            {/* REVIEWS & DESCRIPTION */}
            <div className='flex gap-3 '>
                {status ? (
                    <p className='relative top-[1px] z-40 border-[1px] border-t-[3px]  border-[#dbdbdb] border-b-white border-t-[#77b748] p-[15px]  '>
                        Description
                    </p>
                ) : (
                    <p
                        className="relative cursor-pointer border-[1px] border-b-0 border-[#dbdbdb]   p-[15px]  after:absolute after:left-0 after:top-0 after:h-[3px] after:w-0 after:bg-[#77b748] after:duration-500 after:content-[''] hover:after:w-full"
                        onClick={() => setStatus(!status)}
                    >
                        Description
                    </p>
                )}

                {status ? (
                    <p
                        className="relative cursor-pointer border-[1px] border-b-[0px]  border-[#dbdbdb]  p-[15px]  after:absolute after:left-0 after:top-0 after:h-[3px] after:w-0 after:bg-[#77b748] after:duration-500 after:content-[''] hover:after:w-full"
                        onClick={() => setStatus(!status)}
                    >
                        Review
                    </p>
                ) : (
                    <p className='relative top-[1px] border-[1px] border-t-[3px] border-[#dbdbdb] border-b-white border-t-[#77b748] p-[15px]  '>
                        Review
                    </p>
                )}
            </div>

            {/* DESCRIPTON BODY */}
            <div className='flex flex-col gap-6 border-[1px] border-[#dbdbdb] p-[35px] text-[14px]'>
                <div className=''>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas veniam maxime eos, tempora ipsa,
                        perferendis necessitatibus autem labore fugit quis illo quaerat provident impedit deleniti, ab
                        eligendi? Eligendi cupiditate vel itaque? Dolorum id amet facere saepe esse beatae, cupiditate
                        dignissimos?
                    </p>
                </div>

                <div className='flex flex-col space-y-6 xl:grid xl:grid-cols-2'>
                    <iframe
                        className='h-[10vh] w-[75vw] sm:h-[215px] sm:w-[340px]'
                        width='340'
                        height='215'
                        src='https://www.youtube.com/embed/aLwpuDpZm1k'
                        title='Basic Ideas of Finance'
                        frameborder='0'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                        allowfullscreen
                    ></iframe>

                    <ul style={{ listStyle: 'square' }}>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, natus.</li>
                        <li>Lorem ipsum dolor sit amet consectetur.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, amet delectus!</li>
                        <li>Lorem ipsum, dolor sit amet consectetur adipisicing.</li>
                        <li>Lorem ipsum dolor sit amet consectetur.</li>
                        <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
                        <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic.</li>
                    </ul>
                </div>

                <div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis ullam odio esse, eveniet enim
                        temporibus nulla repellendus quidem recusandae tempora! Repellendus expedita omnis dolore,
                        consequuntur possimus iure numquam eius quas, id maiores mollitia voluptas dicta.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProductDescription
