import { GiphyFetch } from "@giphy/js-fetch-api";

const gifService = new GiphyFetch(import.meta.env.VITE_GIPHY_ACCESS_KEY);

export default gifService;
