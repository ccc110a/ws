import { encode } from "https://deno.land/x/god_crypto/mod.ts";

// Converting hex to string
encode.hex("676f645f63727970746f20726f636b7321").toString(); // "god_crypto rocks!"

// Converting hex to base64
encode.hex("676f645f63727970746f20726f636b7321").base64(); // Z29kX2NyeXB0byByb2NrcyE=

// Converting base64 to hex
encode.base64("Z29kX2NyeXB0byByb2NrcyE=").hex(); // 676f645f63727970746f20726f636b7321

// Convert hex/base64 to Uint8Array
encode.base64("Z29kX2NyeXB0byByb2NrcyE="); // Uint8Array object
encode.hex("676f645f63727970746f20726f636b7321"); // Uint8Array object