import imgHistory from '../../images/HistoryBD.png';
import PanelTextImage from '../../components/common/panels/PanelTextImage';

export default function History() {
    return (
        <PanelTextImage 
            titulo = "Nuestra Hitoria"
            contenido = "Banco Digital nació en el año 2018 con un propósito claro: transformar la banca tradicional y ponerla al alcance de todos, en cualquier momento y desde cualquier lugar. En un mundo donde la tecnología avanza a pasos agigantados, creímos que era momento de crear una nueva forma de hacer banca: más ágil, más transparente y 100% digital. Iniciamos como una pequeña startup con un equipo apasionado por la innovación y el deseo de democratizar los servicios financieros. En 2019, lanzamos nuestra primera aplicación móvil, permitiendo a nuestros clientes abrir cuentas, realizar transferencias y gestionar sus finanzas desde la palma de su mano, sin necesidad de acudir a una sucursal física. Desde entonces, hemos crecido junto a nuestros usuarios, superando los 500.000 clientes en toda la región y desarrollando productos como tarjetas sin comisiones, cuentas de ahorro inteligentes y préstamos digitales en minutos. En 2022, nos consolidamos como uno de los bancos digitales más confiables del país, gracias a nuestro enfoque en la seguridad, la experiencia del usuario y la inclusión financiera. Hoy, en Banco Digital, seguimos escribiendo nuestra historia con la misma visión con la que comenzamos: ofrecer una banca más humana, cercana y adaptada al ritmo de la vida moderna. Porque para nosotros, el futuro de la banca ya está aquí. Y es digital."
            imagen = {imgHistory}
        />
    )
}
