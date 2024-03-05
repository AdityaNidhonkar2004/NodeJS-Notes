//ES-6 -> ECMA Script standards

//IMPORT :-
//Syntax:
// import member_to_import from “path_to_js_file”;
// You can also use an alias while importing a member.
// import Greeting as Greet from "./export.js";
// If you want to import all the members but don’t
// want to Specify them all then you can do that using
// a ' * ' star symbol.
// import * as exp from "./export.js";

//EXPORT :-
// Syntax for variable:
// export let variable_name;
// Syntax for function:
// export function function_name() {
// Statements
// }
// Syntax for class:
// export class Class_Name {
//   constructor() {
// Statements
//   }
// }

//Here while importing the file extension is necessary
import greet from "./greet.js";
greet("Aditya");
