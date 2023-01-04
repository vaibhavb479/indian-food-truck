import "../styles/globals.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {
  // useEffect(() => {
  //   import("bootstrap/dist/js/bootstrap");
  // }, []);
  // useEffect(() => {
  //   import("jquery/dist/jquery.min.js");
  // }, []);

  // useEffect(() => {
  //   typeof document !== undefined ? require('bootstrap/dist/js/bootstrap') : null
  // }, [])
  return (
     <Component {...pageProps} />
  );
}

export default MyApp;
