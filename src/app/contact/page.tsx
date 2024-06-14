import About from '@/components/About'
import Form from '@/components/Form'
import ParallexHeader from '@/components/ParallexHeader'

const ContactPage = () => {
    const title = 'Contact Us'
    const pathname = 'Contact Us'
    return (
        <div>
            <ParallexHeader title={title} pathname={pathname} />

            <div className='pl-[25px] md:pl-[50px] lg:pl-[100px] xl:pl-[170px]  '>
                {/* BODY TITLE */}
                <div className=' mb-[30px] h-[90px] w-[95%] border-b-[0.5px] border-[#c3c2c2] lg:w-[1000px]  '>
                    <p className='text-sm font-normal text-[#484848] sm:text-base'>Say Hello!</p>
                    <h1 className='text-[20px] text-[#484848] sm:text-[30px]'>Get In Touch With Us</h1>
                </div>

                {/* Map */}

                <div className='flex flex-col gap-12 lg:flex-row '>
                    <iframe
                        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.518539525174!2d85.31863937455111!3d27.701271825761072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19688077a1ff%3A0x3ea9b1c08b4234dc!2sMindrisers%20Institute%20of%20Technology!5e0!3m2!1sen!2snp!4v1710686636790!5m2!1sen!2snp'
                        className=' h-[480px] w-[90vw] lg:h-[767px] lg:w-[455px]'
                        allowFullScreen=''
                        loading='lazy'
                        referrerPolicy='no-referrer-when-downgrade'
                    ></iframe>

                    <div className='pr-[40px]'>
                        {/* Form */}
                        <div>
                            <Form />
                        </div>

                        {/* About */}
                        <div className='mt-[20px] space-y-7'>
                            <h1 className='border-b-[1px] py-[20px] text-[22px] font-medium text-[#484848]'>
                                Get In Touch With Us
                            </h1>
                            <About />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactPage
