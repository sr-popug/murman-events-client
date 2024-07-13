import Info from "./components/Info/Info";
import Main from "./components/Main/Main";
import Today from "./components/Today/Today";

export default function Home() {
    return(
        <main>
            <Main />
            <Info />
            <Today />
        </main>
    )
}