import NavBar from "../components/NavBar";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp
