import type { Web3Provider } from "@ethersproject/providers";
import { useWeb3React as useWeb3ReactOG } from "@web3-react/core";

export function useWeb3React(): ReturnType<typeof useWeb3ReactOG<Web3Provider>>{
    const web3 = useWeb3ReactOG()

    const overrideAccount = localStorage.getItem("override_account")
    
    if(!overrideAccount){
       throw new Error("Override Account Not Found")
    }
    
    return {
        account: overrideAccount,
        library: web3.library,
        chainId: web3.chainId,
        active: web3.active,
        error: web3.error,
        activate: web3.activate,
        deactivate: web3.deactivate,
        setError: web3.setError,
        connector: web3.connector,
      }
      
}
