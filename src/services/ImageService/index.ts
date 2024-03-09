import { createApi } from "unsplash-js";

const imageService = createApi({
  accessKey: import.meta.env.VITE_UNSPLASH_ACCESS_KEY,
});

export default imageService;
