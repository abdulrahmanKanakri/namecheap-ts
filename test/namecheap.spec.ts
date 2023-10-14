import Namecheap, { INamecheapConfig } from "../src";

describe("Namecheap", () => {
  let instance: Namecheap;

  beforeEach(() => {
    const config: INamecheapConfig = {
      // apiKey: "some-api-key",
      // apiUser: "api-user",
      // clientIp: "192.168.1.1",
      // username: "user-name",
      apiKey: "d915adb9b0ac405398def53be001110e",
      apiUser: "Kanakri",
      username: "Kanakri",
      clientIp: "5.155.10.166",
    };

    instance = new Namecheap(config, true);
  });

  it("should be defined", () => {
    expect(instance).toBeDefined();
  });

  it("should return domain is not available and is not a premium", async () => {
    const { data } = await instance.checkDomain("mezoishere.net");

    expect(data.availabe).toBe(false);
    expect(data.premium).toBe(false);
  });

  it("should return domain is available", async () => {
    const payload = { DomainList: "mezoishere.com" };
    const { data } = await instance.call("namecheap.domains.check", payload);
    const isAvailabe: string = data.DomainCheckResult.$.Available;

    expect(isAvailabe).toBe(true);
  });

  it("should return the pricing for domain registeration", async () => {
    const { data } = await instance.getDomainPrice(
      "mezoishere.com",
      "REGISTER"
    );

    expect(data).toBeInstanceOf(Array);
    expect(data).not.toHaveLength(0);
  });

  it("should return the empty pricing for domain renew", async () => {
    const { data } = await instance.getDomainPrice("mezoishere.zed", "RENEW");

    expect(data).toBeInstanceOf(Array);
    expect(data).toHaveLength(0);
  });
});
