# Section 1

- TS = JS + Type system , Type system is what we are going to learn
- Type System :
  -Help us to catch errors during development ( in JS you cant find bugs until you run app)
  -Uses "type annotations" to analyze our code ( syntaxes over JS code to help us detect errors
  -Only active during development
  -Doesn't provide any performance optimization
- browser doesn't know anything about TS ( JavaScript with type annotations )
  TS compiler take your TS code and execute JS

`npm i g typescript ts-node tslint`
`tsc --help`

Some VisualCode settings

- prettier extension
- better comments
- tslint extension
- single quotes in prettier
- tab size 2
- render whitespace none

`npm i axios`

- Create `mkdir index.ts` file to fetch url [link](https://jsonplaceholder.typicode.com/todos/1)

- Remember we cant execute code in ts file now we need to compile it first to give us JS code
- before you run the below code delete index.js

`tsc index.ts`

- notice index.js combiled

now run code and check console

`node index.js`

- instead of everytime we do
  `tsc index.ts`
  then
  `node index.js`
  we will use ts-node tool to combine both
  will cache what is going to be sent to the browser in JS
  with all type annotations we will write in TS files
  So index.js is what is going to be sent to the browser

`ts-node index.ts`

- Question here why typescript is handy here ?
- Run the code in index2.ts and check console
  we executed the code and didnt know there is bugs inside it
  Note: Read carefully comments in index2.ts
- Ts will help us to catch errors while we are coding

- Lets move to index3.ts
