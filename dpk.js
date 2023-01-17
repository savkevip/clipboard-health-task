const crypto = require("crypto");

const TRIVIAL_PARTITION_KEY = "0";
const MAX_PARTITION_KEY_LENGTH = 256;
const HASH_TYPE = "sha3-512";
const HASH_VALUE = "hex";

const generateNewHash = (event) =>
  crypto.createHash(HASH_TYPE).update(JSON.stringify(event)).digest(HASH_VALUE);

const deterministicPartitionKey = (event) => {
  if (!event) return TRIVIAL_PARTITION_KEY;

  const candidate = event?.partitionKey
    ? event.partitionKey
    : generateNewHash(event);

  if (typeof candidate !== "string") JSON.stringify(candidate);

  return candidate.length > MAX_PARTITION_KEY_LENGTH
    ? crypto.createHash(HASH_TYPE).update(candidate).digest(HASH_VALUE)
    : candidate;
};

module.exports = {
  deterministicPartitionKey,
  generateNewHash,
  TRIVIAL_PARTITION_KEY,
};
