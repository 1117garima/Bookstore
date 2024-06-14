import Image from 'next/image'
import FeaturedTag from '../tags/FeaturedTag'

const NewsContent = ({ data }) => {
    return (
        <div className=''>
            <div className='space-y-5'>
                {/* Category */}
                <p className='border-b-[1px] border-b-[#dbdbdb] text-[13px] leading-8 text-[#666]'>{data.category}</p>

                {/* Name */}
                <div className='space-y-3'>
                    <FeaturedTag />
                    <h1 className='cursor-pointer text-[30px] font-medium leading-[30px] text-[#484848] hover:text-[#77b748]'>
                        {data.name}
                    </h1>
                </div>
            </div>

            {/* Content */}
            <div className='mt-[20px] space-y-[20px]  text-[14px] leading-[20px] text-[#666]'>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam quis nisi cum fugit aperiam nobis,
                    facilis autem? Ullam asperiores, quo magnam, mollitia officiis quibusdam expedita tenetur ad
                    molestias libero voluptas quis sapiente! Maiores quos sint repellat ad ipsum dicta, earum alias
                    architecto ut pariatur aliquam dignissimos perspiciatis debitis minus maxime dolore numquam
                    voluptate consequatur, corrupti facilis libero fugit. Qui, repellendus.
                </p>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati veniam distinctio doloribus
                    nostrum architecto porro enim aperiam adipisci totam. Corporis non inventore, architecto excepturi
                    quas vel recusandae ab voluptatem nostrum ipsum. Deleniti quis temporibus quaerat deserunt tempora.
                    Rerum, nulla dignissimos.
                </p>

                <blockquote className='flex flex-col items-center justify-center py-[20px] leading-[30px]'>
                    <q className=' text-center text-[24px] font-[30px] italic text-[#484848]'>
                        Adipisicing sed do eiusmod tempor incididunt ut labore etaem dolore magna aliqua enim aliquip
                        commodo consequat.
                    </q>
                    <div className='flex items-center'>
                        <p>By:</p>
                        <span className='cursor-pointer hover:text-[#337ab7]'>{data.author}</span>
                    </div>
                </blockquote>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, assumenda repellendus laboriosam
                    reiciendis explicabo esse quidem, eveniet, architecto sunt necessitatibus in. Possimus voluptate
                    nihil facilis veniam perspiciatis cum voluptatibus vel! Blanditiis, quisquam ipsum. Minima suscipit
                    necessitatibus rerum officiis temporibus. Facere?
                </p>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, molestiae accusantium, autem
                    perspiciatis libero laborum nemo unde quaerat fugiat quia, commodi ratione ipsam repudiandae tempore
                    corporis esse inventore repellendus facere?
                </p>
            </div>

            {/* Tags */}
            <div className='mt-[30px] flex flex-col gap-3 border-y-[1px] border-[#dbdbdb] px-[5px] py-[20px] lg:flex-row lg:items-center lg:justify-between'>
                <div className='flex items-center'>
                    <p className='mr-[5px] text-[16px] text-[#484848]'>Tags:</p>
                    <ul className=' flex items-center gap-3 text-xs text-[#767676]'>
                        <li className='cursor-pointer rounded-[5px] border-[1px] border-[#e6e6e6] px-[10px] py-[5px]  duration-300 hover:bg-[#77b748] hover:text-white'>
                            Wealth
                        </li>
                        <li className='cursor-pointer rounded-[5px] border-[1px] border-[#e6e6e6] px-[10px] py-[5px]  duration-300 hover:bg-[#77b748] hover:text-white'>
                            Profit Making
                        </li>
                        <li className='cursor-pointer rounded-[5px] border-[1px] border-[#e6e6e6] px-[10px] py-[5px]  duration-300 hover:bg-[#77b748] hover:text-white'>
                            Cash
                        </li>
                        <li className='cursor-pointer rounded-[5px] border-[1px] border-[#e6e6e6] px-[10px] py-[5px]  duration-300 hover:bg-[#77b748] hover:text-white'>
                            Planning
                        </li>
                    </ul>
                </div>

                <div className='flex items-center'>
                    <p className='mr-[5px] text-[16px] text-[#484848] '>Share:</p>
                    <div className='cursor pointer flex items-center gap-2'>
                        <Image src='/facebook.png' alt='' height={30} width={30} />
                        <Image src='/instagram.png' alt='' height={30} width={30} />
                        <Image src='/pinterest.png' alt='' height={30} width={30} />
                        <Image src='/linkedin.png' alt='' height={30} width={30} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsContent
