import React from 'react'
import PanelText from '../../components/common/panels/PanelText'
import PanelTextImage from '../../components/common/panels/PanelTextImage'
import PanelImageText from '../../components/common/panels/PanelImageText'

import BaseIIIComplains from '../../images/BaseIIIComplains.jpg';
import ISO9001 from '../../images/ISO9001.jpg';
import ISO22301 from '../../images/ISO22301.png';
import ISO27001 from '../../images/ISO27001.jpg';
import Ley8968 from '../../images/Ley8968.jpg';
import PCIDSS from '../../images/PCIDSS.jpg';

export default function Certification() {
    return (
        <>
            <PanelText
                Titulo={"Nuestro Compromiso con la Seguridad y la Excelencia"}
                contenido={"En Banco Digital, la confianza de nuestros clientes es lo más importante. Por eso, trabajamos bajo los más altos estándares internacionales en seguridad, calidad y gestión. Cada certificación que hemos obtenido respalda nuestro compromiso con la protección de tus datos, la eficiencia de nuestros procesos y la transparencia en nuestras operaciones. Estas son algunas de las certificaciones que garantizan que estás en manos seguras:"}
            />

            <PanelTextImage
                titulo="ISO/IEC 27001 – Gestión de Seguridad de la Información"
                contenido="Certifica que protegemos los datos de nuestros clientes con los más altos estándares internacionales."
                imagen={ISO27001}
            />

            <PanelImageText
                titulo="ISO 9001 – Gestión de Calidad"
                contenido="Garantiza que nuestros procesos están orientados a la mejora continua y a la satisfacción del cliente."
                imagen={ISO9001}
            />

            <PanelTextImage
                titulo="PCI DSS – Estándar de Seguridad para la Industria de Tarjetas de Pago"
                contenido="Asegura la protección de la información financiera en transacciones con tarjetas de crédito y débito."
                imagen={PCIDSS}
            />
            <PanelImageText
                titulo="ISO 22301 – Continuidad del Negocio"
                contenido="Certifica que contamos con planes sólidos para operar incluso en situaciones de emergencia o crisis."
                imagen={ISO22301}
            />
            <PanelTextImage
                titulo="Basel III Compliance"
                contenido="Cumplimiento de los lineamientos internacionales de solvencia bancaria y gestión de riesgos."
                imagen={BaseIIIComplains}
            />
            <PanelImageText
                titulo="Ley 8968 – Protección de la Persona Frente al Tratamiento de sus Datos Personales (Costa Rica)"
                contenido="Garantiza la protección de la privacidad y el manejo responsable de la información personal."
                imagen={Ley8968}
            />
        </>
    )
}
