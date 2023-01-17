const crypto = require("crypto");

const {
  deterministicPartitionKey,
  generateNewHash,
  TRIVIAL_PARTITION_KEY,
} = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("should return literal TRIVIAL_PARTITION_KEY('0') when given no input", () => {
    const trivialKey = deterministicPartitionKey();

    expect(trivialKey).toBe(TRIVIAL_PARTITION_KEY);
  });

  it("should return the partition key when is in the event", () => {
    const event = { partitionKey: "someCustomKey" };

    expect(deterministicPartitionKey(event)).toEqual("someCustomKey");
  });

  it("should return same hash with same event", () => {
    const event = { foo: { bar: "zoo" } };
    const mockedHash = generateNewHash(event);

    expect(deterministicPartitionKey(event)).toEqual(mockedHash);
  });

  it("should not return same hash with diff event", () => {
    const event = { partitionKey: "someDiffCustomKey" };
    const mockedHash = generateNewHash({ foo: {} });

    expect(deterministicPartitionKey(event)).not.toEqual(mockedHash);
  });
});
