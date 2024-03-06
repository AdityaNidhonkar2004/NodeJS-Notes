import * as fs from "fs"; //Import *(everything) from fs

//Here no try and catch block needed we passs call-back function
//Create a folder

fs.mkdir("file_path", function (error) {
  if (error) throw error;
  console.log("dir created");
});
