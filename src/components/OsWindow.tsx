import React from 'react'
import { Frame } from 'react95'

const getSize = (value: number[]) => ({
  width: value[0],
  height: value[1]
})

type OsWindowProps = {
  footer?: string,
  size: number[],
  children: React.ReactElement
}

export default function OsWindow({
  footer = '',
  size = [500, 500],
  children
}: OsWindowProps) {
  return (
    <div>
      {size.length ? (
        <div style={getSize(size)}>
          {children}
        </div>
      ) : null}
      {footer ? (
        <Frame variant='well' style={styles.footer}>
          {footer}
        </Frame>
      ): null}
    </div>
  )
}

const styles = {
  footer: {
    marginTop: '3px',
    padding: '0.1rem 0.25rem',
    width: '100%'
  },
}