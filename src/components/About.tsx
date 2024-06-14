import Image from 'next/image'
import { BsBuildings } from 'react-icons/bs'
import { CiClock1, CiMail } from 'react-icons/ci'
import { FiPhone } from 'react-icons/fi'

const About = () => {
    return (
        <div className='flex flex-col gap-y-5'>
            <p className='flex items-center gap-4 text-[15px] text-[#666] '>
                <BsBuildings className='text-[30px]' /> Suit #07, Rose world Building, Street #02, AT246T Manchester
            </p>

            <div className='flex items-center gap-4 text-[15px] text-[#666]'>
                <FiPhone className='text-[20px]' />
                <div>
                    <p> 0800 12345-678-89</p>
                    <p>+4 1234-4567-67</p>
                </div>
            </div>

            <p className='flex items-center gap-4 text-[15px] text-[#666] '>
                {' '}
                <CiClock1 className='text-[23px]' /> Serving 7 Days A week
            </p>

            <div className='flex items-center gap-4 text-[15px] text-[#666]'>
                <CiMail className='text-[23px]' />
                <div className='cursor-pointer text-[#6f9a37]'>
                    <p>support@domain.com</p>
                    <p>info@domain.com</p>
                </div>
            </div>

            <div className='flex items-center gap-4'>
                <Image src='/facebook.png' alt='' width={200} height={200} className='h-[25px w-[25px] object-cover' />
                <Image src='/pinterest.png' alt='' width={200} height={200} className='h-[25px w-[25px] object-cover' />
                <Image src='/instagram.png' alt='' width={200} height={200} className='h-[25px w-[25px] object-cover' />
                <Image src='/linkedin.png' alt='' width={200} height={200} className='h-[25px w-[25px] object-cover' />
            </div>
        </div>
    )
}

export default About
