export const defaultLinkSections: LinkSection[] = [
  {
    name: '關於',
    links: [
      {
        name: '關於我',
        href: '/about-me',
      },
    ],
  },
  {
    name: '更多',
    links: [
      {
        name: '時間線',
        href: '/timeline',
      },
      {
        name: '友誼鏈接',
        href: '/friends',
      },
    ],
  },
  {
    name: '聯絡方式',
    links: [
      {
        name: '留言',
        href: '/message',
      },
      {
        name: 'GitHub',
        href: 'https://github.com/gcaaa31928',
        external: true,
      },
    ],
  },
]

export interface FooterConfig {
  linkSections: LinkSection[]
  otherInfo: OtherInfo
}
