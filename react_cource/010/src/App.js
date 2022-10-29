import './App.css';

function WhoAmI({name, surname, link}) {
  return (
    <div>
        <h1>My name is {name()}, surname - {surname}</h1>
        <a href="{link}">My Profile</a>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <WhoAmI name={() => {return 'John'}} surname="Smith" link="facebook.com"/>
      <WhoAmI name={() => {return 'John'}} surname="Shepard" link="vk.com"/>
    </div>
  );
}

export default App;