import {DataSourceBuilder} from '@subsquid/evm-stream'

export const PANCAKESWAP_ROUTER_V2 = '0x10ed43c718714eb63d5aa57b78b54704e256024e'

export const dataSource = new DataSourceBuilder()
    .setPortal('https://portal.sqd.dev/datasets/binance-mainnet')
    .setBlockRange({
        from: 28_000_000,
        to: 30_000_000,
    })
    .setFields({
        transaction: {
            from: true,
            to: true,
        },
    })
    .addTransaction({
        where: {
            to: [PANCAKESWAP_ROUTER_V2],
        },
    })
    .build()
