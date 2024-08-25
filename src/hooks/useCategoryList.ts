import { useQuery } from "@tanstack/react-query";
import { getDropDwonCategories } from "../api/categoryService";

const useCategoryList = () => {
  const { data = [] } = useQuery({
    queryKey: ["category-list"],
    queryFn: async () =>
      getDropDwonCategories().then((response) => {
        if (response.data.code === 200) return response.data.data;
      }),
  });

  return { data };
};

export default useCategoryList;
