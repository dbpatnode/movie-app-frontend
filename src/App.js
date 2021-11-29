import React from "react"
import { Provider } from "react-redux"
import setupStore from "./redux/setupStore"
import "./main.scss"

const store = setupStore()
console.log(store.getState())

function App() {
  return (
    <Provider store={store}>
      <h1>Movie App</h1>
    </Provider>
  )
}

export default App
