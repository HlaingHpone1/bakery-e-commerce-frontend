import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";

import UserForm, { UserFormValue } from "./UserForm";
import { getUserById, updateUser } from "../../../api/userManagement";

const UserUpdate = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data } = useQuery({
    queryKey: ["user-show"],
    queryFn: async () =>
      getUserById(Number(id)).then((response) => {
        if (response.data.code === 200) return response.data.data;
      }),
  });

  const { mutateAsync } = useMutation({
    mutationFn: async (value: UserFormValue) =>
      updateUser(Number(id), value).then((response) => {
        if (response.data.code === 201) navigate(-1);
      }),
  });

  return <>{data && <UserForm initialValue={data} fetch={mutateAsync} />}</>;
};

export default UserUpdate;
