import * as Sentry from "@sentry/node";

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

Error.getInitialProps = (initialProps) => {
  const { err, res } = initialProps;

  if (err) {
    Sentry.captureException(err);
  }
  console.log("--------------------------");
  console.log(initialProps);
  console.log("--------------------------");
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
