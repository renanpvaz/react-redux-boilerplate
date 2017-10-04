import React from 'react'

import Panel from '../../components/Panel'

const App = ({ children }) => (
  <main>
    <Panel inset="l" row between="m">
      <Panel column between="s" align="center">
        <h5>Panel between inline XS</h5>
        <Panel between="xs" inline>
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
        </Panel>
      </Panel>
      <Panel column between="s" align="center">
        <h5>Panel column between XS</h5>
        <Panel between="xs" column>
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
        </Panel>
      </Panel>
    </Panel>
  </main>
)

export default App
