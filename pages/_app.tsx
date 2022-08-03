import '../src/styles/global.scss';
import {Provider} from "react-redux";
import {store} from "../src/redux/store";
import {FC} from "react";
import type { AppProps } from 'next/app'

const App: FC = ({ Component, pageProps }: AppProps) => {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    )
}

export default App;
