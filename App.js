import React from 'react';
import {createRoot,ReactDOM} from "react-dom/client"





const heading = React.createElement("h1",{},"Hello world from React!!!!");

const jsxHeading = <h1 id='heading' >
Hello from JSX 
</h1>

const Title = () => <h1>Title</h1>

const HeadingComponent =() => {
return (
<>
<h1>Hello from component</h1>
{jsxHeading}
<Title />
<h2>Hello </h2>
</>
)
}

                
                   

console.log(heading)

const root = createRoot(document.getElementById("root"))

root.render(<HeadingComponent />)