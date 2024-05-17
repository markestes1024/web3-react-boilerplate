import { useEffect } from "react";
import TokenSwap from "./components/token-swap/TokenSwap";
import usePrices from "./hooks/usePrices";
import { cleanupImgCache } from "./utils/icon";
import {Web3ModalProvider} from "./components/web3modal/Web3ModalProvider"

function App() {
  const { getPrices } = usePrices();
  useEffect(() => {
    getPrices()
    return () => {
      // global clean up when unmount
      cleanupImgCache()
    }
  }, [])
  return (<>
    <Web3ModalProvider>
      <div>
        <nav class="bg-gray  dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-600 dark:border-gray-600">
          <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
              <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Floswap</span>
            </a>   
            <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                <w3m-button />
          </div>                 
          </div>  
        </nav>
        <TokenSwap /> 
      </div>
    </Web3ModalProvider>
    </>);
}

export default App;
