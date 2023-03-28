import { MenuEntry } from 'zkvibeswap1'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  // {
  //   label: 'Parallel farming',
  //   icon: 'HamburgerIcon',
  //   items: [
  //     {
  //       label: 'Iridium Finance',
  //       href: 'https://iridiumfinance.app/',
  //     },
  //   ],
  // },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://app.mute.io/',
      },
      {
        label: 'Liquidity',
        href: 'https://app.mute.io/pool/',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  // {
  //   label: 'Community Pools',
  //   icon: 'GroupsIcon',
  //   href: '/community',
  // },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT (Coming Soon)',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Charts',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Gecko Terminal',
        href: 'https://www.geckoterminal.com/',
      },
      {
        label: 'DexTools',
        href: 'https://www.dextools.io',
      },
      // {
      //   label: 'DexGuru',
      //   href: 'https://dex.guru/token/0x782eb3304f8b9add877f13a5ca321f72c4aa9804-polygon',
      // },
      // {
      //   label: 'PooCoin',
      //   href: 'https://polygon.poocoin.app/tokens/0x782eb3304f8b9add877f13a5ca321f72c4aa9804',
      // },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      // {
      //   label: 'Github',
      //   href: 'https://github.com/polydaedalus',
      // },
      {
        label: 'Docs (Coming Soon)',
        href: '/',
      },
      // {
      //   label: 'Vfat.tools',
      //   href: 'https://vfat.tools/polygon/platinumfinance/',
      // }
    ],
  },
]

export default config
