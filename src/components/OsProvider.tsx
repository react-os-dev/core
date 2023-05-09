import React, { useState, useEffect } from 'react'

import OsAppBar from './OsAppBar'
import OsDesktop from './OsDesktop'
import OsOpenedPrograms from './OsOpenedPrograms'
import normalizePrograms from "../utils/normalizePrograms"
import { programLauncherType, programType } from '../types/core'

type OsProviderProps = {
  programs: programType[]
}

function OsProvider({ programs: defaultPrograms }: OsProviderProps) {
  const [openedPrograms, setOpenedPrograms] = useState<programType[]>([])
  const [selectedWindow, setSelectedWindow] = useState('')

  const programs_desktop: programLauncherType[] = normalizePrograms(defaultPrograms.filter(({desktop}) => desktop))
  const programs_menu = normalizePrograms(defaultPrograms.filter(({menu}) => menu))
  const programs = normalizePrograms(defaultPrograms)

  function openProgram(programName: string) {
    const program = programs.filter(({label}) => label === programName)[0]
    if(!openedPrograms.find(({label}) => label === program.label)) {
      setOpenedPrograms([...openedPrograms, program])
    }
    setSelectedWindow(program.label)
  }

  function closeProgram(program: programType) {
    setOpenedPrograms([
      ...openedPrograms.filter(({label}) => label!==program.label)
    ])
  }

  const message = 'Confirm leave page'

  useEffect(() => {
    function listener(event: any) {
      event.preventDefault()
      event.returnValue = message
      return message
    }

    window.addEventListener('beforeunload', listener)

    return () => {
      window.removeEventListener('beforeunload', listener)
    }
  }, [])

  return (
    <div>
      <OsDesktop
        programs={programs_desktop}
        openProgram={openProgram}
      />
      <OsOpenedPrograms
        data={openedPrograms}
        closeProgram={closeProgram}
        selectedWindow={selectedWindow}
        setSelectedWindow={setSelectedWindow}
      />
      <OsAppBar
        programs={programs_menu}
        openProgram={openProgram}
      />
    </div>
  )
}

export default OsProvider
