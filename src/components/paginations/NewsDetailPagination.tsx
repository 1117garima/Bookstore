import Image from 'next/image'

const NewsDetailPagination = () => {
    return (
        <div>
            <div className='flex flex-col items-center gap-2 sm:flex-row'>
                {/* Previous Post */}
                <div className='group flex w-[88vw] cursor-pointer items-center justify-center gap-4 bg-[#f7f7f7] px-[30px] py-[35px] sm:w-[45vw]  sm:justify-start lg:w-[40vw]'>
                    <Image
                        src='https://images.unsplash.com/photo-1710488140458-e1757928a9f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8'
                        alt=''
                        width={80}
                        height={80}
                        className='hidden h-[80px] w-[80px] border-[4px] border-transparent object-cover group-hover:shadow-lg group-hover:shadow-black/30 lg:block'
                    />
                    <div className='text-center sm:text-start'>
                        <p className='text-[16px] font-medium text-[#484848]  '>All She Wants To Dance</p>
                        <p className='text-[#666]  group-hover:text-[#77b748]'>Previous Post</p>
                    </div>
                </div>
                {/* Next Post */}
                <div className='group flex w-[88vw] cursor-pointer items-center justify-center gap-4 bg-[#f7f7f7] px-[30px] py-[35px] sm:w-[45vw] sm:justify-end lg:w-[40vw]'>
                    <div className='text-center sm:text-end'>
                        <p className='text-[16px] font-medium text-[#484848] '>All She Wants To Dance</p>
                        <p className='text-[#666]  group-hover:text-[#77b748]'>Next Post</p>
                    </div>
                    <Image
                        src='https://images.unsplash.com/photo-1710488140458-e1757928a9f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8'
                        alt=''
                        width={80}
                        height={80}
                        className='hidden h-[80px] w-[80px] border-[4px] border-transparent object-cover group-hover:shadow-lg group-hover:shadow-black/30 lg:block'
                    />
                </div>
            </div>
        </div>
    )
}

export default NewsDetailPagination
