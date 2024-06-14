'use client'

import Link from 'next/link'
import { useForm } from 'react-hook-form'
import notify from '@/utils/notify'
import 'react-toastify/dist/ReactToastify.css'
import handleServerError, { SetErrorFunction } from '@/utils/handleServerError'
import { useSignUpMutation } from '@/lib/features/api/auth/userApi'
import { useRouter } from 'next/navigation'
import { IoMdInformationCircle } from 'react-icons/io'

export type Fomfield = {
    first_name: string
    last_name: string
    address: string
    phone_number: string
    email: string
    password: string
    re_password: string
}

export default function Signup() {
    const [signUp, { isLoading }] = useSignUpMutation()

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
        setError // can we extract the type of this setError
    } = useForm<Fomfield>()

    const router = useRouter()

    const onSubmit = async (data: Fomfield) => {
        try {
            await signUp(data).unwrap()
            notify('Check email to activate your account')
            router.push('/login')
        } catch (err) {
            handleServerError(err, setError as SetErrorFunction)
        }
    }

    return (
        <div>
            <section className='bg-gray-50 py-[40px] dark:bg-gray-900 sm:py-[48px] md:py-[56px] lg:py-[64px] xl:py-[80px] 2xl:py-[100px]'>
                <div className=' mx-auto flex flex-col items-center justify-center px-6  py-8 lg:py-0'>
                    {/* <p className='mb-6 flex  items-center text-2xl font-semibold capitalize text-gray-900 dark:text-white'>
                        Welcome to Himalayan Tea
                    </p> */}
                    <div className='w-full rounded-lg bg-white shadow dark:border dark:border-gray-700 dark:bg-gray-800 sm:max-w-md md:mt-0 xl:p-0'>
                        <form onSubmit={handleSubmit(onSubmit)} className='space-y-4 p-6 sm:p-8 md:space-y-6'>
                            <div className='text-center text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl'>
                                Register Now
                            </div>
                            <div className='gap-10 md:flex'>
                                <div className='space-y-4'>
                                    <div>
                                        <label className=' required-field mb-2 block text-sm font-medium text-gray-900 dark:text-white'>
                                            Your First Name
                                        </label>
                                        <input
                                            type='text'
                                            id='first'
                                            className='form-control'
                                            placeholder='Your First Name'
                                            {...register('first_name', {
                                                required: {
                                                    message: 'required field',
                                                    value: true
                                                }
                                            })}
                                        />
                                        {errors.first_name && (
                                            <small className='text-red-600'>{errors.first_name.message}</small>
                                        )}
                                    </div>
                                    <div>
                                        <label
                                            htmlFor='last'
                                            className='  required-field mb-2 block text-sm font-medium text-gray-900 dark:text-white'
                                        >
                                            Your Last Name
                                        </label>
                                        <input
                                            type='text'
                                            id='lastname'
                                            placeholder='Your Last Name'
                                            className='form-control'
                                            {...register('last_name', {
                                                required: {
                                                    message: 'required field',
                                                    value: true
                                                }
                                            })}
                                        />
                                        {errors.last_name && (
                                            <small className='text-red-600'>{errors.last_name.message}</small>
                                        )}
                                    </div>
                                    <div>
                                        <label
                                            htmlFor='last'
                                            className='  required-field mb-2 block text-sm font-medium text-gray-900 dark:text-white'
                                        >
                                            Address
                                        </label>
                                        <input
                                            type='text'
                                            id='address'
                                            placeholder='Your Last Name'
                                            className='form-control'
                                            {...register('address', {
                                                required: {
                                                    message: 'required field',
                                                    value: true
                                                }
                                            })}
                                        />
                                        {errors.address && (
                                            <small className='text-red-600'>{errors.address.message}</small>
                                        )}
                                    </div>
                                    <div>
                                        <label className=' mb-2 flex text-sm font-medium text-gray-900 dark:text-white '>
                                            Your contact *
                                            <span className='group relative  ml-2 inline-block cursor-pointer'>
                                                <span className='  text-xl text-primary'>
                                                    <IoMdInformationCircle />
                                                </span>
                                                <div
                                                    className={`absolute -top-16 hidden  w-[250px] rounded-md bg-slate-800  p-2 text-start text-gray-200 group-hover:block`}
                                                >
                                                    <ul>
                                                        <li>For Nepal +97798XXXXXXXX</li>
                                                        <li>For Australia +61XXXXXXXX</li>
                                                    </ul>
                                                </div>
                                            </span>
                                        </label>
                                        <input
                                            id='phone_number'
                                            placeholder='Your contact'
                                            className=' form-control'
                                            {...register('phone_number', {
                                                required: {
                                                    message: 'required field',
                                                    value: true
                                                }
                                            })}
                                        />
                                        {errors.phone_number && (
                                            <small className='text-red-600'>{errors.phone_number.message}</small>
                                        )}
                                    </div>
                                </div>
                                <div>
                                    <div className='space-y-4'>
                                        <div>
                                            <label
                                                htmlFor='email'
                                                className=' required-field mb-2 block text-sm font-medium text-gray-900 dark:text-white'
                                            >
                                                Your email
                                            </label>
                                            <input
                                                type='email'
                                                id='email'
                                                className='form-control'
                                                placeholder='email'
                                                {...register('email', {
                                                    required: {
                                                        message: 'required field',
                                                        value: true
                                                    }
                                                })}
                                            />
                                            {errors.email && (
                                                <small className='text-red-600'>{errors.email.message}</small>
                                            )}
                                        </div>
                                        <div>
                                            <label
                                                htmlFor='password'
                                                className='  required-field mb-2 block text-sm font-medium text-gray-900 dark:text-white'
                                            >
                                                Password
                                            </label>
                                            <input
                                                type='password'
                                                id='password'
                                                placeholder='••••••••'
                                                className='form-control'
                                                {...register('password', {
                                                    required: {
                                                        message: 'required field',
                                                        value: true
                                                    }
                                                })}
                                            />
                                            {errors.password && (
                                                <small className='text-red-600'>{errors.password.message}</small>
                                            )}
                                        </div>
                                        <div>
                                            <label
                                                htmlFor='password'
                                                className='  required-field mb-2 block text-sm font-medium text-gray-900 dark:text-white'
                                            >
                                                Confirm Password
                                            </label>
                                            <input
                                                type='password'
                                                id='re_password'
                                                placeholder='••••••••'
                                                className=' form-control'
                                                {...register('re_password', {
                                                    required: {
                                                        message: 'required field',
                                                        value: true
                                                    },
                                                    validate: value =>
                                                        value === watch('password') || "Passwords don't match."
                                                })}
                                            />
                                            {errors.re_password && (
                                                <small className='text-red-600'>{errors.re_password.message}</small>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center'>
                                <button disabled={isLoading} className=' btn w-full rounded-lg'>
                                    {isLoading ? 'Loading' : 'Sign Up'}
                                </button>
                            </div>
                            <p className='text-sm font-light text-gray-500 dark:text-gray-400'>
                                have an account?{' '}
                                <Link
                                    href='/login'
                                    className='text-primary-600 dark:text-primary-500 font-medium hover:text-primary hover:underline'
                                >
                                    Login
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}
