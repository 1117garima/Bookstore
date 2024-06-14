import { RTK_TAGS, emptySplitApi } from '@/lib/emptySplitApi'
import { appendSearchParams } from '@/utils/modifySearchParams'

export const newsApi = emptySplitApi.injectEndpoints({
    endpoints: builder => ({
        getAllNews: builder.query({
            query: query => {
                return {
                    url: 'news/'
                }
            },
            providesTags: [RTK_TAGS.ALL_News]
        }),
        singleNews: builder.query({
            query: (id: any) => {
                return {
                    url: `news/${id}/`
                }
            },
            providesTags: [RTK_TAGS.Authors],
            keepUnusedDataFor: 1
        }),
        updateNews: builder.mutation({
            query: query => {
                return {
                    url: `news/${query.id}/`,
                    method: 'PUT',
                    body: query.formdata
                }
            },
            invalidatesTags: [RTK_TAGS.ALL_News]
        }),
        deleteNews: builder.mutation({
            query: query => {
                return {
                    url: `news/${query.id}/`,
                    method: 'DELETE'
                }
            },
            invalidatesTags: [RTK_TAGS.ALL_News]
        })
    })
})

export const { useGetAllNewsQuery, useSingleNewsQuery, useUpdateNewsMutation, useDeleteNewsMutation } = newsApi
