import Loader from 'react-loader-spinner';

const LoaderSpinner = () => {
  return (
    <>
      <Loader
        className="loader"
        type="Bars"
        color="orange"
        height={100}
        width={100}
      />
    </>
  );
};

export default LoaderSpinner ;