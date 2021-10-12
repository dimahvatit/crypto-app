import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
	'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': 'cc8ea52f9dmsh349b88ea4441c09p10dde3jsn7c3df1e6a8db',
};

const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
	reducerPath: 'cryptoApi',
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: (builder) => ({
		getCoins: builder.query({
			query: (count) => createRequest(`/coins?limit=${count}`),
		}),
		getCryptoDetails: builder.query({
			query: (coinId) => createRequest(`/coin/${coinId}`)
		}),
		getCryptoHistory: builder.query({
			query: ({coinId, timePeriod}) => createRequest(`/coin/${coinId}/history/${timePeriod}`)
		})
	})
})

export const { useGetCoinsQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery } = cryptoApi;