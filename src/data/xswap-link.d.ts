declare module '@xswap-link/sdk' {
  export function openTransactionModal(config: {
    integratorId: string;
    dstChain: string;
    dstToken: string;
    srcChain: string;
    srcToken: string;
    defaultWalletPicker: boolean;
  }): Promise<any>;
}
