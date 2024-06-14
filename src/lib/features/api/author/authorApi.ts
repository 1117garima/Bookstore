import { RTK_TAGS, emptySplitApi } from '@/lib/emptySplitApi'
import { appendSearchParams } from '@/utils/modifySearchParams'

export const authorApi = emptySplitApi.injectEndpoints({
    endpoints: builder => ({
        getAllAuthor: builder.query({
            query: query => {
                return {
                    url: 'authors/'
                }
            },
            providesTags: [RTK_TAGS.Authors]
        }),
        singleAuthor: builder.query({
            // query: query => {
            query: (id: any) => {
                return {
                    // url: appendSearchParams(`authors/${query.id}/`, query)
                    url: `authors/${id}/`
                }
            },
            providesTags: [RTK_TAGS.Authors],
            keepUnusedDataFor: 1
        }),
        updateAuthor: builder.mutation({
            query: query => {
                return {
                    url: `authors/${query.id}/`,
                    method: 'PUT',
                    body: query.formdata
                }
            },
            invalidatesTags: [RTK_TAGS.Authors]
        }),
        deleteAuthor: builder.mutation({
            query: query => {
                return {
                    url: `authors/${query.id}/`,
                    method: 'DELETE'
                }
            },
            invalidatesTags: [RTK_TAGS.Authors]
        })
    })
})

export const { useGetAllAuthorQuery, useSingleAuthorQuery, useUpdateAuthorMutation, useDeleteAuthorMutation } =
    authorApi
