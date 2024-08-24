import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { getBlogDetailById } from "../../api/blogService";
import EmblaCarousel from "../../components/carousel/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import { IconButton, Typography } from "@mui/material";
import { ArrowBackRounded } from "@mui/icons-material";
import { loadingStore } from "../../store/isLoadingStore";

const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true };

const BlogDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { setBarLoading } = loadingStore();

  const { data = null } = useQuery<BlogFormValue>({
    queryKey: ["blog-list-user"],
    queryFn: async () => {
      setBarLoading(true);
      const response = await getBlogDetailById(Number(id));
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
      <IconButton onClick={() => navigate(-1)}>
        <ArrowBackRounded />
      </IconButton>
      {data?.attachments && (
        <>
          <EmblaCarousel slides={data?.attachments} options={OPTIONS} />
          <Typography gutterBottom variant="h3" align="center" component="h1">
            {data.title}
          </Typography>
          <Typography variant="body2" component="p" marginBottom={2}>
            {data.description}
          </Typography>
        </>
      )}
    </>
  );
};

export default BlogDetail;
