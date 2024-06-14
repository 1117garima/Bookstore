import Image from 'next/image'
import { FaReply } from 'react-icons/fa'

const Comments = () => {
    return (
        <div>
            {/* Total Comments */}
            <div>
                <h1 className='mb-[30px] border-b-[1px] border-[#dbdbdb] py-[20px] text-[20px] text-[#484848]'>
                    03 Comments
                </h1>
            </div>

            <div className='flex flex-col items-center gap-y-[30px]'>
                {/* Comment no1 */}
                <div className=' flex flex-col gap-x-2 space-y-4 border-b-2 border-[#dbdbdb] bg-[#fcfcfc] px-[25px] py-[35px] lg:grid  lg:grid-cols-8 '>
                    {/* IMAGE */}
                    <div className='col-span-1'>
                        <Image
                            src='https://images.unsplash.com/photo-1664925502795-83a700f7843c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                            alt=''
                            height={100}
                            width={100}
                            className='relative mt-[15px] h-[70px] w-[70px] rounded-full object-cover '
                        />
                    </div>

                    {/* DETAILS */}

                    <div
                        className=' col-span-7 space-y-3
        '
                    >
                        <div className='flex flex-col items-start space-y-4 md:flex-row md:justify-between '>
                            <div>
                                <h1 className='text-[18px] text-[#484848]'>Katherine Cuberstone</h1>

                                <span className='text-[13px] text-[#666]'>Author Since:</span>
                                <span className='text-[13px] text-[#666]'>March 1, 2024</span>
                            </div>

                            <div>
                                <span className='flex w-[100px] cursor-pointer items-center gap-1 rounded-[30px] border-[1px] border-[#dbdbdb] px-[20px] py-[10px] text-[13px] text-[#666] hover:bg-[#77b748] hover:text-white'>
                                    Reply <FaReply />{' '}
                                </span>
                            </div>
                        </div>

                        <p className='text-[16px] text-[#666] '>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto voluptate ducimus ipsa
                            est amet officia, cumque quis, non expedita itaque facere, harum sed
                        </p>
                    </div>
                </div>
                {/* Reply no1 */}
                <div className=' ml-[60px] flex flex-col gap-x-2 space-y-4 border-b-2 border-[#dbdbdb] bg-[#fcfcfc] px-[25px] py-[35px] lg:grid  lg:grid-cols-8 '>
                    {/* IMAGE */}
                    <div className='col-span-1'>
                        <Image
                            src='https://images.unsplash.com/photo-1664925502795-83a700f7843c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                            alt=''
                            height={100}
                            width={100}
                            className='relative mt-[15px] h-[70px] w-[70px] rounded-full object-cover '
                        />
                    </div>

                    {/* DETAILS */}

                    <div
                        className=' col-span-7 space-y-3
        '
                    >
                        <div className='flex flex-col justify-between space-y-4 md:flex-row '>
                            <div>
                                <h1 className='text-[18px] text-[#484848]'>Katherine Cuberstone</h1>

                                <span className='text-[13px] text-[#666]'>Author Since:</span>
                                <span className='text-[13px] text-[#666]'>March 1, 2024</span>
                            </div>

                            <div>
                                <span className='flex w-[100px] cursor-pointer items-center gap-1 rounded-[30px] border-[1px] border-[#dbdbdb] px-[20px] py-[10px] text-[13px] text-[#666] hover:bg-[#77b748] hover:text-white'>
                                    Reply <FaReply />{' '}
                                </span>
                            </div>
                        </div>

                        <p className='text-[16px] text-[#666] '>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto voluptate ducimus ipsa
                            est amet officia, cumque quis, non expedita itaque facere, harum sed
                        </p>
                    </div>
                </div>

                {/* Comment no2 */}
                <div className=' flex flex-col gap-x-2 space-y-4 border-b-2 border-[#dbdbdb] bg-[#fcfcfc] px-[25px] py-[35px] lg:grid  lg:grid-cols-8 '>
                    {/* IMAGE */}
                    <div className='col-span-1'>
                        <Image
                            src='https://images.unsplash.com/photo-1664925502795-83a700f7843c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                            alt=''
                            height={100}
                            width={100}
                            className='relative mt-[15px] h-[70px] w-[70px] rounded-full object-cover '
                        />
                    </div>

                    {/* DETAILS */}

                    <div
                        className=' col-span-7 space-y-3
        '
                    >
                        <div className='flex flex-col items-start space-y-4 md:flex-row md:justify-between '>
                            <div>
                                <h1 className='text-[18px] text-[#484848]'>Katherine Cuberstone</h1>

                                <span className='text-[13px] text-[#666]'>Author Since:</span>
                                <span className='text-[13px] text-[#666]'>March 1, 2024</span>
                            </div>

                            <div>
                                <span className='flex w-[100px] cursor-pointer items-center gap-1 rounded-[30px] border-[1px] border-[#dbdbdb] px-[20px] py-[10px] text-[13px] text-[#666] hover:bg-[#77b748] hover:text-white'>
                                    Reply <FaReply />{' '}
                                </span>
                            </div>
                        </div>

                        <p className='text-[16px] text-[#666] '>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto voluptate ducimus ipsa
                            est amet officia, cumque quis, non expedita itaque facere, harum sed
                        </p>
                    </div>
                </div>

                <button
                    className='w-[150px] rounded bg-[#6f9a37] py-[12px] text-[13px] text-[#fff]  '
                    style={{ boxShadow: 'inset 0 -2px 0 0 #517127' }}
                >
                    View All{' '}
                </button>
            </div>
        </div>
    )
}

export default Comments
