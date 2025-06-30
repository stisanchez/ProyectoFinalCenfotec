import React, { useState } from 'react';
import '../styles/Panels.css'

import { TabMenu } from 'primereact/tabmenu';

import History from './About/History';
import Values from './About/Values';
import SucursalList from './About/SucursalList';
import Certification from './About/Certifications';


export default function About() {
  const items = [
    { label: 'Historia', command: () => { setActiveIndex(0) } },
    { label: 'Valores', command: () => { setActiveIndex(1) } },
    { label: 'Sucursales', command: () => { setActiveIndex(2) } },
    { label: 'Certificaciones', command: () => { setActiveIndex(3) } }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (

    <div>
      <TabMenu model={items} />
      <div className='aboutUsContent'>
        {activeIndex === 0 && <History/>}
        {activeIndex === 1 && <Values/>}
        {activeIndex === 2 && <SucursalList/>}
        {activeIndex === 3 && <Certification/>}
      </div>
    </div>
  )
}
