import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const [selectMode, setSelectMode] = useState<boolean>(false);

  return <Component {...pageProps} selectMode={selectMode} setSelectMode={setSelectMode} />
}

export default MyApp
