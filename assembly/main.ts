//@nearfile
import { context, storage, logging, PersistentVector } from "near-runtime-ts";
// --- contract code goes below

export function registerAccount(): void {
  logging.log("registerAccount: " + context.sender);
  storage.set<string>("registeredAccount:" + context.sender, "1");
}

export function isRegistered(accountId: string): bool {
  logging.log('acccountId:' + accountId);
  return storage.contains("registeredAccount:" + accountId);
}