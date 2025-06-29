import React, { useState } from 'react';
import { TabMenu } from 'primereact/tabmenu';
import History from './About/History';
import '../styles/AboutUs/AboutUs.css'

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
        {activeIndex === 1 && <p>Content for Mision Vision Valores tab</p>}
        {activeIndex === 2 && <p>Content for Sucursales</p>}
        {activeIndex === 3 && <p>Content for Certificaciones</p>}
      </div>
    </div>
  )
}
