'use client'

import notify from '@/utils/notify'
import { useSelector } from 'react-redux'

export default function useProtectedFunction() {
    const user = useSelector((store: ReduxStore) => store.user.value.data)

    return (cb: () => void) => {
        if (user) {
            cb()
        } else {
            // alert("user of ...")
            console.log('login required.')
            notify('Login Required', 'error')
        }
    }
}
