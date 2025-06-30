import React from 'react'
import SucursalDetail from './SucursalDetail'
import Sucursal from '../../images/Sucursal.png';
import SucursalVirtual from '../../images/SucursalVirtual.jpg';
import PanelTextImage from '../../components/common/panels/PanelTextImage';
import PanelText from '../../components/common/panels/PanelText';

export default function SucursalList() {
    return (
        <>
            <PanelText
                Titulo={"Nuestras Sucursales"}
                contenido={"Aunque Banco Digital opera principalmente en línea, entendemos que a veces necesitas una atención personalizada. Por eso, contamos con centros de atención física en ubicaciones clave:"}
            />

            <SucursalDetail
                nombreSucursal={"Sucursal Central - San José, Costa Rica"}
                imagen={Sucursal}
                horario={"Lunes a viernes, de 9:00 a.m. a 5:00 p.m."}
                telefono={"(506) 4000-0001"}
                ubicacion={"Avenida Central, entre Calle 5 y Calle 7, Edificio Banco Digital, frente a Plaza de la Cultura."} />

            <SucursalDetail
                nombreSucursal={"Sucursal Escazú - San Rafael de Escazú"}
                imagen={Sucursal}
                horario={" Lunes a viernes, de 10:00 a.m. a 6:00 p.m."}
                telefono={"(506) 4000-0002"}
                ubicacion={"Centro Comercial Escazú Village, Torre 2, piso 3, contiguo a Starbucks."} />

            <SucursalDetail
                nombreSucursal={"Sucursal Curridabat - Plaza del Sol"}
                imagen={Sucursal}
                horario={"Lunes a viernes, de 9:30 a.m. a 4:30 p.m."}
                telefono={"(506) 4000-0003"}
                ubicacion={"100 metros sur y 25 este de Plaza del Sol, diagonal al BAC San Pedro."} />

            <PanelTextImage
                titulo={"Atención Digital 24/7"}
                contenido={"Desde nuestra app o sitio web, puedes realizar tus gestiones, resolver dudas y recibir soporte sin salir de casa."}
                imagen={SucursalVirtual}
            />
        </>
    )
}
