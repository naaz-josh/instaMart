import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com', }),
    endpoints: (builder) => ({
      getProducts: builder.query({
        query: () => '/products',
      }),
      getSingleProduct:builder.query({
        query:(product)=>`/products/search?q=${product}`
      })
    }),
  })

  export const { useGetProductsQuery,useGetSingleProductQuery}=apiSlice