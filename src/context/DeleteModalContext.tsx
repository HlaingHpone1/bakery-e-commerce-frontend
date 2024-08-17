import { createContext, useState } from "react";

type DeleteModalProvider = {
  children: React.ReactNode;
};

type DeleteModalProps = {
  open: boolean;
  setOpen: (value: boolean) => void;
  confirm: boolean;
  setConfirm: (value: boolean) => void;
};

const defaultValue: DeleteModalProps = {
  open: false,
  setOpen: () => {
    console.warn("setOpen function is not wrapped in a Provider");
  },
  confirm: false,
  setConfirm: () => {
    console.warn("setOpen function is not wrapped in a Provider");
  },
};

export const DeleteModalContext = createContext<DeleteModalProps>(defaultValue);

export const DeleteModalBoxProvider = ({ children }: DeleteModalProvider) => {
  const [open, setOpen] = useState<boolean>(false);
  const [confirm, setConfirm] = useState<boolean>(false);

  return (
    <DeleteModalContext.Provider
      value={{
        open,
        setOpen,
        confirm,
        setConfirm,
      }}
    >
      {children}
    </DeleteModalContext.Provider>
  );
};
