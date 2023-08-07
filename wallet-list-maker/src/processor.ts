import {lookupArchive} from '@subsquid/archive-registry'
import {
    BlockHeader,
    DataHandlerContext,
    EvmBatchProcessor,
    EvmBatchProcessorFields,
    Log as _Log,
    Transaction as _Transaction,
} from '@subsquid/evm-processor'

export const PANCAKESWAP_ROUTER_V2 = '0x10ed43c718714eb63d5aa57b78b54704e256024e'

export const processor = new EvmBatchProcessor()
    .setDataSource({
        archive: lookupArchive('binance'),
    })
    .addTransaction({
        to: [PANCAKESWAP_ROUTER_V2],
    })
    .setBlockRange({
        from: 28_000_000,
        to: 30_000_000,
    })

export type Fields = EvmBatchProcessorFields<typeof processor>
export type Block = BlockHeader<Fields>
export type Log = _Log<Fields>
export type Transaction = _Transaction<Fields>
export type ProcessorContext<Store> = DataHandlerContext<Store, Fields>
