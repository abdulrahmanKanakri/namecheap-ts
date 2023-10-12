export const COMMANDS = [
  // domains
  "namecheap.domains.getList",
  "namecheap.domains.getContacts",
  "namecheap.domains.create",
  "namecheap.domains.getTldList",
  "namecheap.domains.setContacts",
  "namecheap.domains.check",
  "namecheap.domains.reactivate",
  "namecheap.domains.renew",
  "namecheap.domains.getRegistrarLock",
  "namecheap.domains.setRegistrarLock",
  "namecheap.domains.getInfo",

  // domains.dns
  "namecheap.domains.dns.setDefault",
  "namecheap.domains.dns.setCustom",
  "namecheap.domains.dns.getList",
  "namecheap.domains.dns.getHosts",
  "namecheap.domains.dns.getEmailForwarding",
  "namecheap.domains.dns.setEmailForwarding",
  "namecheap.domains.dns.setHosts",

  // domains.ns
  "namecheap.domains.ns.create",
  "namecheap.domains.ns.delete",
  "namecheap.domains.ns.getInfo",
  "namecheap.domains.ns.update",

  // domains.transfer
  "namecheap.domains.transfer.create",
  "namecheap.domains.transfer.getStatus",
  "namecheap.domains.transfer.updateStatus",
  "namecheap.domains.transfer.getList",

  // ssl
  "namecheap.ssl.create",
  "namecheap.ssl.getList",
  "namecheap.ssl.parseCSR",
  "namecheap.ssl.getApproverEmailList",
  "namecheap.ssl.activate",
  "namecheap.ssl.resendApproverEmail",
  "namecheap.ssl.getInfo",
  "namecheap.ssl.renew",
  "namecheap.ssl.reissue",
  "namecheap.ssl.resendfulfillmentemail",
  "namecheap.ssl.purchasemoresans",
  "namecheap.ssl.revokecertificate",
  "namecheap.ssl.editDCVMethod",

  // users
  "namecheap.users.getPricing",
  "namecheap.users.getBalances",
  "namecheap.users.changePassword",
  "namecheap.users.update",
  "namecheap.users.createaddfundsrequest",
  "namecheap.users.getAddFundsStatus",
  "namecheap.users.create",
  "namecheap.users.login",
  "namecheap.users.resetPassword",

  // users.address
  "namecheap.users.address.create",
  "namecheap.users.address.delete",
  "namecheap.users.address.getInfo",
  "namecheap.users.address.getList",
  "namecheap.users.address.setDefault",
  "namecheap.users.address.update",

  // domainprivacy
  "Namecheap.Whoisguard.changeemailaddress",
  "Namecheap.Whoisguard.enable",
  "Namecheap.Whoisguard.disable",
  "Namecheap.Whoisguard.getList",
  "Namecheap.Whoisguard.renew",
] as const;

export type ICommand = (typeof COMMANDS)[number];
