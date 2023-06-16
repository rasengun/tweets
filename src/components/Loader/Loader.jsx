import { CirclesWithBar } from "react-loader-spinner";

import s from "./loader.module.css";

function Loader() {
  return (
    <CirclesWithBar
      height="100"
      width="100"
      color="#ff009d"
      wrapperStyle={{}}
      wrapperClass={s.loader}
      visible={true}
      outerCircleColor=""
      innerCircleColor=""
      barColor=""
      ariaLabel="circles-with-bar-loading"
    />
  );
}

export default Loader;
