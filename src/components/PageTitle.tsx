const PageTitle = ({ subTitle, mainTitle }) => {
    return (
        <div>
            <div className=' mb-[30px] h-[70px] w-[98%] border-b-[0.5px] border-[#c3c2c2]  sm:h-[90px] md:w-[94%] '>
                <p className='text-sm font-normal text-[#484848] sm:text-base'>{subTitle}</p>
                <h1 className='text-[20px] text-[#484848] sm:text-[30px]'>{mainTitle}</h1>
            </div>
        </div>
    )
}

export default PageTitle
