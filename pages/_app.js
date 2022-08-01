import '../src/styles/global.scss';
import {Provider} from "react-redux";
import {store} from "../src/redux/store";

export default function App({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    )
}
