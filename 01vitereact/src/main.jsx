import React from 'react'
import ReactDOM from 'react-dom/client'
import {jsx as _jsx} from "react/jsx-runtime.js"
import App from './App.jsx'

function MyApp()
{
    return (
        <div>
            <h1>Custom App</h1>
        </div>
    )
}
// const ReactElement={
//     type: 'a',
//     props: {
//         href: 'http://google.com',
//         target: '_blank'
//     },
//     children: 'click me to visit google'
// }

const anotherElement = (
    <a href="https://google.com" target='_blank'>
    Visit google</a>
)

const anotherUser="Javascript and react"

const reactElement = React.createElement(
    'a',
    {href: 'http://google.com',target: '_blank'},
    'click me to visit google',
    anotherElement
)
ReactDOM.createRoot(document.getElementById('root')).
render(
  
reactElement 
 
)
