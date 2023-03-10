import { useEffect, useState } from "react";
import { useWeb3React } from "lib/useWeb3React";

export enum AccountType {
  CONTRACT = "contract",
  EOA = "eoa",
}

export default function useAccountType() {
  const { active, account, library } = useWeb3React();
  const [contractType, setContractType] = useState<AccountType | null>(null);

  useEffect(() => {
    if (!active) return;
    (async function () {
      if(!library || ! account) return 
      
      const code = await library.getCode(account);
      const type = code === "0x" ? AccountType.EOA : AccountType.CONTRACT;
      setContractType(type);
    })();
  }, [account, library, active]);

  return contractType;
}
