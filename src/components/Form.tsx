'use client'

import Breadcrumb from '@/components/common/Breadcrumb'
import React, { useRef, useState } from 'react'
// import { IoIosPeople, IoIosTrophy } from 'react-icons/io'
import { MdEmail } from 'react-icons/md'
import { FaGlobeAsia, FaPhoneAlt } from 'react-icons/fa'
import { FaLocationArrow } from 'react-icons/fa6'
import Map from '@/components/common/Maps'
import { useForm, Controller } from 'react-hook-form'
import { useContactMutation } from '@/lib/features/api/contact/contactApi'
import notify from '@/utils/notify'
import handleServerError, { SetErrorFunction } from '@/utils/handleServerError'
import { IoMdInformationCircle } from 'react-icons/io'
import ReCAPTCHA from 'react-google-recaptcha'
export type Fomfield = {
    name: string
    email: string
    phone_number: string
    message: string
    'g-recaptcha-response': string
}

const Form = () => {
    //First Name Focus
    const [isFirstFocused, setIsFirstFocused] = useState(false)
    //LAst Name Focus
    const [isLastFocused, setIsLastFocused] = useState(false)
    //Mail Focus
    const [isMailFocused, setIsMailFocused] = useState(false)
    //Subject Focus
    const [isSubjectFocused, setIsSubjectFocused] = useState(false)
    //Comment Focus
    const [isCommentFocused, setIsCommentFocused] = useState(false)

    // const recaptchaRef = useRef(null)

    const [contact, { isLoading }] = useContactMutation()

    const {
        register,
        control,
        handleSubmit,
        reset,
        formState: { errors },
        setError
    } = useForm<Fomfield>()

    const Submit = async (data: Fomfield) => {
        try {
            await contact(data).unwrap()
            notify()
            reset()
        } catch (err) {
            handleServerError(err, setError as SetErrorFunction)
        }
    }

    return (
        <div className='space-y-5'>
            {/* <div className="flex flex-col sm:flex-row gap-x-4 gap-y-4"> */}
            <div className='flex flex-col gap-x-4 gap-y-4 sm:flex-row'>
                {/* <input type="text" placeholder="First Name*"
          onFocus={() => setIsFirstFocused(true)}
          onBlur={() => setIsFirstFocused(false)}
          className={`w-[96%] sm:w-[48%] placeholder:text-[#666] text-sm border-[1px]  px-[20px] py-[10px] outline-none rounded-[4px] ${isFirstFocused ? 'border-[#6f9a37]' : 'border-[#dbdbdb]'}`}
        /> */}

                <div className='form-group'>
                    <label htmlFor='' className='form-label required-field'>
                        First Name
                    </label>
                    <input
                        type='text'
                        className='form-control'
                        placeholder='First name'
                        {...register('first_name', {
                            required: {
                                message: 'required field',
                                value: true
                            }
                        })}
                    />
                    {errors.first_name && <small className='text-red-600'>{errors.first_name.message}</small>}
                </div>

                <div className='form-group'>
                    <label htmlFor='' className='form-label required-field'>
                        Last Name
                    </label>
                    <input
                        type='text'
                        className='form-control'
                        placeholder='last name'
                        {...register('last_name', {
                            required: {
                                message: 'required field',
                                value: true
                            }
                        })}
                    />
                    {errors.last_name && <small className='text-red-600'>{errors.last_name.message}</small>}
                </div>

                <div className='form-group'>
                    <label htmlFor='' className='form-label required-field'>
                        Subject
                    </label>
                    <input
                        type='text'
                        className='form-control'
                        placeholder='Subject'
                        {...register('subject', {
                            required: {
                                message: 'required field',
                                value: true
                            }
                        })}
                    />
                    {errors.subject && <small className='text-red-600'>{errors.subject.message}</small>}
                </div>

                {/* <input type="text" placeholder="Last Name*"
          onFocus={() => setIsLastFocused(true)}
          onBlur={() => setIsLastFocused(false)}
          className={`w-[96%] sm:w-[48%] placeholder:text-[#666] text-sm border-[1px]  px-[20px] py-[10px] outline-none rounded-[4px] ${isLastFocused ? 'border-[#6f9a37]' : 'border-[#dbdbdb]'}`}

        /> */}
            </div>

            {/* <div className="flex flex-col sm:flex-row gap-x-4 gap-y-4">
        <input type="text" placeholder="Email*"
          onFocus={() => setIsMailFocused(true)}
          onBlur={() => setIsMailFocused(false)}
          className={`w-[96%] sm:w-[48%] placeholder:text-[#666] text-sm border-[1px]  px-[20px] py-[10px] outline-none rounded-[4px] ${isMailFocused ? 'border-[#6f9a37]' : 'border-[#dbdbdb]'}`}

        />

        <input type="text" placeholder="Subject(Optional)"
          onFocus={() => setIsSubjectFocused(true)}
          onBlur={() => setIsSubjectFocused(false)}
          className={`w-[96%] sm:w-[48%] placeholder:text-[#666] text-sm border-[1px]  px-[20px] py-[10px] outline-none rounded-[4px] ${isSubjectFocused ? 'border-[#6f9a37]' : 'border-[#dbdbdb]'}`}

        />
      </div> */}

            {/* <div>
        <input type="text" placeholder="Comment"
          onFocus={() => setIsCommentFocused(true)}
          onBlur={() => setIsCommentFocused(false)}
          className={`w-[99%] placeholder:text-[#666] placeholder:align-center text-sm border-[1px]  px-[20px] pt-[10px] pb-[150px] outline-none rounded-[4px] ${isCommentFocused ? 'border-[#6f9a37]' : 'border-[#dbdbdb]'}`}
        />

      </div> */}

            <div className='form-group'>
                <label htmlFor='' className='form-label required-field'>
                    message
                </label>
                <textarea
                    rows={8}
                    className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900'
                    placeholder='Your message...'
                    {...register('comment', {
                        required: {
                            message: 'required field',
                            value: true
                        }
                    })}
                ></textarea>
                {errors.comment && <small className='text-red-600'>{errors.comment.message}</small>}
            </div>

            {/* <button className="w-[150px] py-[12px] text-[13px] text-[#fff] bg-[#6f9a37] rounded  " style={{ boxShadow: 'inset 0 -2px 0 0 #517127' }}>Submit </button> */}

            <button
                // className='btn w-fit px-8'
                className='w-[150px] rounded bg-[#6f9a37] py-[12px] text-[13px] text-[#fff]'
                style={{ boxShadow: 'inset 0 -2px 0 0 #517127' }}
                onClick={handleSubmit(Submit)}
                disabled={isLoading}
            >
                Send
            </button>
        </div>
    )
}

export default Form
