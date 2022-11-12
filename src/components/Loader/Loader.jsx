import {Audio} from 'react-loader-spinner';

const Loader = () => {
  return (
    <>
      <Audio
        className="loader"
        type="Bars"
        color="blue"
        height={100}
        width={100}
        position="center"
      />
    </>
  );
};

export default Loader ;