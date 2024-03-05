//Module Wrapper :-

// Before a module's code is executed, Node.js will wrap it with a function wrapper that looks like the following:

// (function(exports, require, module, __filename, __dirname) {
//     // Module code actually lives in here
// });
// By doing this, Node.js achieves a few things:

// It keeps top-level variables (defined with var, const or let) scoped to the module rather than the global object.
// It helps to provide some global-looking variables that are actually specific to the module, such as:
// The module and exports objects that the implementor can use to export values from the module.
// The convenience variables __filename and __dirname, containing the module's absolute filename and directory path.
// Essentially, this wrapper is used to configure your module, and it enables the use of the variables exports, require, module, __filename, and __dirname.

(function (exports, require, module, __filename, __dirname) {
  console.log("Hello from IIFE");
})();

//Gives the file path where we are writing code
console.log(__filename);

//Gives the directory/folder  path where we are writing code
console.log(__dirname);
