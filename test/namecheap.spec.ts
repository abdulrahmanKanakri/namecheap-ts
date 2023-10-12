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

  it("should return domain is not available", async () => {
    const payload = { DomainList: "mezoishere.net" };
    const { data } = await instance.call("namecheap.domains.check", payload);
    const isAvailabe: string = data[0].DomainCheckResult[0].$.Available;

    expect(isAvailabe).toBe("false");
  });

  it("should return domain is available", async () => {
    const payload = { DomainList: "mezoishere.com" };
    const { data } = await instance.call("namecheap.domains.check", payload);
    const isAvailabe: string = data[0].DomainCheckResult[0].$.Available;

    expect(isAvailabe).toBe("true");
  });
});
