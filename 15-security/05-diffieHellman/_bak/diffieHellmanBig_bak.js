import * as bwt from "https://denopkg.com/chiefbiiko/bwt@v0.6.0/mod.ts";

const alice = { ...bwt.generateKeyPair() };
const bob = { ...bwt.generateKeyPair() };

alice.stringify = bwt.createStringify(alice.secretKey, {
  kid: bob.kid,
  publicKey: bob.publicKey
});

bob.parse = bwt.createParse(bob.secretKey, {
  kid: alice.kid,
  publicKey: alice.publicKey
});

const iat = Date.now();
const exp = iat + 1000;

const token = alice.stringify(
  { typ: bwt.Typ.BWTv0, kid: alice.kid, iat, exp },
  { info: "jwt sucks" }
);

console.log("alice seals and gets this token to bob:", token);

const contents = bob.parse(token);

console.log("bob opens it...:", JSON.stringify(contents));
