import React from "react";
import noImage from "./no-image.jpg";
const NewsItem = (props) => {
    let {
      title,
      description,
      imageUrl,
      newsUrl,
      bgColor,
      color,
      btnMode,
      date,
      source,
      author,
    } = props;
    return (
      <>
        <div>
          <span className={`badge rounded-pill text-bg-${btnMode}`}>
            {source}
          </span>
          <div
            className="card my-2 text-justify"
            style={{ backgroundColor: `${bgColor}`, borderColor: `${color}` }}
          >
            <img
              src={imageUrl ? imageUrl : noImage}
              className="card-img-top object-fit-cover border rounded"
              alt=""
            />
            <div className="card-body">
              <h5 className="card-title" style={{ color: `${color}` }}>
                {title}
              </h5>
              <p className="card-text" style={{ color: `${color}` }}>
                {description ? description : "Read in Detail..."}
              </p>
              <p className="card-text">
                <small className="text-muted">
                  By {author ? author : "Unknown"} on{" "}
                  {new Date(date).toUTCString()}
                </small>
              </p>
              <a
                href={newsUrl}
                target="_blank"
                rel="noreferrer"
                className={`btn btn-sm btn-${btnMode}`}
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </>
    );
}

export default NewsItem;
