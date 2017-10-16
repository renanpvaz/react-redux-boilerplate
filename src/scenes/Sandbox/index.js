import React from 'react'

import Panel from 'components/Panel'
import Button from 'components/Button'

import './sandbox.css'

const Sandbox = ({ children }) => (
  <main className="sandbox">
    <h1>{'<Button />'}</h1>
    <section className="sandbox__sample">
      <Panel between="m" inline wrap align="flex-start">
        <Button>
          button
        </Button>
        <Button to="/sandbox">
          internal link
        </Button>
        <Button href="/sandbox">
          external link
        </Button>
        <Button ghost>
          ghost
        </Button>
        <Button small>
          small
        </Button>
        <Button disabled>
          disabled
        </Button>
      </Panel>
    </section>
    <h1>{'<Panel column />'}</h1>
    <section className="sandbox__sample">
      <Panel column>
        <Panel className="sandbox__sample-box" inset="xxs">
          <samp>{'<Panel inset="xxs" />'}</samp>
        </Panel>
        <Panel className="sandbox__sample-box" inset="xs">
          <samp>{'<Panel inset="xs" />'}</samp>
        </Panel>
        <Panel className="sandbox__sample-box" inset="s">
          <samp>{'<Panel inset="s" />'}</samp>
        </Panel>
        <Panel className="sandbox__sample-box" inset="m">
          <samp>{'<Panel inset="m" />'}</samp>
        </Panel>
        <Panel className="sandbox__sample-box" inset="l">
          <samp>{'<Panel inset="l" />'}</samp>
        </Panel>
        <Panel className="sandbox__sample-box" x="l">
          <samp>{'<Panel x="l" />'}</samp>
        </Panel>
        <Panel className="sandbox__sample-box" y="l">
          <samp>{'<Panel y="l" />'}</samp>
        </Panel>
        <Panel className="sandbox__sample-box" inset="xl">
          <samp>{'<Panel inset="xl" />'}</samp>
        </Panel>
        <Panel className="sandbox__sample-box" inset="xxl">
          <samp>{'<Panel inset="xxl" />'}</samp>
        </Panel>
      </Panel>
    </section>
    <h1>{'<Panel row />'}</h1>
    <section className="sandbox__sample">
      <Panel row>
        <Panel className="sandbox__sample-box" inset="xxs">
          <samp>inset="xxs"</samp>
        </Panel>
        <Panel className="sandbox__sample-box" inset="xs">
          <samp>inset="xs"</samp>
        </Panel>
        <Panel className="sandbox__sample-box" inset="s">
          <samp>inset="s"</samp>
        </Panel>
        <Panel className="sandbox__sample-box" inset="m">
          <samp>inset="m"</samp>
        </Panel>
        <Panel className="sandbox__sample-box" inset="l">
          <samp>inset="l"</samp>
        </Panel>
        <Panel className="sandbox__sample-box" inset="xl">
          <samp>inset="xl"</samp>
        </Panel>
        <Panel className="sandbox__sample-box" inset="xxl">
          <samp>inset="xxl"</samp>
        </Panel>
      </Panel>
    </section>
    <h1>{'<Panel row />'}</h1>
    <section className="sandbox__sample">
      <Panel row>
        <Panel className="sandbox__sample-box" flex="2" inset="m">
          <samp>{'<Panel flex="2" inset="s" />'}</samp>
        </Panel>
        <Panel className="sandbox__sample-box" flex="1" inset="m">
          <samp>{'<Panel flex="1" inset="s" />'}</samp>
        </Panel>
      </Panel>
    </section>
    <h1>{'<Panel wrap />'}</h1>
    <section className="sandbox__sample">
      <Panel row wrap>
        <Panel className="sandbox__sample-box" inset="xxs">
          <samp>inset="xxs"</samp>
        </Panel>
        <Panel className="sandbox__sample-box" inset="xs">
          <samp>inset="xs"</samp>
        </Panel>
        <Panel className="sandbox__sample-box" inset="s">
          <samp>inset="s"</samp>
        </Panel>
        <Panel className="sandbox__sample-box" inset="m">
          <samp>inset="m"</samp>
        </Panel>
        <Panel className="sandbox__sample-box" inset="l">
          <samp>inset="l"</samp>
        </Panel>
        <Panel className="sandbox__sample-box" inset="xl">
          <samp>inset="xl"</samp>
        </Panel>
        <Panel className="sandbox__sample-box" inset="xl">
          <samp>inset="xl"</samp>
        </Panel>
        <Panel className="sandbox__sample-box" inset="xxl">
          <samp>inset="xxl"</samp>
        </Panel>
        <Panel className="sandbox__sample-box" inset="xl">
          <samp>inset="xxl"</samp>
        </Panel>
        <Panel className="sandbox__sample-box" inset="xs">
          <samp>inset="xs"</samp>
        </Panel>
        <Panel className="sandbox__sample-box" inset="xs">
          <samp>inset="xs"</samp>
        </Panel>
      </Panel>
    </section>
    <h1>{'<Panel between="l" row />'}</h1>
    <section className="sandbox__sample sandbox__sample--show-margin">
      <Panel between="l" row>
        <Panel className="sandbox__sample-box" inset="xxs">
          <samp>inset="xxs"</samp>
        </Panel>
        <Panel className="sandbox__sample-box" inset="xs">
          <samp>inset="xs"</samp>
        </Panel>
        <Panel className="sandbox__sample-box" inset="s">
          <samp>inset="s"</samp>
        </Panel>
        <Panel className="sandbox__sample-box" inset="m">
          <samp>inset="m"</samp>
        </Panel>
      </Panel>
    </section>
    <h1>{'<Panel between="l" column />'}</h1>
    <section className="sandbox__sample sandbox__sample--show-margin">
    <Panel between="l" column>
      <Panel className="sandbox__sample-box" inset="xxs">
        <samp>inset="xxs"</samp>
      </Panel>
      <Panel className="sandbox__sample-box" inset="xs">
        <samp>inset="xs"</samp>
      </Panel>
      <Panel className="sandbox__sample-box" inset="s">
        <samp>inset="s"</samp>
      </Panel>
      <Panel className="sandbox__sample-box" inset="m">
        <samp>inset="m"</samp>
      </Panel>
    </Panel>
  </section>
    <h1>{'<Panel row centered />'}</h1>
    <section className="sandbox__sample">
      <Panel row centered>
        <Panel className="sandbox__sample-box" inset="xxs">
          <samp>inset="xxs"</samp>
        </Panel>
        <Panel className="sandbox__sample-box" inset="xs">
          <samp>inset="xs"</samp>
        </Panel>
        <Panel className="sandbox__sample-box" inset="s">
          <samp>inset="s"</samp>
        </Panel>
        <Panel className="sandbox__sample-box" inset="m">
          <samp>inset="m"</samp>
        </Panel>
      </Panel>
    </section>
    <h1>{'<Panel column centered />'}</h1>
    <section className="sandbox__sample">
      <Panel column centered>
        <Panel className="sandbox__sample-box" inset="xxs">
          <samp>inset="xxs"</samp>
        </Panel>
        <Panel className="sandbox__sample-box" inset="xs">
          <samp>inset="xs"</samp>
        </Panel>
        <Panel className="sandbox__sample-box" inset="s">
          <samp>inset="s"</samp>
        </Panel>
        <Panel className="sandbox__sample-box" inset="m">
          <samp>inset="m"</samp>
        </Panel>
      </Panel>
    </section>
  </main>
)

export default Sandbox
