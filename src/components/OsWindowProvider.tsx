import React from 'react'
import {
  Window,
  WindowHeader,
  Button,
} from 'react95'
import Draggable from 'react-draggable'

import OsWrapper from './OsWrapper'
import { programType, stylesType } from '../types/core'

type OsWindowProviderProps = {
  data: programType
  onClose: () => void
  index: number
  active: boolean
  setActive: () => void
}

function OsWindowProvider({
  data,
  onClose,
  index,
  active,
  setActive
}: OsWindowProviderProps) {
  const defaultPosition = {
    y: index * 50 + 50,
    x: index * 50 + 350
  }

  return (
    <div className={`${active && 'active'}`}>
      <Draggable
        onDrag={setActive}
        handle=".window-title"
        defaultPosition={defaultPosition}
      >
        <OsWrapper onClick={setActive}>
          <Window className='window'>
            <WindowHeader active={active} className='window-title'>
              <span>{data?.label}</span>
              <div>
              <Button style={styles.button}>
                <span className='minimize-icon' />
              </Button>
              <Button style={styles.button}>
                <span className='maximize-icon-3' />
                <span className='maximize-icon' />
                <span className='maximize-icon-2' />
              </Button>
              <Button onClick={onClose} style={styles.button}>
                <span className='close-icon' />
              </Button>
              </div>
            </WindowHeader>
            <>{data?.component({data})}</>
          </Window>
        </OsWrapper>
      </Draggable>
    </div>
  )
}

const styles: stylesType = {
  button: {
    marginLeft: '3px',
    marginTop: '6px'
  },
}

export default OsWindowProvider
