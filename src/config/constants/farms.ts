import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  // {
  //   pid: 14,
  //   risk: 5,
  //   lpSymbol: 'VIBE-IRID LP',
  //   lpAddresses: {
  //     324: '0xD592bfB50ad10088A428F1a4e74213090fC4A6dC',
  //   },
  //   tokenSymbol: 'IRID',
  //   tokenAddresses: {
  //     324: '0x4523e85C144DE8Dd60acEc335bfC95fa87779D7C',
  //   },
  //   quoteTokenSymbol: QuoteToken.CAKE,
  //   quoteTokenAdresses: contracts.cake,
  // },
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'VIBE-USDC LP',
    lpAddresses: {
      324: '0x1bb4855770Eb93e96f5793ABCAcc3106c2Becf31',
    },
    tokenSymbol: 'VIBE',
    tokenAddresses: {
      324: '0x782eb3304F8b9adD877F13a5cA321f72c4AA9804',
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },
  // {
  //   pid: 1,
  //   risk: 5,
  //   lpSymbol: 'VIBE-WETH LP',
  //   lpAddresses: {
  //     324: '0xb85feb6af3412d690dfda280b73eaed73a2315bc',
  //   },
  //   tokenSymbol: 'WMATIC',
  //   tokenAddresses: {
  //     324: '0x5AEa5775959fBC2557Cc8789bC1bf90A239D9a91',
  //   },
  //   quoteTokenSymbol: QuoteToken.CAKE,
  //   quoteTokenAdresses: contracts.cake,
  // },

  {
    pid: 1,
    risk: 5,
    lpSymbol: 'VIBE-WETH LP',
    lpAddresses: {
      324: '0xb85feb6aF3412d690DFDA280b73EaED73a2315bC',
    },
    tokenSymbol: 'WETH',
    tokenAddresses: {
      324: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
    },
    quoteTokenSymbol: QuoteToken.CAKE,
    quoteTokenAdresses: contracts.cake,
  },

  // {
  //   pid: 3,
  //   risk: 5,
  //   lpSymbol: 'WMATIC-USDC LP',
  //   lpAddresses: {
  //     324: '0x6e7a5fafcec6bb1e78bae2a1f0b612012bf14827',
  //   },
  //   tokenSymbol: 'WMATIC',
  //   tokenAddresses: {
  //     324: '0x5AEa5775959fBC2557Cc8789bC1bf90A239D9a91',
  //   },
  //   quoteTokenSymbol: QuoteToken.USDC,
  //   quoteTokenAdresses: contracts.usdc,
  // },

  {
    pid: 4,
    risk: 5,
    lpSymbol: 'WETH-USDC LP',
    lpAddresses: {
      324: '0xDFAaB828f5F515E104BaaBa4d8D554DA9096f0e4',
    },
    tokenSymbol: 'WETH',
    tokenAddresses: {
      324: '0x5AEa5775959fBC2557Cc8789bC1bf90A239D9a91',
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },

  // {
  //   pid: 1,
  //   risk: 5,
  //   lpSymbol: 'VIBE-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xd1b59d11316e87c3a0a069e80f590ba35cd8d8d3',
  //   },
  //   tokenSymbol: 'VIBE',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xf952fc3ca7325cc27d15885d37117676d25bfda6',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 2,
  //   risk: 3,
  //   lpSymbol: 'USDC-USDT LP',
  //   lpAddresses: {
  //     324: '0x2cF7252e74036d1Da831d11089D326296e64a728'
  //   },
  //   tokenSymbol: 'USDC',
  //   tokenAddresses: {
  //     324: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 12,
  //   risk: 5,
  //   isTokenOnly: true,
  //   lpSymbol: 'VIBE',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x19e7cbecdd23a16dfa5573df54d98f7caae03019', // VIBE-BUSD LP
  //   },
  //   tokenSymbol: 'VIBE',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xf952fc3ca7325cc27d15885d37117676d25bfda6',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  {
    pid: 5,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'VIBE',
    lpAddresses: {
      324: '0x1bb4855770Eb93e96f5793ABCAcc3106c2Becf31'
    },
    tokenSymbol: 'VIBE',
    tokenAddresses: {
      324: '0x0e97C7a0F8B2C9885C8ac9fC6136e829CbC21d42'
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },

  // {
  //   pid: 6,
  //   risk: 3,
  //   isTokenOnly: true,
  //   lpSymbol: 'WMATIC',
  //   lpAddresses: {
  //     324: '0x6e7a5fafcec6bb1e78bae2a1f0b612012bf14827'
  //   },
  //   tokenSymbol: 'WMATIC',
  //   tokenAddresses: {
  //     324: '0x5AEa5775959fBC2557Cc8789bC1bf90A239D9a91'
  //   },
  //   quoteTokenSymbol: QuoteToken.USDC,
  //   quoteTokenAdresses: contracts.usdc,
  // },

  // {
  //   pid: 7,
  //   risk: 3,
  //   isTokenOnly: true,
  //   lpSymbol: 'AAVE',
  //   lpAddresses: {
  //     324: '0x7c76b6b3fe14831a39c0fec908da5f17180df677'
  //   },
  //   tokenSymbol: 'AAVE',
  //   tokenAddresses: {
  //     324: '0xd6df932a45c0f255f85145f286ea0b292b21c90b'
  //   },
  //   quoteTokenSymbol: QuoteToken.USDC,
  //   quoteTokenAdresses: contracts.usdc,
  // },

  {
    pid: 8,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'WETH',
    lpAddresses: {
      324: '0xDFAaB828f5F515E104BaaBa4d8D554DA9096f0e4'
    },
    tokenSymbol: 'WETH',
    tokenAddresses: {
      324: '0x5AEa5775959fBC2557Cc8789bC1bf90A239D9a91'
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },

  // {
  //   pid: 9,
  //   risk: 3,
  //   isTokenOnly: true,
  //   lpSymbol: 'WBTC',
  //   lpAddresses: {
  //     324: '0xf6a637525402643b0654a54bead2cb9a83c8b498'
  //   },
  //   tokenSymbol: 'WBTC',
  //   tokenAddresses: {
  //     324: '0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6'
  //   },
  //   quoteTokenSymbol: QuoteToken.USDC,
  //   quoteTokenAdresses: contracts.usdc,
  // },


  {
    pid: 10,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'MUTE',
    lpAddresses: {
      324: '0x1bb4855770Eb93e96f5793ABCAcc3106c2Becf31'
    },
    tokenSymbol: 'MUTE',
    tokenAddresses: {
      324: '0x0e97C7a0F8B2C9885C8ac9fC6136e829CbC21d42'
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },

  {
    pid: 11,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'USDC',
    lpAddresses: {
      324: '0x2cf7252e74036d1da831d11089d326296e64a728'
    },
    tokenSymbol: 'USDC',
    tokenAddresses: {
      324: '0x3355df6D4c9C3035724Fd0e3914dE96A5a83aaf4'
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },

  // {
  //   pid: 12,
  //   risk: 1,
  //   isTokenOnly: true,
  //   isCommunity: true,
  //   lpSymbol: 'PolyDoge',
  //   lpAddresses: {
  //     324: '0x7b3E67E63906d8576466c2f48158A30be0a9e36c'
  //   },
  //   tokenSymbol: 'PolyDoge',
  //   tokenAddresses: {
  //     324: '0x8A953CfE442c5E8855cc6c61b1293FA648BAE472'
  //   },
  //   quoteTokenSymbol: QuoteToken.USDC,
  //   quoteTokenAdresses: contracts.usdc,
  // },

  // {
  //   pid: 13,
  //   risk: 69,
  //   lpSymbol: 'VERT-USDC LP',
  //   lpAddresses: {
  //     324: '0x668269d6E5D2c2dE31D132Ac218044211643622B'
  //   },
  //   tokenSymbol: 'VERT',
  //   tokenAddresses: {
  //     324: '0x72572ccf5208b59f4bcc14e6653d8c31cd1fc5a0'
  //   },
  //   quoteTokenSymbol: QuoteToken.USDC,
  //   quoteTokenAdresses: contracts.usdc,
  // },




]

export default farms
