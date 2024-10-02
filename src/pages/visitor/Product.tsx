import { loadingStore } from "../../store/isLoadingStore";
import { useQuery } from "@tanstack/react-query";
import { getAllProductUser } from "../../api/ProductService";
import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  InputAdornment,
  Paper,
  Radio,
  RadioGroup,
  Slider,
  TextField,
  Typography,
} from "@mui/material";

import ProductCard from "../../components/cards/ProductCard";
import { SearchRounded } from "@mui/icons-material";
import { useDebouncedSearch } from "../../hooks/useDebouncedSearch";
import { useEffect, useMemo, useState } from "react";
import useCategoryList from "../../hooks/useCategoryList";
import _ from "lodash";

type Params = {
  search?: string;
  category?: string;
  minPrice?: string;
  maxPrice?: string;
  priceSort?: string;
  dateSort?: string;
};

const Product = () => {
  const [paramString, setParamString] = useState<string>("");

  const [category, setCategory] = useState<number[]>([]);
  const [priceRange, setPriceRange] = useState<number[]>([0, 5000]);
  const [priceSort, setPriceSort] = useState<string>("");
  const [dateSort, setDateSort] = useState<string>("");

  const [debouncedPriceRange, setDebouncedPriceRange] =
    useState<number[]>(priceRange);

  const { searchText, handleInputChange, handleKeyDown } =
    useDebouncedSearch(300);

  const { setBarLoading } = loadingStore();

  const debouncedSetPriceRange = useMemo(
    () =>
      _.debounce(
        (newPriceRange: number[]) => setDebouncedPriceRange(newPriceRange),
        300
      ),
    []
  );

  const handleCategoryChange = (id: number) => {
    setCategory((prevSelected: number[]) => {
      if (prevSelected.includes(id)) {
        return prevSelected.filter((categoryId) => categoryId !== id);
      } else {
        return [...prevSelected, id];
      }
    });
  };

  const handlePriceChange = (_event: Event, newValue: number | number[]) => {
    setPriceRange(newValue as number[]);
    debouncedSetPriceRange(newValue as number[]);
  };

  const { data = [] } = useQuery<ProductCard[]>({
    queryKey: ["product-list-user", paramString],
    queryFn: async () => {
      setBarLoading(true);
      const response = await getAllProductUser(paramString);
      if (response.data.code === 200) {
        setBarLoading(false);
        return response.data.data;
      }
      setBarLoading(false);
      return [];
    },
  });

  const { data: categoryList } = useCategoryList();

  useEffect(() => {
    const createParamString = () => {
      const params: Params = {};
      if (typeof searchText === "string") {
        params.search = searchText;
      }

      if (category.length > 0) {
        params.category = category.join(",");
      }

      if (debouncedPriceRange[0] > 0 || debouncedPriceRange[1] < 5000) {
        params.minPrice = debouncedPriceRange[0].toString();
        params.maxPrice = debouncedPriceRange[1].toString();
      }

      if (typeof priceSort === "string") {
        params.priceSort = priceSort;
      }

      if (typeof dateSort === "string") {
        params.dateSort = dateSort;
      }
      const newParamString = new URLSearchParams(params).toString();
      setParamString(newParamString);
    };
    createParamString();
  }, [searchText, category, debouncedPriceRange, priceSort, dateSort]);

  return (
    <Grid container my={2}>
      <Grid item smd={3} sm={5} pr={2}>
        <Paper sx={{ minHeight: "calc(90vh - 75px)", p: 2 }}>
          <Box mb={2}>
            <Typography
              variant="h6"
              component="h2"
              fontFamily="Roboto Slab"
              fontWeight={500}
            >
              Search By Name
            </Typography>
            <TextField
              size="small"
              id="outlined-start-adornment"
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchRounded />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Box mb={2}>
            <Typography
              variant="h6"
              component="h2"
              fontFamily="Roboto Slab"
              fontWeight={500}
            >
              Categories
            </Typography>
            <FormGroup>
              {categoryList?.map((cat: Category) => (
                <FormControlLabel
                  key={cat.id}
                  control={
                    <Checkbox
                      checked={category.includes(cat.id)}
                      onChange={() => handleCategoryChange(cat.id)}
                      color="secondary"
                    />
                  }
                  label={cat.name}
                />
              ))}
            </FormGroup>
          </Box>
          <Box mb={2}>
            <Typography
              variant="h6"
              component="h2"
              fontFamily="Roboto Slab"
              fontWeight={500}
            >
              Price Range:{" "}
              <span className="text-base">{`$${priceRange[0]} - $${priceRange[1]}`}</span>
            </Typography>

            <Slider
              value={priceRange}
              min={0}
              max={5000}
              color="secondary"
              onChange={handlePriceChange}
              valueLabelDisplay="auto"
              marks={[
                { value: 0, label: "$0" },
                { value: 5000, label: "$5000" },
              ]}
              step={5}
              sx={{ width: "90%" }}
            />
          </Box>

          <Box mb={2}>
            <Typography
              variant="h6"
              component="h2"
              fontFamily="Roboto Slab"
              fontWeight={500}
            >
              Sort By Price
            </Typography>
            <RadioGroup
              aria-label="priceSort"
              name="priceSortOptions"
              color="secondary"
              value={priceSort}
              onChange={(e) => setPriceSort(e.target.value)}
            >
              <FormControlLabel
                value="hightToLow"
                control={<Radio color="secondary" />}
                label="Price: Low to High"
              />
              <FormControlLabel
                value="lowToHigh"
                control={<Radio color="secondary" />}
                label="Price: High to Low"
              />
            </RadioGroup>
          </Box>

          <Box mb={2}>
            <Typography
              variant="h6"
              component="h2"
              fontFamily="Roboto Slab"
              fontWeight={500}
            >
              Sort by Newest or Oldest
            </Typography>
            <RadioGroup
              aria-label="dateSort"
              name="dateSortOptions"
              color="secondary"
              value={dateSort}
              onChange={(e) => setDateSort(e.target.value)}
            >
              <FormControlLabel
                value="newest"
                control={<Radio color="secondary" />}
                label="Newest Products"
              />
              <FormControlLabel
                value="oldest"
                control={<Radio color="secondary" />}
                label="Oldest Products"
              />
            </RadioGroup>
          </Box>
        </Paper>
      </Grid>

      <Grid item smd={9} sm={7}>
        <Grid container>
          {data.length > 0 &&
            data.map((product: ProductCard, i: number) => {
              return (
                <Grid item key={i} md={4} smd={12} xs={12} p={1}>
                  <ProductCard product={product} />
                </Grid>
              );
            })}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Product;
