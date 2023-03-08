import './education.scss'
import { useEffect, useState } from 'react';

// export default function Education() {
//   return (
//     <div className='education' id='education'>
//       <h1>EDUCATION </h1>
//       <p>Software Development</p>
//     </div>
//   )
// }


function createCard(film) {
  return (
    <div className='card' key={film.title}>
      <img src={film.poster} alt={film.title} />
      <div className='content'>
        <h3>{film.title}</h3>
      </div>
    </div>
  );
}

export default function Education() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('https://api.npoint.io/08b47134d6a0d35e5fb3/languages')
      .then((res) => res.json())
      .then((data) => {
        console.log('mimi', data);
        setMovies(data);
      });
  }, []);

  return (
    <div>
    <div className='education' id='education'>
      <div className='edu'>
    <h1 className='back'>EDUCATION  BACKGROUND</h1>
<br></br>
    <h2>MORINGA SCHOOL</h2>
    <h3>Software Development(2023)</h3>
    <ol >
      <li>HTML</li>
      <li>CSS</li>
      <li>JAVASCRIPT</li>
      <li>REACT</li>
      <li>RUBY</li>
      <li>SQLITE</li>
      <li>ACTIVE RECORD</li>
      <li>SINATRA</li>
    </ol>
    <br></br>
 <h2>JOMO KENYATTA UNIVERSITY OF AGRICULURE AND TECHNOLOGY</h2>
 <h3>Diploma in Business Information and Technology(2017)</h3>
 <ol >
      <li>Computer organization</li>
      <li>Fundamentals of Computer systems</li>
      <li>Data communication and Networks</li>
      <li>Organizational behaviour</li>
      <li>Object Oriented Programming Techniques</li>
    </ol>
    <br></br>
    <h2>ACWICT</h2>
    <ol >
      <li>Fundametals of BPO</li>
      <li>Transcription</li>
      <li>Customer Service</li>
      <li>Internet Research</li>
      <li>Telesales/ Telemarketing</li>
    </ol>
    <br></br>
    <h2>MARY LEAKEY GIRLS HIGH SCHOOL</h2>
    <br></br>
    <br></br>
    <h1>WORK EXPERIENCE</h1>
    <ol >
      <li>Transcription</li>
      <li>Call center Agent</li>
      <li>Sales</li>
    </ol>

    <p></p>
    </div>
    <div>
      {movies.map((film) => createCard(film))}
      </div>
    </div>
    </div>
  );
}
