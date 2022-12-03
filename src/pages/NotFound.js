//import { Helmet } from 'react-helmet';

const NotFound = () => {
  return (
    <main style={{ textAlign: "center" }}>
      {/* <Helmet> */}
      <b style={{ fontSize: 64 }}>404</b>
      <p>Sorry, server cannot find the resource :(</p>
      {/* </Helmet>  */}
    </main>
  );
};

export default NotFound;