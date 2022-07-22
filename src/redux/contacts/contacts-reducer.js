import { apiSlice } from '../api/apiSlice';

export const contactsApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    fetchContacts: builder.query({
      query: () => '/contacts',
      providesTags: ['Contacts'],
    }),
    createContact: builder.mutation({
      query: ({ name, number }) => ({
        url: '/contacts',
        method: 'POST',
        body: {
          name,
          number,
        },
      }),
      invalidatesTags: ['Contacts'],
    }),
    deleteContact: builder.mutation({
      query: contactId => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),
    editContact: builder.mutation({
      query: ({ id, name, number }) => ({
        url: `/contacts/${id}`,
        method: 'PATCH',
        body: {
          name,
          number,
        },
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useFetchContactsQuery,
  useCreateContactMutation,
  useDeleteContactMutation,
  useEditContactMutation,
} = contactsApi;
