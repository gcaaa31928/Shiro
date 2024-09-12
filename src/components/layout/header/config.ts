import type { ReactNode } from 'react'
import { createElement as h } from 'react'

import {
  FaSolidCircle,
  FaSolidCircleNotch,
  FaSolidDotCircle,
  FaSolidFeatherAlt,
  FaSolidHistory,
  IcTwotoneSignpost,
  IonBook,
  MdiFlask,
  MdiLightbulbOn20,
} from '~/components/icons/menu-collection'

export interface IHeaderMenu {
  title: string
  path: string
  type?: string
  icon?: ReactNode
  subMenu?: Omit<IHeaderMenu, 'exclude'>[]
  exclude?: string[]
}
export const headerMenuConfig: IHeaderMenu[] = [
  {
    title: '個人首頁',
    path: '/',
    type: 'Home',
    icon: h(FaSolidDotCircle),
    subMenu: [],
  },
  {
    title: '文章',
    path: '/posts',
    type: 'Post',
    subMenu: [],
    icon: h(IcTwotoneSignpost),
  },
  {
    title: '筆記',
    type: 'Note',
    path: '/notes',
    icon: h(FaSolidFeatherAlt),
    exclude: ['/notes/topics'],
  },

  {
    title: '時光',
    icon: h(FaSolidHistory),
    path: '/timeline',
    subMenu: [
      {
        title: '筆記',
        icon: h(FaSolidFeatherAlt),
        path: '/timeline?type=note',
      },
      {
        title: '文章',
        icon: h(IonBook),
        path: '/timeline?type=post',
      },
      {
        title: '回憶',
        icon: h(FaSolidCircle),
        path: '/timeline?memory=1',
      },
    ],
  },

  {
    title: '更多',
    icon: h(FaSolidCircleNotch),
    path: '#',
    subMenu: [
      {
        title: '思考',
        icon: h(MdiLightbulbOn20),
        path: '/thinking',
      },
      {
        title: '專案',
        icon: h(MdiFlask),
        path: '/projects',
      },
    ],
  },
]
