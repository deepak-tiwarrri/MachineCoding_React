import axios from "axios";
export const fetchApi = async (query = "") => {
  try {
    const response = await axios.get(
      `https://dummyjson.com/posts/search?q=${query}`
    );
    const data = response.data;
    console.log(data);
    return data;
  } catch (error) {
    console.log("Error ", error);
    throw new Error(error);
  }
};

const debounceFunc = (fn, delay = 300) => {
  if (typeof fn !== "function") throw new Error("Not a valid function", fn);
  if (typeof delay !== "number" && delay < 0)
    throw new Error("delay is invalid");
  let timer;
  return (...args) => {
    return new Promise((resolve) => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(async () => {
        const data = await fn(...args);
        resolve(data);
      }, delay);
    });
  };
};
export const debounceQuery = debounceFunc(fetchApi, 1000);
