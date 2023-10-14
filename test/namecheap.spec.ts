import Namecheap, { INamecheapConfig } from "../src";

describe("Namecheap", () => {
  let instance: Namecheap;

  beforeEach(() => {
    const config: INamecheapConfig = {
      ApiKey: "some-api-key",
      ApiUser: "api-user",
      ClientIp: "192.168.1.1",
      UserName: "user-name",
    };

    instance = new Namecheap(config, true);
  });

  it("should be defined", () => {
    expect(instance).toBeDefined();
  });

  it("should return domain is not available and is not a premium", async () => {
    const { availabe, premium } = await instance.checkDomain("mezoishere.net");

    expect(availabe).toBe(false);
    expect(premium).toBe(false);
  });

  it("should return domain is available", async () => {
    const payload = { DomainList: "mezoishere.com" };
    const { data } = await instance.call("namecheap.domains.check", payload);
    const isAvailabe: string = data[0].DomainCheckResult[0].$.Available;

    expect(isAvailabe).toBe("true");
  });

  it("should return the pricing for domain registeration", async () => {
    const { data } = await instance.getDomainPrice(
      "mezoishere.com",
      "REGISTER"
    );

    expect(data).toBeDefined();
  });

  it("should return the empty pricing for domain renew", async () => {
    const { data } = await instance.getDomainPrice("mezoishere.zed", "RENEW");

    expect(data).toBeUndefined();
  });
});
