import React from "react";

const Post = ({ id, title, body, views, userId, reactions }) => {
  return (
    <div className="w-full max-w-2xl mx-auto p-7 bg-white shadow-md rounded-2xl border border-gray-300">
      <div className="mb-4">
        <p className="text-sm text-gray-500 px-4">
          Post No: <span className="font-semibold">{id}</span>
        </p>
        <p className="text-sm text-gray-500 px-4">
          UserId: <span className="font-semibold">{userId}</span>
        </p>
      </div>
      <h3 className="mb-2 text-2xl font-bold text-purple-600 p-4">
        Title: {title}
      </h3>
      <p className="text-gray-700 mb-4">{body}</p>
      <div className="mb-4">
        <h4 className="font-semibold mb-2">Reactions:</h4>
        <ul className="flex gap-6">
          <li className="flex flex-col items-center text-gray-600 text-sm">
            <span>{reactions.likes} 👍</span>
            <span>{reactions.dislikes} 👎</span>
          </li>
        </ul>
      </div>
      <p className="text-gray-500 text-sm">🕶️{views}</p>
    </div>
  );
};

export default Post;
