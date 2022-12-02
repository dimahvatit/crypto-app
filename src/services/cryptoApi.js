import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
	// 'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    // 'x-rapidapi-key': 'coinranking2243e4e8daa48cb64dfa7db7aae4f74f1e113aeddc079e9a',
	'x-access-token': 'coinranking2243e4e8daa48cb64dfa7db7aae4f74f1e113aeddc079e9a'
};

const baseUrl = "https://api.coinranking.com/v2";

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
	reducerPath: 'cryptoApi',
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: (builder) => ({
		getCoins: builder.query({
			query: (count) => createRequest(`/coins?limit=${count}`)
		}),
		getCryptoDetails: builder.query({
			query: (coinId) => createRequest(`/coin/${coinId}`)
		}),
		getCryptoHistory: builder.query({
			query: ({coinId, timePeriod}) => createRequest(`/coin/${coinId}/history/${timePeriod}`)
		}),
		getExchanges: builder.query({
			query: () => createRequest('/exchanges')
		})
	})
})

export const { useGetCoinsQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery, useGetExchangesQuery } = cryptoApi;