// @flow
import React from 'react';
import {Tabs, TabList, TabPanel, Tab} from '@blueprintjs/core';
import Impresiones from './Impresiones/Impresiones'
import Historial from '../components/Historial/Historial'

const Home = props => {
  return (
    <Tabs>
      <TabList className="pt-large Navbar">
          <Tab>Impresiones</Tab>
          <Tab>Historial</Tab>
          <Tab>Usuarios</Tab>
          <Tab>Funcionarios</Tab>
      </TabList>
      <TabPanel>
        <Impresiones />
      </TabPanel>
      <TabPanel>
        <Historial/>
      </TabPanel>
      <TabPanel>
          Hello
      </TabPanel>
      <TabPanel>
          Fourth panel
      </TabPanel>
    </Tabs>
  );
}

export default Home;
