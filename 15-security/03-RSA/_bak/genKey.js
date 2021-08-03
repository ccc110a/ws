// 橢圓法產生 key
import * as ed from 'https://deno.land/x/ed25519/mod.ts';
const privateKey = ed.utils.randomPrivateKey();
console.log('privateKey=', privateKey)
const publicKey = await ed.getPublicKey(privateKey);
console.log('publicKey=', privateKey)
const msgHash = 'deadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef';
console.log('msgHash=', msgHash)
const signature = await ed.sign(msgHash, privateKey);
console.log('signature=', signature)
const isSigned = await ed.verify(signature, msgHash, publicKey);
console.log('isSigned=', isSigned)

