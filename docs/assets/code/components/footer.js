import React from 'react';

const logo = "https://andreabenedetti.github.io/dd-15/assets/img/Logo_DensityDesign.svg";
const polimi = "https://andreabenedetti.github.io/dd-15/assets/img/polimi.svg";

const faculty = ["Michele Mauri", "Ángeles Briones", "Gabriele Colombo", "Simone Vantini", "Salvatore Zingale"],
assistants = ["Andrea Benedetti", "Lea Mara Fabiano", "Alessandra Facchin", "Beatrice Gobbo", "Tommaso Elli", "Jacopo di Iorio", "Anna Riboldi"];

class Footer extends React.Component {
  render() {
    return (
      <footer>
      <div className="container">
      <div className="logo">
      <img src={logo} alt="DensityDesign Lab" className="density--logo" />
      <img src={polimi} alt="Politecnico di Milano" />
      </div>

      <div id="faculty">
      <h1>Faculty</h1>
      <ul>
      {faculty.map(faculty => (
        <li key={faculty}>{faculty}</li>
      ))}
      </ul>
      </div>

      <div id="assistants">
      <h1>Teaching Assistants</h1>
      <ul>
      {assistants.map(assistants => (
        <li key={assistants}>{assistants}</li>
      ))}
      </ul>
      </div>

      <div id="contacts">
      <p>The FSDS is a Synthesis lab that takes place at Politecnico di Milano, in the last year of the Master's Degree in Communication Design between September 2019 and February 2020.</p>
      <ul>
      <li><a href="https://www.facebook.com/densitydesign"><i className="fab fa-facebook-f" style={{ marginRight: "1rem" }}></i></a> <a href="https://twitter.com/densitydesign"><i className="fab fa-twitter" style={{ marginRight: "1rem" }}></i></a> <a href="https://www.instagram.com/densitydesign/"><i className="fab fa-instagram"></i></a></li>
      <li><a href="http://densitydesign.org/"><i className="fas fa-globe-europe"></i> densitydesign.org</a></li>
      <li><a href="mailto:info@densitydesign.org"><i className="fas fa-envelope"></i> email</a></li>
      </ul>
      </div>
      </div>
      </footer>
    )
  }
}

export default Footer
