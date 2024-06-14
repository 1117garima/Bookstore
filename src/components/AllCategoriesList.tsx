import Image from 'next/image'
import { IoChevronForward } from 'react-icons/io5'
import { MainCategories } from '@/dummy/MegaMenuData'

const AllCategoriesList = () => {
    return (
        <div>
            <div className=' z-40 flex flex-col justify-between gap-[450px] bg-white text-sm text-[#666] sm:gap-[230px] lg:absolute lg:flex-row lg:gap-[200px] '>
                {/* column list */}
                <div
                    className='
          z-40 flex  flex-col text-sm text-[#666]  '
                >
                    <ul className=' absolute z-40 ml-[-20px] flex w-screen flex-col bg-white text-sm text-[#666] sm:flex-row lg:ml-0  lg:w-[230px] lg:flex-col lg:shadow-md '>
                        <div>
                            {MainCategories.slice(0, 5).map(el => {
                                return (
                                    <li className='flex w-screen items-center justify-between py-[12px] pl-[20px] pr-[20px] sm:w-[50vw] lg:w-full '>
                                        {el} <IoChevronForward />
                                    </li>
                                )
                            })}
                        </div>
                        <div>
                            {MainCategories.slice(5, 10).map(el => {
                                return (
                                    <li className='flex w-screen items-center justify-between py-[12px] pl-[20px] pr-[20px] sm:w-[50vw] lg:w-full '>
                                        {el} <IoChevronForward />
                                    </li>
                                )
                            })}
                        </div>
                    </ul>
                </div>

                {/* SubCategory list x some ui */}
                <div className='w-[92w] bg-[#fafafa] lg:ml-0 lg:w-[60vw] '>
                    <div className='flex flex-col gap-x-[50px] px-[15px] py-[12px] sm:grid sm:grid-cols-3 lg:gap-x-[120px] lg:px-[40px]'>
                        <div className=''>
                            <h2 className='pb-[10px] text-[16px] font-semibold text-[#484848]'>Architecture</h2>
                            <ul className='list-disc space-y-2 pl-[20px] text-[13px] text-[#666]  '>
                                <li className='hover:text-[#337ab7]'>Tough As Nails</li>
                                <li className='hover:text-[#337ab7]'>Pro Grease Monkey</li>
                                <li className='hover:text-[#337ab7]'>Building Memories</li>
                                <li className='hover:text-[#337ab7]'>Bulldozer Boyz</li>
                                <li className='hover:text-[#337ab7]'>Buill Or Leave On Us</li>
                            </ul>
                            <p className='pt-[12px] text-xs text-[#55acee] hover:text-[#6f9a37]  '>View All</p>
                        </div>
                        <div className='mt-[20px] sm:mt-0'>
                            <h2 className='pb-[10px] text-[16px] font-semibold text-[#484848]'>Art Froms</h2>
                            <ul className='list-disc space-y-2 pl-[20px] text-[13px] text-[#666]  '>
                                <li className='hover:text-[#337ab7]'>Consectetur adipiscing</li>
                                <li className='hover:text-[#337ab7]'>Aelit sed do eiusmod</li>
                                <li className='hover:text-[#337ab7]'>Tempor incididunt </li>
                                <li className='hover:text-[#337ab7]'>Dolore magna aliqua</li>
                                <li className='hover:text-[#337ab7]'>Ut enim ad minim</li>
                            </ul>
                            <p className='pt-[12px] text-xs text-[#55acee] hover:text-[#6f9a37]  '>View All</p>
                        </div>
                        <div className='mt-[20px] sm:mt-0'>
                            <h2 className='pb-[10px] text-[16px] font-semibold text-[#484848]'>History</h2>
                            <ul className='list-disc  space-y-2 pl-[20px] text-[13px] text-[#666]  '>
                                <li className='hover:text-[#337ab7]'>Veniam quis nosturd</li>
                                <li className='hover:text-[#337ab7]'>Exercitation</li>
                                <li className='hover:text-[#337ab7]'>Laboris nisi ut aliuip</li>
                                <li className='hover:text-[#337ab7]'>Commodo conseat</li>
                                <li className='hover:text-[#337ab7]'>Duis aute irure</li>
                            </ul>
                            <p className='pt-[12px] text-xs text-[#55acee] hover:text-[#6f9a37]  '>View All</p>
                        </div>
                    </div>

                    {/* Styling designs */}
                    <div className='mt-[20px] flex flex-col sm:flex-row sm:justify-between '>
                        <Image
                            src='/menuBook.png'
                            alt=''
                            height={223}
                            width={290}
                            className='h-[287px] w-[373px] sm:h-[223px] sm:w-[290px]'
                        />

                        <div className='flex flex-col gap-y-3 pl-[50px] pr-[40px] sm:pl-0 '>
                            <div className='space-y-4'>
                                <h3 className='text-[18px] font-bold text-[#484848]'>More Than</h3>
                                <h1 className='text-[50px] font-bold text-[#77b748]'>12,000</h1>
                                <h3 className='text-[18px] font-bold text-[#484848]'>Books Collection</h3>
                            </div>

                            <p className='w-[80vw] text-[13px] sm:w-[330px]'>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus voluptatem
                                dolore inventore! Exercitationem, ipsum aliquid.
                            </p>

                            <button className='w-[100px] rounded-full border-[1px] border-[#dbdbdb] py-[10px] text-[13px] text-[#666]'>
                                View All
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllCategoriesList
