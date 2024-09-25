import "../Styles/AboutUs.css";
import React from "react";
import LogoTransparente from "../IMG/LogoTransparente.png";

function AcercaDe() {
  return (
    <div className='map-section'>
      <div className='gmap-frame'>
        <iframe 
          width="100%" 
          height="400" 
          frameBorder="0" 
          scrolling="no" 
          marginHeight="0" 
          marginWidth="0" 
          src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=El%20Roble,%20Costa%20Rica+(Fresa%20Place)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
          <a href="https://www.gps.ie/">gps devices</a>
        </iframe>
      </div>
      <div className="imageAboutUs">
        <div className="overlay">
          <p id="sobreMi">
            Sobre mí
            ¡Hola! Soy una joven apasionada por el mundo de la educación preescolar y el arte de las manualidades.<br />
            Desde que tengo memoria, siempre he disfrutado creando cosas con mis propias manos,<br />
            y he encontrado una maravillosa forma de combinar mi amor por los niños y mi creatividad.<br />
            Me dedico a hacer adornos personalizados, piñatas, murales y una variedad de artículos de fiesta,<br />
            diseñados con cariño y atención a cada detalle.<br />
            Cada pieza que creo está pensada para aportar un toque especial y único a tus celebraciones,<br />
            desde cumpleaños hasta eventos escolares. Mi misión es hacer que tus momentos especiales<br />
            brillen con colores, formas y detalles únicos, logrados a través del arte hecho a mano.<br />
            ¡Me encantaría ayudarte a transformar tu próxima fiesta en un recuerdo inolvidable!<br />
          </p>
          <div className="logo-container">
            <img id="logoAbout" src={LogoTransparente} alt="Logo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AcercaDe;









// import "../Styles/AboutUs.css";
// import React from "react";
// import LogoTransparente from "../IMG/LogoTransparente.png"






// function AcercaDe() {
//   return (
//     <div className='map-section'>
//             <div className='gmap-frame'>
//             <iframe width="100%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=El%20Roble,%20Costa%20Rica+(Fresa%20Place)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps devices</a></iframe>
//             </div>
//     <div className="imageAboutUs">
//       <div className="overlay">
//         <p id="sobreMi">
//                     Sobre mí

//             ¡Hola! Soy una joven apasionada por el mundo de la educación preescolar y el arte de las manualidades.<br></br>
//             Desde que tengo memoria, siempre he disfrutado creando cosas con mis propias manos, <br></br>
//             y he encontrado una maravillosa forma de combinar mi amor por los niños y mi creatividad. <br></br>

//             Me dedico a hacer adornos personalizados, piñatas, murales y una variedad de artículos de fiesta,<br></br>
//             diseñados con cariño y atención a cada detalle.<br></br>

//             Cada pieza que creo está pensada para aportar un toque especial y único a tus celebraciones,<br></br>
//             desde cumpleaños hasta eventos escolares. Mi misión es hacer que tus momentos especiales <br></br>
//             brillen con colores, formas y detalles únicos, logrados a través del arte hecho a mano. <br></br>
//             ¡Me encantaría ayudarte a transformar tu próxima fiesta en un recuerdo inolvidable!<br></br>

//         </p>
//         <img id="logoAbout" src={LogoTransparente} alt="Logo"/>
//       </div>
//     </div>
//     </div>
//   );
// }



// export default AcercaDe;