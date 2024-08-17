import { useContext } from "react";
import { LoadingContext } from "../../context/LoadingContext";
import "./css/Loading.css";

const Loading = () => {
  const { isLoading } = useContext(LoadingContext);

  return (
    <>
      {isLoading && (
        <div className="loading_section absolute top-0 left-0 z-[999] bg-black w-full h-screen opacity-75">
          <div className="banter-loader ">
            <div className="banter-loader__box"></div>
            <div className="banter-loader__box"></div>
            <div className="banter-loader__box"></div>
            <div className="banter-loader__box"></div>
            <div className="banter-loader__box"></div>
            <div className="banter-loader__box"></div>
            <div className="banter-loader__box"></div>
            <div className="banter-loader__box"></div>
            <div className="banter-loader__box"></div>
          </div>
        </div>
      )}
    </>
  );
};

export default Loading;
