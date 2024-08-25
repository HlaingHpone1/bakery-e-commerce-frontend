import { useQuery } from "@tanstack/react-query";
import { getAllBlogUser } from "../../api/blogService";
import { Grid } from "@mui/material";
import { loadingStore } from "../../store/isLoadingStore";
import BlogCard from "../../components/cards/BlogCard";

const Blog = () => {
  const { setBarLoading } = loadingStore();

  const { data = [] } = useQuery<BlogFormValue[]>({
    queryKey: ["blog-list-user"],
    queryFn: async () => {
      setBarLoading(true);
      const response = await getAllBlogUser();
      if (response.data.code === 200) {
        setBarLoading(false);
        return response.data.data;
      }
      setBarLoading(false);
      return [];
    },
  });

  return (
    <>
      <Grid container>
        {data.length > 0 &&
          data.map((blog: BlogFormValue, i) => {
            return (
              <Grid item key={i} lg={3} md={4} sm={6} xs={12} p={1}>
                <BlogCard blog={blog} />
              </Grid>
            );
          })}
      </Grid>
    </>
  );
};

export default Blog;
