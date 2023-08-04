import Header from "./components/Header";

function DefaultLayout({ children }) {
    return (
        <>
            <Header />
            <div className="main">{children}</div>
        </>
    );
}

export default DefaultLayout;
