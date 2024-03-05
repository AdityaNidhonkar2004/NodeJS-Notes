//Module :-
//  Modules are the blocks of encapsulated code that communicate with an external application on the basis of their related functionality

//SYNTAX : const module = require('module_name');

// Modules are of three types:

// 1)Core Modules
// 2)local Modules
// 3)Third-party Modules

// 1)Core Modules: Node.js has many built-in modules that are part of the platform and come with Node.js installation.These modules can be loaded into the program by using the required function
//Ex:http,os,fs,path ...etc

// 2)Local Modules: Unlike built-in and external modules, local modules are created locally in your Node.js application

// 3)Third-party modules: Third-party modules are modules that are available online using the Node Package Manager(NPM)
// Example:

// npm install express
// npm install mongoose

//EXAMPLES

// This will allows us to use that function from that "greet.js" file and we can use it right here
const greet = require("./greet");

// .js extension doesnt affect
// const greet = require("./greet.js");

//function get executed in index.js file
greet("Aditya");

// This will allows us to use that variable from that "people.js" file and we can use it right here
const p1 = require("./people.js");
console.log(p1);

//Similarly for p2 p3
const { p2, p3 } = require("./people.js");
console.log(p2);
console.log(p3);
