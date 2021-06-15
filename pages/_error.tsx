function Error(props) {
  console.log("EEERROOORR ", props);
  return (
    <p>
      <h1>Something went wrong</h1>
      {/* {statusCode
        ? `An error ${statusCode} occurred on server`
        : "An error occurred on client"} */}
    </p>
  );
}

Error.getInitialProps = ({ res, err }) => {
  console.log("--------------------------");
  console.log(err);
  console.log("--------------------------");
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
