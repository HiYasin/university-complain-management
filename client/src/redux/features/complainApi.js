import { baseApi } from "@/redux/api/baseApi";

const complainApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllComplains: builder.query({
            query: () => "/complain",
            providesTags: ["Complains"],
        }),
        getComplainById: builder.query({
            query: (id) => ({
                url: `/complain/${id}`,
            }),
            providesTags: ["Complains"],
        }),
        getComplainsByUserMatricId: builder.query({
            query: (userMatricId) => ({
                url: `/complain/user/${userMatricId}`,
            }),
            providesTags: ["Complains"],
        }),
        createComplain: builder.mutation({
            query: (data) => ({
                url: "/complain",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["Complains"],
        }),
        updateComplain: builder.mutation({
            query: ({ id, data }) => ({
                url: `/complain/${id}`,
                method: "PUT",
                body: data,
            }),
            invalidatesTags: ["Complains"],
        }),
        deleteComplain: builder.mutation({
            query: (id) => ({
                url: `/complain/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Complains"],
        }),
    }),
});

export const {
    useGetAllComplainsQuery,
    useGetComplainByIdQuery,
    useGetComplainsByUserMatricIdQuery,
    useCreateComplainMutation,
    useUpdateComplainMutation,
    useDeleteComplainMutation,
} = complainApi;
