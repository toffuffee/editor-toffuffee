import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Editor from './components/editor/Editor'
import './App.css'

function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Editor</h1>
      <Editor/>
    </>
  )
}

export default App
