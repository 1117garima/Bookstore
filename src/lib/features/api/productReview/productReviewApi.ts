import { RTK_TAGS, emptySplitApi } from '@/lib/emptySplitApi'

export const productreviewApi = emptySplitApi.injectEndpoints({
    endpoints: builder => ({
        productDetail: builder.query({
            query: query => {
                return {
                    url: `/products/${query.params}/`,
                    method: 'GET'
                }
            },
            providesTags: [RTK_TAGS.ALL_PRODUCT_REVIEW] //here we defined a tag with name allproductreview
        }),

        Productreview: builder.mutation({
            query: formData => {
                return {
                    url: `reviews/`,
                    method: 'POST',
                    body: formData
                }
            },
            invalidatesTags: [RTK_TAGS.ALL_PRODUCT_REVIEW] //so basically when we post a review or we fire this mutation we wanna triggere the above get review also so for that we use provide tags
        }) //here we invalidate the data of that query with the name given in this tag so that it refetch or retriggers
    })
})

export const { useProductreviewMutation, useProductDetailQuery } = productreviewApi
