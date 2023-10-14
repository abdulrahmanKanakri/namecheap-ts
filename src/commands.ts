export enum Commands {
  // domains
  DOMAINS_GETLIST = "namecheap.domains.getList",
  DOMAINS_GETCONTACTS = "namecheap.domains.getContacts",
  DOMAINS_CREATE = "namecheap.domains.create",
  DOMAINS_GETTLDLIST = "namecheap.domains.getTldList",
  DOMAINS_SETCONTACTS = "namecheap.domains.setContacts",
  DOMAINS_CHECK = "namecheap.domains.check",
  DOMAINS_REACTIVATE = "namecheap.domains.reactivate",
  DOMAINS_RENEW = "namecheap.domains.renew",
  DOMAINS_GETREGISTRARLOCK = "namecheap.domains.getRegistrarLock",
  DOMAINS_SETREGISTRARLOCK = "namecheap.domains.setRegistrarLock",
  DOMAINS_GETINFO = "namecheap.domains.getInfo",

  // domains.dns
  DOMAINS_DNS_SETDEFAULT = "namecheap.domains.dns.setDefault",
  DOMAINS_DNS_SETCUSTOM = "namecheap.domains.dns.setCustom",
  DOMAINS_DNS_GETLIST = "namecheap.domains.dns.getList",
  DOMAINS_DNS_GETHOSTS = "namecheap.domains.dns.getHosts",
  DOMAINS_DNS_GETEMAILFORWARDING = "namecheap.domains.dns.getEmailForwarding",
  DOMAINS_DNS_SETEMAILFORWARDING = "namecheap.domains.dns.setEmailForwarding",
  DOMAINS_DNS_SETHOSTS = "namecheap.domains.dns.setHosts",

  // domains.ns
  DOMAINS_NS_CREATE = "namecheap.domains.ns.create",
  DOMAINS_NS_DELETE = "namecheap.domains.ns.delete",
  DOMAINS_NS_GETINFO = "namecheap.domains.ns.getInfo",
  DOMAINS_NS_UPDATE = "namecheap.domains.ns.update",

  // domains.transfer
  DOMAINS_TRANSFER_CREATE = "namecheap.domains.transfer.create",
  DOMAINS_TRANSFER_GETSTATUS = "namecheap.domains.transfer.getStatus",
  DOMAINS_TRANSFER_UPDATESTATUS = "namecheap.domains.transfer.updateStatus",
  DOMAINS_TRANSFER_GETLIST = "namecheap.domains.transfer.getList",

  // ssl
  SSL_CREATE = "namecheap.ssl.create",
  SSL_GETLIST = "namecheap.ssl.getList",
  SSL_PARSECSR = "namecheap.ssl.parseCSR",
  SSL_GETAPPROVEREMAILLIST = "namecheap.ssl.getApproverEmailList",
  SSL_ACTIVATE = "namecheap.ssl.activate",
  SSL_RESENDAPPROVEREMAIL = "namecheap.ssl.resendApproverEmail",
  SSL_GETINFO = "namecheap.ssl.getInfo",
  SSL_RENEW = "namecheap.ssl.renew",
  SSL_REISSUE = "namecheap.ssl.reissue",
  SSL_RESENDFULFILLMENTEMAIL = "namecheap.ssl.resendfulfillmentemail",
  SSL_PURCHASEMORESANS = "namecheap.ssl.purchasemoresans",
  SSL_REVOKECERTIFICATE = "namecheap.ssl.revokecertificate",
  SSL_EDITDCVMETHOD = "namecheap.ssl.editDCVMethod",

  // users
  USERS_GETPRICING = "namecheap.users.getPricing",
  USERS_GETBALANCES = "namecheap.users.getBalances",
  USERS_CHANGEPASSWORD = "namecheap.users.changePassword",
  USERS_UPDATE = "namecheap.users.update",
  USERS_CREATEADDFUNDSREQUEST = "namecheap.users.createaddfundsrequest",
  USERS_GETADDFUNDSSTATUS = "namecheap.users.getAddFundsStatus",
  USERS_CREATE = "namecheap.users.create",
  USERS_LOGIN = "namecheap.users.login",
  USERS_RESETPASSWORD = "namecheap.users.resetPassword",

  // users.address
  USERS_ADDRESS_CREATE = "namecheap.users.address.create",
  USERS_ADDRESS_DELETE = "namecheap.users.address.delete",
  USERS_ADDRESS_GETINFO = "namecheap.users.address.getInfo",
  USERS_ADDRESS_GETLIST = "namecheap.users.address.getList",
  USERS_ADDRESS_SETDEFAULT = "namecheap.users.address.setDefault",
  USERS_ADDRESS_UPDATE = "namecheap.users.address.update",

  // domainprivacy
  WHOISGUARD_CHANGEEMAILADDRESS = "Namecheap.Whoisguard.changeemailaddress",
  WHOISGUARD_ENABLE = "Namecheap.Whoisguard.enable",
  WHOISGUARD_DISABLE = "Namecheap.Whoisguard.disable",
  WHOISGUARD_GETLIST = "Namecheap.Whoisguard.getList",
  WHOISGUARD_RENEW = "Namecheap.Whoisguard.renew",
}

export type Command = `${Commands}`;
