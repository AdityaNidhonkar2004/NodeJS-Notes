//Path Module:
// The node:path module provides utilities for working with file and directory paths. It can be accessed using:

import path from "path";

//path.basename() :- Gives last portion of path
// output : index.js
console.log(path.basename("c:\\nodejs\\index.js"));
//output : index (removes extension)
console.log(path.basename("c:\\nodejs\\index.js", "js"));

//path.dirname() :- Gives directory of given path
//output : c:\nodejs
console.log(path.dirname("c:\\nodejs\\index.js"));
//path.extname :- Gives extension of file
console.log(path.extname("c:\\nodejs\\index.js"));

//path.join(string,string,string,...) :- generates the path based on given string
console.log(path.join("c:", "nodejs", "redux-toolkit", "react-redux"));
console.log(path.join("c:", "nodejs", "redux-toolkit", "react-redux", ".."));

//path.normalised() :-
console.log(path.normalize("c:\\\\node\\\\react\\express\\\\features"));

//path.parse() :- Gives the object of file path and its information
console.log(path.parse("c:\\nodejs\\index.js"));
