import { useQuery } from "@tanstack/react-query";
import { getAllBlogUser } from "../../api/blogService";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { loadingStore } from "../../store/isLoadingStore";

const Blog = () => {
  const navigate = useNavigate();

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
            const descriptionWords = blog.description.split(" ");
            return (
              <Grid item key={i} lg={3} md={4} sm={6} xs={12} p={1}>
                <Card
                  sx={{
                    height: "100%",
                  }}
                >
                  <CardActionArea onClick={() => navigate(`/blogs/${blog.id}`)}>
                    <CardMedia
                      component="img"
                      image={blog.attachments?.[0].attachment_url}
                      alt="green iguana"
                      sx={{
                        width: "100%",
                        height: "200px",
                      }}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {blog.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {descriptionWords.length > 50
                          ? descriptionWords.slice(0, 30).join(" ") + "..."
                          : blog.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            );
          })}
      </Grid>
    </>
  );
};

export default Blog;
