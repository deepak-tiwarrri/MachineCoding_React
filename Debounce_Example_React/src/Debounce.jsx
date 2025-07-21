import React, { useCallback, useEffect, useState } from "react";
import { debounceQuery } from "./utils/_debounce";
import Post from "./Post";
const URL = `https://api.frontendeval.com/fake/food`;
const Debounce = () => {
  const [inputText, setInputText] = useState("");
  const [posts, setPosts] = useState([]);
  const handleChange = (value) => {
    setInputText(value);
  };

  const getData = useCallback(async (inputText) => {
    // if (!inputText.trim()) {
    //   setPosts([]);
    //   return;
    // }
    const { posts } = await debounceQuery(inputText);
    setPosts(posts);
  }, []);

  useEffect(() => {
    getData(inputText);
  }, [inputText, getData]);

  return (
    <div className="flex justify-center flex-col items-center ">
      <h1 className="font-semibold text-2xl mt-4">Debounce Api Call</h1>
      <input
        type="text"
        className="p-4 w-1/2 m-4 border-2 rounded-md"
        value={inputText}
        onChange={(e) => handleChange(e.target.value)}
      />
      <div className="flex justify-center flex-col items-center">
        <h3>List show posts title</h3>
        {posts && posts.length === 0 ? (
          <p>No Data found</p>
        ) : (
          posts.map((item) => <Post key={item.id} {...item} />)
        )}
      </div>
    </div>
  );
};

export default Debounce;
