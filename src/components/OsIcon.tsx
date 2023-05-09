import React from 'react'
import icons from '../icons'
import { iconsType } from '../icons/types'

type OsIconProps = {
  name: iconsType
  style: React.CSSProperties
}

export default function OsIcon({
  name,
  style
}: OsIconProps) {
  return (
    <img
      src={icons[name]}
      style={style}
      alt={name}
    />
  )
}
