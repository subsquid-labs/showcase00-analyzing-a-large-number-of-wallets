import {DataSourceBuilder} from '@subsquid/evm-stream'

export const dataSource = new DataSourceBuilder()
    // The SQD Network Portal is the primary source of blockchain data: it is public,
    // needs no API key, and streams pre-filtered data — including real-time unfinalized
    // blocks — far faster than a plain RPC endpoint.
    .setPortal('https://portal.sqd.dev/datasets/binance-mainnet')
    // To use a private or rate-limit-lifted Portal, supply an API key
    // through the HTTP client headers (create a key at https://portal.sqd.dev/app):
    // .setPortal({
    //     url: 'https://portal.sqd.dev/datasets/binance-mainnet',
    //     http: {
    //         headers: {'x-api-key': process.env.SQD_API_KEY},
    //     },
    // })
    // Field selection is explicit: there are no default optional fields, so list every
    // field the handler reads.
    .setFields({
        transaction: {
            from: true,
            to: true,
            hash: true,
        },
    })
    // Request all transactions; the handler filters them against the wallet list.
    .addTransaction({})
    .build()
