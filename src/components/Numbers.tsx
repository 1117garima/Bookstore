'use client'

import { useEffect, useState } from 'react'

const Numbers = () => {
    const [isClient, setIsClient] = useState(false)

    const [num, setNum] = useState(1)
    console.log('numn', num)
    const handleIncrement = () => {
        console.log('inc')

        setNum(prevNum => prevNum + 1)
    }

    const handleDecrement = () => {
        if (num > 1) {
            setNum(prevNum => prevNum - 1)
        }
    }

    useEffect(() => {
        setIsClient(true)
    }, [])

    return (
        <div>
            {isClient && (
                <div className='flex items-center gap-x-2'>
                    <button
                        className='rounded border-[1px] border-[#b4b2b2] px-[15px] py-[8px] hover:bg-[#6f9a37] hover:text-white
        '
                        onClick={() => handleDecrement()}
                    >
                        -
                    </button>
                    <span className=' rounded border-[1px] border-[#b4b2b2] py-[8px] sm:px-[70px] sm:py-[10px] lg:px-[40px] xl:px-[75px] '>
                        {num}
                    </span>
                    <button
                        className='rounded border-[1px] border-[#b4b2b2] px-[15px] py-[8px] hover:bg-[#6f9a37] hover:text-white
        '
                        onClick={() => handleIncrement()}
                    >
                        +
                    </button>
                </div>
            )}
        </div>
    )
}

export default Numbers
