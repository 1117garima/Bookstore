'use client'
import React, { ComponentType, ReactNode, useEffect } from 'react'
// import Header from './Header'
import { withStoreProvider } from '@/app/StoreProvider'
// import { useUserInfoQuery } from '@/lib/features/api/auth/userApi'
import { useDispatch, useSelector } from 'react-redux'
import { initializeUser, setToken, simulateUserLoaded } from '@/lib/features/user/userSlice'
import { fetchApiData } from '@/utils/fetchApiData'
import Footer from '../footer/Footer'
import Header from '../Header/Header'
// import { setRtkBaseToken } from '@/lib/rtkBaseQuery'

function Layout({ children }: { children: ReactNode }) {
    // const { data, isLoading, refetch, isSuccess } = useUserInfoQuery()

    const userStore = useSelector((store: ReduxStore) => store.user.value)
    const token = userStore.token

    const dispatch = useDispatch()

    useEffect(() => {
        let token: string | null | undefined
        try {
            token = localStorage.getItem('token')
            token = token ? JSON.parse(token) : null
        } catch (err) {
            console.log('err', err)
        }

        if (token) {
            // setRtkBaseToken(token)
            dispatch(setToken(token))
            // debugger
        } else {
            dispatch(simulateUserLoaded())
        }
    }, [])

    useEffect(() => {
        // if (token) {
        //     // refetch()  // not being called instantly
        //     setTimeout(() => {
        //         refetch()
        //     }, 1000)
        // } else {
        //     setTimeout(() => {
        //         refetch()
        //     }, 1000)
        // }
        if (token) {
            fetchUser()
        }
        async function fetchUser() {
            let userResponse = await fetchApiData({
                url: '/auth/users/me/?from code',
                configObject: {
                    headers: {
                        Authorization: 'token ' + token
                    }
                }
            })
            // console.log(userResponse)
            // debugger

            if (userResponse) {
                // alert()
                dispatch(initializeUser(userResponse as User))
            } else {
                dispatch(simulateUserLoaded())
            }
        }
    }, [token])

    // useEffect(() => {
    //     if (data && isSuccess) {
    //         dispatch(
    //             initializeUser({
    //                 ...(data as User[])[0]
    //             })
    //         )
    //     } else {
    //         dispatch(initializeUser(null))
    //     }
    // }, [isSuccess, data, isLoading])

    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default withStoreProvider(Layout as ComponentType)
