// import User from  './components/User'
import Button from './components/Button'

function App() {
  const handleClick = (): void => {
    alert("Button clicked!");
  };

  return (
    <>
      <h1>React with Typescript</h1>
      <h2>Button Component Demo</h2>
      <Button label="Click Me" onClick={handleClick} />
      <Button label="Disabled Button" onClick={handleClick} disabled={true}/>
    </>
  )
}

export default App
