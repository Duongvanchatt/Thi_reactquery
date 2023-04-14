import {CreateApi, createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { Iproduct } from '../moldel/product'; 

export const productApi = createApi ({
    reducerPath:"productApi",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:3001/"}),
    tagTypes: ["product"],
    endpoints: (builder) => ({
        products: builder.query<Iproduct[], void>({
            query: () => '/products',
            providesTags: ["product"],
        }),

        product: builder.query<Iproduct, string>({
          query: (id) => `/products/${id}`,
          providesTags: ["product"],  
        }),

        addProduct: builder.mutation<{}, Iproduct>({
            query: (product) =>({
                url: "/products",
                method: "POST",
                body: product,
            }),
            invalidatesTags: ["product"],
        }),

        deleteProduct: builder.mutation<void, string>({
            query: (id) =>({
                url: `/products/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["product"]
        }),

        editProduct: builder.mutation<void, Iproduct> ({
            query: ({id, ...rest}) =>({
                url: `/products/${id}`,
                method: "PUT",
                body: rest,
            }),
            invalidatesTags: ["product"]
        }),
    }),
});

export const {useAddProductMutation, useProductQuery, useDeleteProductMutation,useEditProductMutation, useProductsQuery} = productApi;