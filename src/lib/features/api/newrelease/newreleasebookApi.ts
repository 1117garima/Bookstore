import { RTK_TAGS, emptySplitApi } from '@/lib/emptySplitApi'

export const newreleasebookApi = emptySplitApi.injectEndpoints({
    endpoints: builder => ({
        getnewreleasebook: builder.query<[], void>({
            query: () => {
                return {
                    url: `new-release-books/` // FIXME: this is repeated in another section tooo.. make one
                }
            },
            providesTags: [RTK_TAGS.NEWRELEASE]
        })
    })
})

export const { useGetnewreleasebookQuery } = newreleasebookApi
