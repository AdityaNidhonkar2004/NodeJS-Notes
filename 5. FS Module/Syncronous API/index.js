import * as fs from "fs";

//Here all code is synchronous and in promise api its async

//Create dir
fs.mkdirSync("file_path", { recursive: true });

//all other codes are same just add Sync at end of func name
