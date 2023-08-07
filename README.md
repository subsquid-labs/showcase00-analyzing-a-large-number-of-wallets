# Showcase squid 00: activity of 1.4M wallets

This squid captures all Binance Smart Chain transactions involving accounts that interacted with the [Pancakeswap v2 Router](https://bscscan.com/address/0x10ed43c718714eb63d5aa57b78b54704e256024e) contract between blocks 28M and 30M, a total of about 1.4M accounts. The list of accounts is saved at `assets/allWallets`; it was also retrieved by an ad-hoc squid located at the `wallet-list-maker` folder. 

See more examples of requesting data with squids on the [showcase page](https://docs.subsquid.io/evm-indexing/configuration/showcase) of Subsquid documentation.

Dependencies: Node.js, Docker.

## Quickstart

```bash
# 0. Install @subsquid/cli a.k.a. the sqd command globally
npm i -g @subsquid/cli

# 1. Retrieve the template
sqd init showcase00 -t https://github.com/subsquid-labs/showcase00-analyzing-a-large-number-of-wallets
cd showcase00

# 2. Install dependencies
npm ci

# 3. Start a Postgres database container and detach
sqd up

# 4. Build and start the processor
sqd process

# 5. The command above will block the terminal
#    being busy with fetching the chain data, 
#    transforming and storing it in the target database.
#
#    To start the graphql server open the separate terminal
#    and run
sqd serve
```
A GraphiQL playground will be available at [localhost:4350/graphql](http://localhost:4350/graphql).
