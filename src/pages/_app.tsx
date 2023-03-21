import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";

export type Todos = { id: number; text: string }[];

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}
