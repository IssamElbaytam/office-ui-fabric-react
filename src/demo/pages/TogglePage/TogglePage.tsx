import * as React from 'react';
import {
  Link
} from '../../../components/index';
import {
  ExampleCard,
  PropertiesTable
} from '../../components/index';
import ToggleProps from './ToggleProps';

import ToggleBasicExample from './examples/Toggle.Basic.Example';
let ToggleBasicExampleCode = require('./examples/Toggle.Basic.Example.tsx');

export default class TogglePage extends React.Component<any, any> {
  public render() {
    return (
      <div>
        <h1 className='ms-font-xxl'>Toggle</h1>
        <div><Link target='_blank' text='Toggles' url='http://dev.office.com/fabric/components/Toggle' /> provide a ui indicator for progress.</div>

        <h2 className='ms-font-xl'>Examples</h2>

        <ExampleCard title='Toggle' code={ ToggleBasicExampleCode }>
          <ToggleBasicExample />
        </ExampleCard>
        <PropertiesTable properties={ ToggleProps } />
      </div>
    );
  }
}