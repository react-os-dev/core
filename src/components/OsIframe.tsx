import React from 'react'
import { Frame } from 'react95'

type OsIframe = {
  src: string
  title: string
  noFrame: boolean
}

export default function OsIframe({
  src,
  title,
  noFrame
}: OsIframe) {
  const config = { ...styles.iframe, src, title }

  if (noFrame) {
    return <iframe {...config}/>
  }

  return (
    <Frame variant="field" style={styles.iframe}>
      <iframe {...config}/>
    </Frame>
  )
}

const styles = {
  iframe: {
    height: '100%',
    width: '100%'
  }
}
