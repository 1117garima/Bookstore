import { RTK_TAGS, emptySplitApi } from '@/lib/emptySplitApi'
import { appendSearchParams } from '@/utils/modifySearchParams'

export const ProductApi = emptySplitApi.injectEndpoints({
    endpoints: builder => ({
        getSearchProduct: builder.query({
            query: query => {
                return {
                    url: `books/?search=${query.search}`,
                    method: 'GET'
                }
            },
            providesTags: [RTK_TAGS.GET_SEARCH_PRODUCT]
        }),
        getSingleProduct: builder.query({
            query: (id: any) => {
                return {
                    // url: appendSearchParams(`books/${query.slug}/`, { currency_id: query.currency_id }),
                    url: `books/${id}/`,
                    method: 'GET'
                }
            },
            providesTags: [RTK_TAGS.GET_SINGLE_PRODUCT]
        })
    })
})

export const { useGetSearchProductQuery, useGetSingleProductQuery } = ProductApi
