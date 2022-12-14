import React from 'react';

function Results({ results }) {
  return (
    <div className="">
      {results.map(result => (
        <h1 key={result.title}>{result.title}</h1>
      ))}
    </div>
  );
}

export default Results;
