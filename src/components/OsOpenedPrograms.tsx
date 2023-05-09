import React from 'react'
import OsWindowProvider from './OsWindowProvider'
import { programType, stylesType } from '../types/core'

type OsOpenedProgramsProps = {
  data: programType[]
  closeProgram: (program: programType) => void
  selectedWindow: string
  setSelectedWindow: (props: string) => void
}

export default function OsOpenedPrograms({
  data,
  closeProgram,
  selectedWindow,
  setSelectedWindow
}:OsOpenedProgramsProps) {
  return (
    <div style={styles.container}>
      {data.map((program, index) => (
        <OsWindowProvider
          key={index}
          index={index}
          data={program}
          onClose={() => closeProgram(program)}
          active={selectedWindow === program.label}
          setActive={() => setSelectedWindow(program.label)}
        />
      ))}
    </div>
  )
}

const styles: stylesType = {
  container: {
    width: 0,
    height: 0,
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 999,
  },
}
