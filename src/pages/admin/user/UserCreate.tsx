import UserForm, { UserFormValue } from "./UserForm";
import { useMutation } from "@tanstack/react-query";
import { createUser } from "../../../api/userManagement";
import { useNavigate } from "react-router-dom";

const UserCreate = () => {
  const navigate = useNavigate();

  const { mutateAsync } = useMutation({
    mutationFn: async (values: UserFormValue) =>
      await createUser(values)
        .then((response) => {
          if (response.data.code === 201) {
            navigate(-1);
            return response.data;
          }
        })
        .catch((e) => console.log(e)),
  });

  return (
    <>
      <UserForm fetch={mutateAsync} />
    </>
  );
};

export default UserCreate;
