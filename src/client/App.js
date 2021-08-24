import React, { useState } from 'react';
import Header from './components/Header';
import * as Options from './components/Options';
import Login from './components/Login';
import Schools from './components/Schools';

import Card from './components/Card';

const App = () => {
  const [schools, setSchools] = useState([]);
  const [options, setOptions] = useState(new Map([
    ['images', [true, (school) => <Options.Image school={school} />]],
    ['title', [true, (school) => <Options.Title school={school} />]],
    ['acceptance', [true, (school) => <Options.Acceptance school={school} />]],
    ['act', [false, (school) => <Options.Act school={school} />]],
    ['sat', [true, (school) => <Options.Sat school={school} />]],
    ['cost', [true, (school) => <Options.Cost school={school} />]],
    ['grade', [true, (school) => <Options.Grade school={school} />]],
    ['majors', [false, (school) => <Options.Majors school={school} />]],
    ['one word: school', [false, (school) => <Options.WordsSchool school={school} />]],
    ['one word: student', [false, (school) => <Options.WordsStudent school={school} />]],
    ['population', [false, (school) => <Options.Population school={school} />]],
    // ['rank', [true, (school) => <Options.Rank school={school} />]],
    ['report', [false, (school) => <Options.ReportCard school={school} />]],
    ['scatterplot', [false, (school) => <Options.Scatterplot school={school} />]]
  ]));

  return (
    <div className="flex flex-col items-center justify-start bg-blue-900 min-h-screen py-8">
      <Header />
      { schools.length ? <Options.Selector options={options} setOptions={setOptions} /> : null }
      { schools.length
        ? <Schools schools={schools} options={options} />
        : <Login schools={schools} setSchools={setSchools} />
      }
    </div>
  );
}

export default App;
