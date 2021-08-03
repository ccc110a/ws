import { RSA } from "https://deno.land/x/god_crypto@v1.4.8/mod.ts";

const privateKey = RSA.parseKey(Deno.readTextFileSync("./private.pem"));
console.log('privateKey=', privateKey)
const privRsa = await new RSA(privateKey)
const cipherText = await privRsa.encrypt("Hello World");
console.log('cipherText=', cipherText.toString())
const plainText = await privRsa.decrypt(cipherText);
console.log('plainText=', plainText.toString())

//===============================
/*
const rsaPrivate = new RSA(privateKey);
await rsaPrivate.sign("Hello World");
*/
var signedMsg = await privRsa.sign("Hello World")
console.log('signedMsg=', signedMsg.toString())

const publicKey = RSA.parseKey(Deno.readTextFileSync("./public.pem"));
console.log('publicKey=', publicKey)
const pubRsa = await new RSA(publicKey)

var isVerify = await pubRsa.verify(signedMsg)
console.log('isVerify=', isVerify)

/*
// Convert it to different encoding
(await rsa.sign("Hello World")).hex();
(await rsa.sign("Hello World")).base64();
(await rsa.sign("Hello World")).base64url();
*/
/*
const publicKeyRaw = Deno.readTextFileSync("./public.pem");
const publicKey = RSA.parseKey(publicKeyRaw);
const rsaPublic = new RSA(publicKey);
await rsaPublic.verify(signature, message, options);
*/