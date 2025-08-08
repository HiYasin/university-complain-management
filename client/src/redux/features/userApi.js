import { baseApi } from "@/redux/api/baseApi";

const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createUser: builder.mutation({
            query: (data) => ({
                url: "/user",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["User"],
        }),
        getUserByMatricId: builder.query({
            query: (matricId) => ({
                url: `/user/${matricId}`,
            }),
            providesTags: ["User"],
        }),
    }),
});

export const {
    useCreateUserMutation,
    useGetUserByMatricIdQuery,
} = userApi;
