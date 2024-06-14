import { RTK_TAGS, emptySplitApi } from '@/lib/emptySplitApi'

export const newreleasenewsApi = emptySplitApi.injectEndpoints({
    endpoints: builder => ({
        getnewreleasebook: builder.query<[], void>({
            query: () => {
                return {
                    url: `new-release-news/` // FIXME: this is repeated in another section tooo.. make one
                }
            },
            providesTags: [RTK_TAGS.NEWRELEASENEWS]
        })
    })
})

export const { useGetnewreleasebookQuery } = newreleasenewsApi
