const About = () => (
  <div className="container">
    <h1>About This Demo</h1>
    <p>
      A simple React HangMan game made with React and TypeScript. This was a learning exercise for me to get into and
      play around with React, React Hooks and TypeScript.
    </p>
    <p>
      It is based on a tutorial from the{" "}
      <a href="https://www.youtube.com/c/TraversyMedia">Traversy Media YouTube channel</a>.
    </p>
    <p>
      But I extended it a bit, by adding a{" "}
      <a href="https://www.npmjs.com/package/random-words">random word generator</a> and the{" "}
      <a href="https://dictionaryapi.dev/">Free Dictionary API</a> for word lookups. The Free Dictionary API enabled me
      to extend this relatively simple game, with other functionalty like hints and various other things.
    </p>
  </div>
);

export default About;
