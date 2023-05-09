import { iconsType } from "../icons/types"

export type componentType = {
  data: programType
}

export type programType = {
  label: string
  icon: iconsType
  component: (props: componentType) => void
  desktop: boolean
  menu: boolean
}

export interface programLauncherType extends programType {
  x: number,
  y: number
}

export type stylesType = { [key: string]: React.CSSProperties }
