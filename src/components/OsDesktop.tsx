import React, { useState } from 'react'
import GridLayout from "react-grid-layout"
import OsIconLauncher from './OsIconLauncher'
import { programLauncherType, stylesType } from '../types/core'

type OsDesktopProps = {
  openProgram: (label: string) => void,
  programs: programLauncherType[]
}

const getMatriz = (programs: programLauncherType[]) => (
  programs.map((props) => ({
    isDraggable: false,
    i: props.label,
    ...props,
    // x: 0,
    // y: 0,
    w: 1,
    h: 1
  }))
)

function OsDesktop({
  openProgram,
  programs
}: OsDesktopProps) {
  const matriz = getMatriz(programs)
  const [selected, select] = useState('')
  const [layout, setLayout] = useState<any>(matriz || [])

  // useEffect(() => {
  //   setLayout(
  //     layout.map((props) => ({
  //       ...props,
  //       isDraggable: selected === props.icon
  //     }))
  //   )
  // }, [layout])

  return (
    <div style={styles.container}>
      <GridLayout
        onDragStop={setLayout}
        className="layout"
        layout={layout}
        rowHeight={100}
        width={1200}
        cols={9}
      >
        {programs.map((item) => (
          <div
            style={styles.iconContainer}
            key={item.label}
          >
            <OsIconLauncher
              open={() => openProgram(item.label)}
              selected={selected}
              label={item.label}
              icon={item.icon}
              select={select}
            />
          </div>
        ))}
      </GridLayout>
      <div
        onClick={() => select('')}
        style={styles.overlay}
      />
    </div>
  )
}

const styles: stylesType = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    zIndex: 99
  },
  iconContainer: {
    zIndex: 999
  },
  container: {
    userSelect: 'none'
  }
}

export default OsDesktop
