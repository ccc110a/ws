
import keypair from "https://dev.jspm.io/keypair"
// var keypair = require('keypair');
 
var pair = keypair()
await Deno.writeTextFile("./public.pem", pair.public);
await Deno.writeTextFile("./private.pem", pair.private);
console.log(pair.public);
console.log(pair.private);
