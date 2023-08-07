import * as fs from 'fs'
import {TypeormDatabase} from '@subsquid/typeorm-store'
import {processor, PANCAKESWAP_ROUTER_V2} from './processor'

const allWallets: Set<string> = new Set()

processor.run(new TypeormDatabase({supportHotBlocks: false}), async (ctx) => {
    for (let block of ctx.blocks) {
        for (let txn of block.transactions) {
            if (txn.to === PANCAKESWAP_ROUTER_V2) {
                allWallets.add(txn.from)
            }
        }
    }
    fs.writeFileSync('../assets/allWallets', [...allWallets].join('\n'))
})
