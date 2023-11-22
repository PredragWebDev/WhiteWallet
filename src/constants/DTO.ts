export type IUserWallet = {
    balance: number;
    name: string;
    // phrase: string;
    // password: string | null;
    // status: 0 | 1 | 2 | 3 | 4;
    // utxo_count: number | 0;
    // transactions?: IUserWalletTxs[] | null;
    // addresses?: any;
    // xprv?: string;
    // zprv?: string;
};

export type IUserWalletTxs = {
    txid: string;
    txData: string;
    status: 0 | 1 | 2 | 3;
};