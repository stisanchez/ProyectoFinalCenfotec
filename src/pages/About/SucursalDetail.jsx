import React from 'react'
import { Splitter, SplitterPanel } from 'primereact/splitter';
import { FaPhoneAlt } from "react-icons/fa";

export default function SucursalDetail({imagen, nombreSucursal, ubicacion, horario, telefono}) {
    return (
        <Splitter className='paneltextImage' style={{ height: '100%' }}>
            <SplitterPanel className="flex align-items-center justify-content-center info-text text-side" size={75} minSize={30}>
                <h2>{nombreSucursal}</h2>
                <p><strong>Dirección: </strong>{ubicacion}</p>
                <p><strong>Horario: </strong>{horario}</p>
                <p><FaPhoneAlt /><strong>Teléfono: </strong>{telefono}</p>
            </SplitterPanel>
            <SplitterPanel className="flex align-items-center justify-content-center image-side" size={25}>
                <img src={imagen} alt="History" />
            </SplitterPanel>
        </Splitter>
    )
}
