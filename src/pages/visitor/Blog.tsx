import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getAllBlogUser } from "../../api/blogService";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

const Blog = () => {
  const [expandedIndices, setExpandedIndices] = useState<number[]>([]);

  const toggleDescription = (index: number) => {
    if (expandedIndices.includes(index)) {
      setExpandedIndices(expandedIndices.filter((i) => i !== index));
    } else {
      setExpandedIndices([...expandedIndices, index]);
    }
  };

  const { data = [] } = useQuery<BlogFormValue[]>({
    queryKey: ["blog-list-user"],
    queryFn: async () =>
      await getAllBlogUser().then((response) => {
        if (response.data.code === 200) {
          console.log(response.data.data);

          return response.data.data;
        }
      }),
  });

  return (
    <>
      <Grid container>
        {data.length > 0 &&
          data.map((blog: BlogFormValue, i) => {
            const isExpanded = expandedIndices.includes(i);
            const shortDescription =
              blog.description.split(" ").slice(0, 30).join(" ") + "...";
            const descriptionToShow = isExpanded
              ? blog.description
              : shortDescription;

            return (
              <Grid item key={i} lg={3} md={4} sm={6} xs={12} p={1}>
                <Card>
                  <CardActionArea
                    sx={{
                      height: "100%",
                    }}
                  >
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
                        {descriptionToShow}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  {blog.description.split(" ").length > 30 && (
                    <CardActions>
                      <Button
                        variant="text"
                        color="secondary"
                        onClick={() => toggleDescription(i)}
                      >
                        {isExpanded ? "See Less" : "See More"}
                      </Button>
                    </CardActions>
                  )}
                </Card>
              </Grid>
            );
          })}
      </Grid>
    </>
  );
};

export default Blog;
