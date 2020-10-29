import homesteadAssets from 'assets/generated/dex/registry.homestead.json';
import kovanAssets from 'assets/generated/dex/registry.kovan.json';

import homestead from './homestead.json';
import kovan from './kovan.json';

interface Connector {
    id: string;
    name: string;
    options: any;
}

interface Token {
    address: string;
    name: string;
    symbol: string;
    decimals: number;
    precision: number;
    hasIcon: boolean;
    logoUrl: string;
}

interface Config {
    network: string;
    chainId: number;
    defaultPrecision: number;
    subgraphUrl: string;
    alchemyUrl: string;
    alchemyWsUrl: string;
    addresses: {
        bFactory: string;
        bActions: string;
        dsProxyRegistry: string;
        exchangeProxy: string;
        weth: string;
        multicall: string;
    };
    tokens: Record<string, Token>;
    connectors: Record<string, Connector>;
}

const configs = {
    1: {...homesteadAssets, ...homestead},
    42:{...kovanAssets, ...kovan},
};
// eslint-disable-next-line no-undef
const network = process.env.APP_CHAIN_ID || 1;

const config: Config = configs[network];
export default config;
