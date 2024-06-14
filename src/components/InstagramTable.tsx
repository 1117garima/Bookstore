'use client'

import Image from 'next/image'

const InstagramTable = () => {
    return (
        <div className='mt-7'>
            {/* HEAD */}

            <h1 className='body mb-[20px] rounded-md bg-gray-600 px-[25px] py-[10px] text-white  '>Instagram </h1>

            <div className='grid grid-cols-3 gap-x-3 gap-y-2 sm:pl-[15px] lg:gap-y-4 '>
                <Image
                    src='/instagram/img-01.jpg'
                    alt=''
                    height={200}
                    width={200}
                    className='e relative w-[28vw] object-cover hover:shadow-lg hover:shadow-black/25 lg:h-[90px] lg:w-[90px]'
                />
                <Image
                    src='/instagram/img-02.jpg'
                    alt=''
                    height={200}
                    width={200}
                    className='relative w-[28vw] object-cover hover:shadow-lg hover:shadow-black/25  lg:h-[90px] lg:w-[90px] '
                />
                <Image
                    src='/instagram/img-03.jpg'
                    alt=''
                    height={200}
                    width={200}
                    className='relative w-[28vw] object-cover hover:shadow-lg hover:shadow-black/25  lg:h-[90px] lg:w-[90px] '
                />
                <Image
                    src='/instagram/img-04.jpg'
                    alt=''
                    height={200}
                    width={200}
                    className='relative w-[28vw] object-cover hover:shadow-lg hover:shadow-black/25   lg:h-[90px] lg:w-[90px]'
                />
                <Image
                    src='/instagram/img-05.jpg'
                    alt=''
                    height={200}
                    width={200}
                    className='relative w-[28vw] object-cover hover:shadow-lg hover:shadow-black/25  lg:h-[90px] lg:w-[90px]  '
                />
                <Image
                    src='/instagram/img-06.jpg'
                    alt=''
                    height={200}
                    width={200}
                    className='relative w-[28vw] object-cover hover:shadow-lg hover:shadow-black/25  lg:h-[90px] lg:w-[90px]  '
                />
                <Image
                    src='/instagram/img-07.jpg'
                    alt=''
                    height={200}
                    width={200}
                    className='relative w-[28vw] object-cover hover:shadow-lg hover:shadow-black/25  lg:h-[90px] lg:w-[90px] '
                />
                <Image
                    src='/instagram/img-08.jpg'
                    alt=''
                    height={200}
                    width={200}
                    className='relative w-[28vw] object-cover hover:shadow-lg hover:shadow-black/25  lg:h-[90px] lg:w-[90px]  '
                />
                <Image
                    src='/instagram/img-09.jpg'
                    alt=''
                    height={200}
                    width={200}
                    className='relative w-[28vw] object-cover hover:shadow-lg hover:shadow-black/25  lg:h-[90px] lg:w-[90px] '
                />
            </div>
        </div>
    )
}

export default InstagramTable
