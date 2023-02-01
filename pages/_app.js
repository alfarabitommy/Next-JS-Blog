import NavBar from "../components/NavBar";
import '../styles/globals.css';

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
