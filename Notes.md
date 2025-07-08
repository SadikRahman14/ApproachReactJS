## <h2 align="center">React-DOM and React-Native</h2>
*React DOM is primarily used for web development, while React Native is used for mobile development. React DOM is implementation of React in Web, React Native is implementation of React in Mobile*

## <h2 align="center">npm and npx</h2>

**What is NPM?**  
  
NPM stands for *Node Package Manager*. It is a Javascript package manager and the default package manager for Node projects. NPM is installed when NodeJS is installed on a machine. It comes with a command-line interface (CLI) used to interact with the online database of NPM. , and it hosts public and private 'packages.' To add or update packages, we use the NPM CLI to interact with this database. 

Isaac Z. Schlueter developed NPM purely in Javascript. It was first released in November 2010. Ever since, NPM has had a lot of updates and has improved in terms of efficiency, speed and security. 
  

**What is NPX?**  
  
NPX stands for *Node Package eXecute*. It is simply an NPM package runner. It allows developers to execute any Javascript Package available on the NPM registry without even installing it. NPX is installed automatically with NPM version 5.2.0 and above.

*NPX does not requires to install a package, its not even its function, it just executes without installing*  

<br><br><br><br>

**<h2 align="center"> Bundler </h2>**  

*A bundler is a tool that puts together all your JavaScript code and its dependencies and throws a new JavaScript output file with everything merged, ready for the web, commonly known as the bundle file.*

A bundler is a tool that:

>Takes your project files – HTML, CSS, JS, images, etc.  

>Figures out which files are connected to each other (through import, require, etc.)   

>Combines all of them into one or a few optimized files

>Outputs a final file that the browser can understand and load efficiently

Why do we need bundlers?
Imagine your React app is made of:

>50+ .js files (components, utils, etc.)

>20+ .css files

>Some images

>3rd-party libraries like React, Axios, etc.

A bundler:

>Collects all this  
>Knows the correct order  
>Combines everything into 1 or few files  
>Optionally minifies, compresses, and optimizes it

<br><br>
**How the transfer works:**

**1. Start with an entry file**
Usually something like:
```js

// index.js
import App from './App.js';

```
<br><br>
**2. Build a dependency graph**  
It reads index.js, and sees it imports App.js.  
It then opens App.js, sees what it imports, and so on.

```css

index.js
├── App.js
│   ├── Header.js
│   ├── Footer.js
│   └── styles.css
├── config.js
└── utils/
    └── fetchData.js

```
So now it knows all the files needed.
<br><br><br>
**3. Transform the files**
Each file goes through a transformer, like:

>Babel → Converts modern JS (ES6+) into older JS browsers understand

>CSS loaders → Process CSS

>Image loaders → Inline small images or copy them

<br><br><br>
**4. Wrap the code in functions**  
The bundler wraps each file/module in a function to isolate scope.

Example output from bundler (simplified):

```js

(function(modules) {
  function require(id) {
    const fn = modules[id];
    const module = { exports: {} };
    fn(require, module, module.exports);
    return module.exports;
  }
  require(0); // start from entry point
})({
  0: function(require, module, exports) {
    const App = require(1);
    App();
  },
  1: function(require, module, exports) {
    module.exports = function App() {
      console.log('Hello from App');
    };
  }
});

```
This is what the bundle.js file actually looks like — all modules packed into one self-running function.

<br><br><br>

**5. Write the final bundle**  
Finally, the transformed and wrapped code is:

Written to a file like bundle.js
Linked in index.html

*When the browser loads bundle.js, it has everything it needs: your components, logic, styling, even images.*

<br><br>

**<h2 align="center"> package.lock and package.lock.json </h2>**

**package.lock:**  
package.json in simple terms is a manifest file that stores metadata about the project. The package.json file is the heart of any Node.js project. It is created as soon as you create a Node.js project. You can create a node.js project by running the command npm init. It would ask you information regarding the project name, project description, license, etc. If you don't want to explicitly provide all of this information, you can type the command npm init --y.

```js
{
  "name": "test_project",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "nodemon app.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.1"
  }
}
```
<br>

**package-lock.json:**  
This file is generated when we type the command npm i. It describes the exact tree that was generated to allow subsequent installs to build an identical dependency tree. It records the exact version of each installed package, that allows you to reinstall them.

**package.lock vs package.lock.json**
This file declares the dependencies your project needs, usually with version ranges:  

package.lock:
```json

{
  "dependencies": {
    "axios": "^1.3.0"
  }
}
```
 ^1.3.0 means: install version 1.3.0 or any compatible version like 1.3.1, 1.4.0, etc. — up to but not including 2.0.0.

So, package.json says:

*“I want axios, version 1.3.0 or newer, as long as it’s still version 1.x.x.”*

package-lock.json:  
This file records the exact version of every package installed, including nested dependencies.

```json

"axios": {
  "version": "1.3.2",
  ...
}
```
This means:

*“At the time of install, axios version 1.3.2 was actually used.”*

It locks down:  
Top-level packages (like axios)  
Deep nested ones too (like what axios depends on)

**Example:**   
Let’s say your package.json has:

```json
"lodash": "^4.17.0"
```
When you run npm install, NPM might fetch:

```json

"lodash": "4.17.21"
```
Then your package-lock.json will lock in:

```json

"lodash": {
  "version": "4.17.21",
  ...
}
```
*So next time anyone installs this project — even if lodash 4.17.22 is out — they’ll get exactly 4.17.21.*

<br><br><br>
## <h2 align="center"> useState and useEffect </h2>

`useState` is a function in React that allows us to create and manage **stateful variables**. When the state changes, the component **automatically re-renders** to reflect the updated value in the UI.

In the example below, imagine we update a regular variable (not using `useState`) whenever a button is clicked.

While the value **does change in memory**, React won’t know about it — so the **UI won’t update**. That’s because React doesn't track normal variables for changes.

That’s where state comes in.

By using `useState` and updating it with the `setCounter` function, React **tracks the change** and **automatically updates the UI** wherever that state is used.


```jsx

function App() {
   const [counter, setCounter] = useState(0)

  
   const increaseValue = () => {
      if(counter < 20)
         setCounter(counter + 1)
      else console.log("Not Anymore");    
  }

   const decreaseValue = () => {
      if(counter >= 1)
         setCounter(counter-1)
      else console.log("Not Anymore");
      
    
  }
  return (
    <>
      <h1>Counter : {counter}</h1>
      <button onClick={increaseValue}> Increase Value </button>
      <br /> <br />
      <button onClick={decreaseValue}> Decrease Value </button>
      <p>Whats Up {counter}</p>

    </>
  )
}

export default App
```



