import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Frame } from 'react95'
import { React95Provider, OsProvider, OsWindow } from '../src'

const Notes = ({ data }) => (
  <OsWindow size={[540,480]}>
    <Frame variant='field' style={{minHeight: '100%', padding: 20}}>
      <p>
        {data.label} is a grat window!
      </p>
    </Frame>
  </OsWindow>
)

const App = () => (
  <React95Provider>
    <OsProvider
      programs={[
        {
          menu: true,
          desktop: true,
          label: "Programs",
          icon: "appwizard-2",
          component: props => <Notes {...props} />
        },
        // more programs here...
      ]}
    />
  </React95Provider>
)

ReactDOM.render(<App />, document.getElementById('root'))
