import PanelTextImage from '../../components/common/panels/PanelTextImage';
import PanelImageText from '../../components/common/panels/PanelImageText';
import MisionBD from '../../images/MisionBD.jpg';
import VisionBD from '../../images/VisionBD.jpg';

export default function Values() {
    return (
        <>
            <PanelTextImage 
                titulo="Misión"
                contenido = "Brindar soluciones financieras innovadoras, seguras y accesibles a través de plataformas digitales, mejorando la vida de nuestros clientes y facilitando su crecimiento personal y empresarial. Nos comprometemos a ofrecer un servicio ágil, transparente y centrado en la confianza."
                imagen = {MisionBD}
            />
            <PanelImageText
                titulo="Visión"
                contenido="Ser el banco digital líder en América Latina, reconocido por transformar la experiencia bancaria mediante la tecnología, la inclusión financiera y un enfoque humano que inspire progreso en cada cliente."
                imagen={VisionBD}
            />
        </>
    )
}
