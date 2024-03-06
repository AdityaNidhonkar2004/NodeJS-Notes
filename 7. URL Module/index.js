import { URL } from "url";

//URL is a constructor whict takes url
const myURL = new URL("https://www.example.com:8080/p/a/t/h?query=string#hash");

console.log(myURL.hash);
console.log(myURL.host);
console.log(myURL.hostname);
console.log(myURL.port);
console.log(myURL.href);
console.log(myURL.protocol);
console.log(myURL.search);
console.log(myURL.searchParams);

//Both works same
console.log(myURL.toString);
console.log(myURL.toJSON);
