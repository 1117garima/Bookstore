import { RTK_TAGS, emptySplitApi } from '@/lib/emptySplitApi'
import { appendSearchParams } from '@/utils/modifySearchParams'

export const productWishlist = emptySplitApi.injectEndpoints({
    endpoints: builder => ({
        wishList: builder.query<object, void>({
            query: () => {
                return {
                    url: `wishlists/`
                }
            },
            providesTags: [RTK_TAGS.All_WIHSLIST]
        }),
        featuredCategories: builder.query({
            query: ({ currency_id }: { currency_id: null | number | undefined }) => {
                return {
                    url: appendSearchParams('feature-products/', { currency_id: currency_id })
                }
            },
            providesTags: [RTK_TAGS.GET_ALL_FEATUREDPRODUCTS]
        }),

        addToWishList: builder.mutation({
            query: formData => {
                return {
                    url: `wishlists/`,
                    method: 'POST',
                    body: formData
                }
            },
            invalidatesTags: [RTK_TAGS.GET_ALL_FEATUREDPRODUCTS, RTK_TAGS.All_WIHSLIST]
        }),
        deleteWishList: builder.mutation({
            query: query => {
                return {
                    url: `wishlists/${query.id}/`,
                    method: 'DELETE'
                }
            },
            invalidatesTags: [RTK_TAGS.All_WIHSLIST]
        })
    })
})

export const { useAddToWishListMutation, useWishListQuery, useFeaturedCategoriesQuery, useDeleteWishListMutation } =
    productWishlist
