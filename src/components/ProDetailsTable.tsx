const ProDetailsTable = (product: any) => {
    console.log('data from product details page', product)

    let data = product?.product

    return (
        <div className='w-[92vw] lg:w-[38vw]'>
            <ul className='flex flex-col space-y-4 bg-[#f7f7f7] py-[10px] sm:grid sm:grid-cols-4 sm:space-y-0'>
                <li className='col-span-1 pl-[20px] text-[14px] font-medium  text-[#404040]'>Format:</li>
                <li className='col-span-3 pl-[20px] text-[14px] text-[#666] sm:pl-0  sm:text-center '>
                    {data?.format}
                </li>
            </ul>
            <ul className='flex flex-col space-y-4 bg-[#fcfcfc] py-[10px] sm:grid sm:grid-cols-4 sm:space-y-0'>
                <li className='col-span-1 pl-[20px] text-[14px] font-medium  text-[#404040]'>Pages:</li>
                <li className='col-span-3 pl-[20px] text-[14px] text-[#666] sm:pl-0  sm:text-center  '>
                    {data?.pages}
                </li>
            </ul>
            <ul className='flex flex-col space-y-4 bg-[#f7f7f7] py-[10px] sm:grid sm:grid-cols-4 sm:space-y-0'>
                <li className='col-span-1 pl-[20px] text-[14px] font-medium  text-[#404040]'>Dimensions:</li>
                <li className='col-span-3 pl-[20px] text-[14px] text-[#666] sm:pl-0  sm:text-center '>
                    {data?.dimension}
                </li>
            </ul>

            <ul className='flex flex-col space-y-4 bg-[#fcfcfc] py-[10px] sm:grid sm:grid-cols-4 sm:space-y-0'>
                <li className='col-span-1 pl-[20px] text-[14px] font-medium  text-[#404040]'>Publication Date:</li>
                <li className='col-span-3 pl-[20px] text-[14px] text-[#666] sm:pl-0  sm:text-center'>
                    {data?.publication_date}
                </li>
            </ul>
            <ul className='flex flex-col space-y-4 bg-[#f7f7f7] py-[10px] sm:grid sm:grid-cols-4 sm:space-y-0'>
                <li className='col-span-1 pl-[20px] text-[14px] font-medium  text-[#404040]'>Publisher:</li>
                <li className='col-span-3 pl-[20px] text-[14px] text-[#666] sm:pl-0  sm:text-center'>
                    {data?.publisher}
                </li>
            </ul>
            <ul className='flex flex-col space-y-4 bg-[#fcfcfc] py-[10px] sm:grid sm:grid-cols-4 sm:space-y-0'>
                <li className='col-span-1 pl-[20px] text-[14px] font-medium  text-[#404040]'>Language:</li>
                <li className='col-span-3 pl-[20px] text-[14px] text-[#666] sm:pl-0  sm:text-center'>
                    {data?.language}
                </li>
            </ul>
            {/* <ul className="py-[10px] bg-[#f7f7f7] sm:grid sm:grid-cols-5 flex flex-col space-y-4 sm:space-y-0">
        <li className="pl-[20px] text-[14px] text-[#404040] font-medium  col-span-2">Illustrations Note:</li>
        <li className="pl-[20px] sm:pl-0 text-[#666] text-[14px] sm:text-center  col-span-3 ">b&w images thru-out; 1 x 16pp colour plates</li>
      </ul>
      <ul className="py-[10px] bg-[#fcfcfc] sm:grid sm:grid-cols-4 flex flex-col space-y-4 sm:space-y-0">
        <li className="pl-[20px] text-[14px] text-[#404040] font-medium  col-span-1">ISBN10</li>
        <li className="pl-[20px] sm:pl-0 text-[#666] text-[14px] sm:text-center  col-span-3 ">1234567890</li>
      </ul>
      <ul className="py-[10px] bg-[#f7f7f7] sm:grid sm:grid-cols-4 flex flex-col space-y-4 sm:space-y-0">
        <li className="pl-[20px] text-[14px] text-[#404040] font-medium  col-span-1">ISBN13</li>
        <li className="pl-[20px] sm:pl-0 text-[#666] text-[14px] sm:text-center  col-span-3">123456789000000</li>
      </ul>
      <ul className="py-[10px] bg-[#fcfcfc] sm:grid sm:grid-cols-4 flex flex-col space-y-4 sm:space-y-0">
        <li className="pl-[20px] text-[14px] text-[#404040] font-medium  col-span-1">Other Format</li>
        <li className="pl-[20px] sm:pl-0 text-[#666] text-[14px] sm:text-center  col-span-3 ">CD-Audio, Paperback, E-Book</li>
      </ul> */}
        </div>
    )
}

export default ProDetailsTable
