import React, { useState } from 'react'
import { format } from 'date-fns'
import { 
  MenuListItem,
  AppBar,
  Toolbar,
  Button,
  MenuList,
  Separator,
  Frame,
  Tooltip
 } from 'react95'

import { iconsType } from '../icons/types'
import OsIcon from './OsIcon'
import { programType, stylesType } from '../types/core'

const time = format(new Date(), "hh:mmaaaaa'm'")
  .replace('am', ' am')
  .replace('pm', ' pm')

type MenuItemProps = {
  icon: iconsType
  label: string
  onClick: () => void
}

function MenuItem({
  icon,
  label,
  onClick
}: MenuItemProps) {
  return (
    <MenuListItem
      style={styles.menuItem}
      onClick={onClick}
    >
      <OsIcon
        style={styles.menuItemIcon}
        name={icon}
      />
      {label}
    </MenuListItem>
  )
}

type OsAppBarProps = {
  openProgram: (label: string) => void
  programs: programType[]
}

export default function OsAppBar({
  openProgram,
  programs
}: OsAppBarProps) {
  const [open, setOpen] = useState(false)

  const hasSeparator = (index: number) => (
    index === programs.length-1 && programs.length > 1
  )

  const toggle = () => setOpen(!open)
  const close = () => setOpen(false)

  return (
    <div style={styles.container}>
      <AppBar position="relative">
        <Toolbar style={styles.toolbar}>
        <div style={styles.actions}>
          <Button
            style={styles.button}
            onClick={toggle}
            active={open}
          >
            <OsIcon
              style={styles.buttonIcon}
              name="windows-0"
            />
            Start
          </Button>
          {open && (
            <div
              style={styles.overlay}
              onClick={close}
            />
          )}
          {open && (
            <MenuList
              onClick={() => setOpen(false)}
              style={styles.menuList}
            >
              {programs.map((program, index) => (
                <div key={index}>
                  {hasSeparator(index) && <Separator />}
                  <MenuItem
                    onClick={() => openProgram(program.label)}
                    label={program.label}
                    icon={program.icon}
                    key={program.label}
                  />
                </div>
              ))}
            </MenuList>
          )}
        </div>
        <div style={styles.toolbox}>
          <Frame variant="well" style={styles.frame}>
            <Tooltip
              style={styles.tooltip}
              text="Volume 100%"
              enterDelay={100}
              leaveDelay={500}
            >
              <OsIcon
                name="loudspeaker_rays-1"
                style={styles.tooltipIcon}
              />
            </Tooltip>
            <span style={styles.time}>
              {time}
            </span>
          </Frame>
        </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

const styles: stylesType = {
  menuItem: {
    justifyContent: 'start',
    paddingRight: 20
  },
  menuItemIcon: {
    marginRight: 10
  },
  container: {
    position: 'fixed',
    bottom: 0,
    height: 48,
    width: '100%',
    userSelect: 'none',
    zIndex: 999999
  },
  toolbar: {
    justifyContent: 'space-between'
  },
  actions: {
    position: 'relative',
    display: 'inline-block'
  },
  button: {
    fontWeight: 'bold'
  },
  buttonIcon: {
    height: '20px',
    marginRight: 4
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh'
  },
  menuList: {
    position: 'absolute',
    left: '0',
    bottom: '100%',
  },
  toolbox: {
    position: 'relative',
    display: 'inline-block',
    textAlign: 'right'
  },
  frame: {
    padding: '3px 20px'
  },
  tooltip: {
    padding: '0px 10px'
  },
  tooltipIcon: {
    marginBottom: -2,
    marginRight: 10
  },
  time: {
    textTransform: 'uppercase'
  },
}