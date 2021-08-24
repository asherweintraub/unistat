import React from 'react';
import Card from './Card';

import Toggle from './Toggle';
import GradeMarker from './GradeMarker';

const Selector = ({ options, setOptions }) => {
  const changeOption = (e) => {
    setOptions(new Map(options.set(e.target.name, [e.target.checked, options.get(e.target.name)[1]])));
  }

  return (
    <Card className="md:sticky md:w-auto md:h-auto top-2 fixed w-screen h-3/4 z-10">
      <div className="flex md:flex-row flex-wrap md:justify-center w-full md:h-auto h-full flex-col justify-around">
        {Array.from(options).map(([name, [checked]], i) => <Toggle key={i} name={name} checked={checked} changeOption={changeOption} />)}
      </div>
    </Card>
  );
}

const Image = ({ school }) => {
  return <img src={ school.img } alt={ school.title + " cover image" } className="mb-2 col-span-full"/>
}

const Title = ({ school }) => {
  return <a href={ school.link } className="text-2xl font-bold transform hover:scale-110 transition-all col-span-full mr-auto">{ school.title }</a>
}

const Acceptance = ({ school }) => {
  return (
    <div>
      <h1 className="text-md italic">Acceptance Rate</h1>
      <p className="text-3xl">{ school.acceptance }</p>
    </div>
  )
}

const Act = ({ school }) => {
  return (
    <div>
      <h1 className="text-md italic">ACT Range</h1>
      <p className="text-3xl">{ school.act }</p>
    </div>
  )
}

const Sat = ({ school }) => {
  return (
    <div>
      <h1 className="text-md italic">Sat Range</h1>
      <p className="text-3xl">{ school.sat }</p>
    </div>
  )
}

const Cost = ({ school }) => {
  return (
    <div>
      <h1 className="text-md italic">Cost</h1>
      <p className="text-3xl">{ school.cost }</p>
    </div>
  )
}

const Grade = ({ school }) => {
  return (
    <div>
      <h1 className="text-md italic">Niche Grade</h1>
      <GradeMarker className="my-2">{ school.grade?.replace(" minus","-").replace("unavailable", "?") }</GradeMarker>
    </div>
  )
}

const Population = ({ school }) => {
  return (
    <div>
      <h1 className="text-md italic">Population</h1>
      <p className="text-3xl">{ school.population }</p>
      <p className="text-xs">(undergrads)</p>
    </div>
  )
}

const Majors = ({ school }) => {
  return (
    <div className="col-span-full md:col-span-3">
      <h1 className="text-md italic mb-2">Common Majors</h1>
      {school.majors.map((major, j) => <div key={j}><div className="flex justify-between text-sm w-full"><p>{major.title}</p><p className="italic">{major.grads}</p></div><hr className="w-full my-3"/></div>)}
    </div>
  )
}

const WordsSchool = ({ school }) => {
  return (
    <div className="col-span-full md:col-span-2">
      <p className="text-sm">What one word or phrase best describes your school?</p>
      <p className="text-xs">{ school.oneWord_school.responses }</p>
      <div className="flex flex-col items-start gap-1 mt-2">
        { school.oneWord_school.words.map(({ word, percentage }, j) =>
          <div key={j} className="h-8 w-full relative group">{ word }<div style={{ width: percentage }} className="h-full bg-blue-500 rounded-lg absolute top-0 right-0 overflow-hidden"><p className="text-white text-right text-xs p-2 opacity-0 group-hover:opacity-100 transition-opacity">{ percentage }</p></div></div>
        )}
      </div>
    </div>
  )
}

const WordsStudent = ({ school }) => {
  return (
    <div className="col-span-full md:col-span-2">
      <p className="text-sm">What one word or phrase best describes a student at your school?</p>
      <p className="text-xs">{ school.oneWord_student.responses }</p>
      <div className="flex flex-col items-start gap-1 mt-2">
        { school.oneWord_student.words.map(({ word, percentage }, j) =>
          <div key={j} className="h-8 w-full relative group">{ word }<div style={{ width: percentage }} className="h-full bg-blue-500 rounded-lg absolute top-0 right-0 overflow-hidden"><p className="text-white text-right text-xs p-2 opacity-0 group-hover:opacity-100 transition-opacity">{ percentage }</p></div></div>
        )}
      </div>
    </div>
  )
}

const ReportCard = ({ school }) => {
  return (
    <div className="col-span-full md:col-span-3">
      <h1 className="text-md italic">Niche Report Card</h1>
      <div className="grid grid-cols-fit-20 sm:grid-cols-4 gap-2 justify-items-center">
        {Object.entries(school.report).map(([title, grade], j) => <div key={j} className="text-sm text-center">{ title }<GradeMarker className="text-xl w-12 h-12 mx-auto mt-1">{ grade.replace(" minus","-").replace("unavailable", "?") }</GradeMarker></div>)}
      </div>
    </div>
  )
}

// const Rank = ({ school }) => {
//   return <p className="text-sm">You rank above <span className="italic">{ school.rank }</span> of accepted students.</p>
// }

const Scatterplot = ({ school }) => {
  return (
    <img src={ school.scatterplot } className="col-span-full md:col-span-3"/>
  )
}

export { Selector, Image, Title, Acceptance, Act, Sat, Cost, Grade, Population, Majors, WordsSchool, WordsStudent, ReportCard, Scatterplot };
