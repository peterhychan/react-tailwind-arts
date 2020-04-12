import React from "react";
//rafce
const ImageCard = ({ image }) => {
  const tags = image.tags.split(",");

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        src={image.webformatURL}
        alt={image.webformatURL}
        className="w-full h-64"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-blue-500 text-xl mb-2">
          Photo by {image.user}
        </div>
        <ul>
          <li>
            <strong>Views: </strong>
            {image.views}
          </li>
          <li>
            <strong>Downloads: </strong>
            {image.downloads}
          </li>
          <li>
            <strong>Likes: </strong>
            {image.likes}
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="inline-block bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mt-2"
          >
            # {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ImageCard;
