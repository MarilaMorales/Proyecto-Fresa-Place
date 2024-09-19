
import "../Styles/AboutUs.css";


function AcercaDe() {
  return (
    <div>
        <div className='map-section'>
            <div className='gmap-frame'>
            <iframe width="100%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=El%20Roble,%20Costa%20Rica+(Fresa%20Place)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps devices</a></iframe>
            </div>
        </div>
        <div className="textAboutUs">
          <p>
          Sobre mí

       ¡Hola! Soy una joven apasionada por el mundo de la educación preescolar y el arte de las manualidades.
       Desde que tengo memoria, siempre he disfrutado creando cosas con mis propias manos, 
       y he encontrado una maravillosa forma de combinar mi amor por los niños y mi creatividad. 
       
       Me dedico a hacer adornos personalizados, piñatas, murales y una variedad de artículos de fiesta,
        diseñados con cariño y atención a cada detalle.

      Cada pieza que creo está pensada para aportar un toque especial y único a tus celebraciones,
       desde cumpleaños hasta eventos escolares. Mi misión es hacer que tus momentos especiales 
       brillen con colores, formas y detalles únicos, logrados a través del arte hecho a mano. 
       ¡Me encantaría ayudarte a transformar tu próxima fiesta en un recuerdo inolvidable!</p>
        </div>
    </div>
  );
}

export default AcercaDe;