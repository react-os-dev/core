import React from 'react'
import OsIcon from './OsIcon'
import { iconsType } from '../icons/types'
import { stylesType } from '../types/core'

type OsIconLauncherProps = {
  icon: iconsType
  label: string
  selected: string
  select: (value: string) => void
  open: () => void
}

export default function OsIconLauncher({
  icon,
  label,
  selected,
  select,
  open
}: OsIconLauncherProps) {
  const border = selected === label
    ? 'dotted 2px #333'
    : 'none'

  const styleContainer = { ...styles.container, border }

  function handleClick(event: React.MouseEvent<HTMLElement>) {
    select(label)
    if(event.detail>=2) {
      open()
    }
  }

  return (
    <div style={styleContainer} onClick={handleClick}>
      <OsIcon style={styles.icon} name={icon}/>
      <p style={styles.label}>{label}</p>
    </div>
  )
}

const styles: stylesType = {
  container: {
    width: 80,
    padding: 10,
    margin: 10,
    textAlign: 'center',
  },
  icon: {
    userSelect: 'none',
    pointerEvents: 'none'
  },
  label: {
    userSelect: 'none',
    color: 'white'
  },
}