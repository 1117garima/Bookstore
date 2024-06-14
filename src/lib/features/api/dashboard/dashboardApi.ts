import { RTK_TAGS, emptySplitApi } from '@/lib/emptySplitApi'

export const dashboardApi = emptySplitApi.injectEndpoints({
    endpoints: builder => ({
        getdashboard: builder.query<[], void>({
            query: () => {
                return {
                    url: `dashboard-count/` // FIXME: this is repeated in another section tooo.. make one
                }
            },
            providesTags: [RTK_TAGS.DASHBOARD]
        })
    })
})

export const { useGetdashboardQuery } = dashboardApi
