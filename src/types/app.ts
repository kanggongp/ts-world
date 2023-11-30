import { NextPage } from 'next';

export type CustomPageLayout<P = unknown, IP = P> = NextPage<P, IP>;

export interface LayoutConfig {
  layoutConfig?: {
    layoutDisabled?: boolean;
    layoutHide?: boolean;
    header?: boolean;
    footer?: boolean;
    sideBar?: boolean;
    bottomSheet?: boolean;
    bottomSheetMobile?: boolean;
  };
}

// export type NextPageWithLayout<P = unknown, IP = P> = NextPage<P, IP> & LayoutConfig

// export type AppPropsWithLayout = AppProps & {
//   Component: NextPageWithLayout
// }

// export interface LayoutConfig {
//   layoutConfig?: {
//     layoutDisabled?: boolean
//     layoutHide?: boolean
//     header?: boolean
//     headerWeb?: boolean
//     headerTitle?: string
//     headerBackButton?: boolean
//     footer?: boolean
//     communityNavigation?: boolean
//     bottomSheet?: boolean
//     bottomSheetMobile?: boolean
//     blockDetail?: boolean
//     enableInput?: boolean
//   }
// }
