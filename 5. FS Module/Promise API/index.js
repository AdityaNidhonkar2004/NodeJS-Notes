import * as fs from "fs/promises";

//Creating a Directory/Folder
try {
  await fs.mkdir("c:\\dummyjs\\nodejs", { recursive: true });
  console.log("Directory created");
} catch (error) {
  console.log(error);
}

//Read the Content of the folder
try {
  const files = await fs.readdir("c:\\dummyjs\\nodejs");
  //iterate through all files preset in folder(nodejs)
  for (const file of files) {
    console.log(file);
  }
} catch (error) {
  console.log(error);
}

//Remove Folder/Directory
//Here the path must exists with all the folders present and then it removes last folder
try {
  await fs.rmdir("c:\\dummyjs\\nodejs");
} catch (error) {
  console.log(error);
}

//Create and Write files:
//we can provide path if not provided it create file in our current dir
try {
  await fs.writeFile("Readme.md", "Hello folks !!!");
  console.log("write in file");
} catch (error) {
  console.log(error);
}
//Read a file
//If  you dont provide a flag i.e "utf-8" it give a buffer
try {
  const data = await fs.readFile("Readme.md", "utf-8");
  console.log(data);
} catch (error) {
  console.log(error);
}

//Append data
try {
  const data = await fs.appendFile("Readme.md", "nodejs is gr8");
  console.log(data);
} catch (error) {
  console.log(error);
}

//Copy file : copies content of one file to another
try {
  await fs.copyFile("Readme.md", "info.txt");
  console.log(data);
} catch (error) {
  console.log(error);
}

//Get File Information :
try {
  const data = await fs.stat("info.txt");
  console.log(data);
  console.log(data.isDirectory());
  console.log(data.isFile());
} catch (error) {
  console.log(error);
}
