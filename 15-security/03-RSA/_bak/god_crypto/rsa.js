import { RSA } from "https://deno.land/x/god_crypto/rsa.ts";

// Parsing public/private key
const publicKey = RSA.parseKey(Deno.readTextFileSync("./public.pem"));
const privateKey = RSA.parseKey(Deno.readTextFileSync("./private.pem"));

const cipher = await new RSA(publicKey).encrypt("Hello World");
console.log(ciper.base64());

const plain = await new RSA(privateKey).decrypt(cipher);
console.log(plain.toString());