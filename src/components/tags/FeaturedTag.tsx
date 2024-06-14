import { FaPlay } from 'react-icons/fa'

const FeaturedTag = () => {
    return (
        <div>
            <div className='flex items-center'>
                <p className='inline-block rounded-l bg-[#f16945] px-[2px] py-[2px] text-xs text-white'>Featured</p>

                <span className='ml-[-2px] text-[20px] text-[#f16945]'>
                    <FaPlay />
                </span>
            </div>
        </div>
    )
}

export default FeaturedTag
