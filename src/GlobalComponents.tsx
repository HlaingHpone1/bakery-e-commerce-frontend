import Router from "./router/Router";
import Loading from "./components/loading/Loading";
import AlertBox from "./components/alertBox/AlertBox";
import DeleteModalBox from "./components/modalBox/DeleteModalBox";

import { deleteModalStore } from "./store/deleteModalStore";

const GlobalComponents = () => {
  const { open } = deleteModalStore();

  return (
    <>
      <Router />
      <AlertBox />
      <Loading />
      {open && <DeleteModalBox />}
    </>
  );
};

export default GlobalComponents;
