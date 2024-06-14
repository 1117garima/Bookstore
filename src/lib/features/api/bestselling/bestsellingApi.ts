// import { RTK_TAGS, emptySplitApi } from '@/lib/emptySplitApi'

// export const bestsellingApi = emptySplitApi.injectEndpoints({
//     endpoints: builder => ({
//         getbestselling: builder.query<[], void>({
//             query: () => {
//                 return {
//                     url: `best-selling-books/` // FIXME: this is repeated in another section tooo.. make one
//                 }
//             },
//             providesTags: [RTK_TAGS.BESTSELLING]
//         }),
//     })
// })

// export const { useGetbestsellingQuery, } = bestsellingApi

import { RTK_TAGS, emptySplitApi } from '@/lib/emptySplitApi'

export const bestsellingApi = emptySplitApi.injectEndpoints({
    endpoints: builder => ({
        getbestselling: builder.query<object, void>({
            query: () => {
                return {
                    url: `best-selling-books/`,
                    method: 'GET'
                }
            },
            providesTags: [RTK_TAGS.BESTSELLING]
        })
    })
})

export const { useGetbestsellingQuery } = bestsellingApi
