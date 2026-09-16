type BlogCardProps = {
  title: string;
  description: string;
  author: string;
  date: string;
  image?: string;
};

export default function BlogCard({
  title,
  description,
  author,
  date,
  image,
}: BlogCardProps) {
  return (
    <div className="card h-100">
      {image ? (
        <img
          src={image}
          className="card-img-top"
          alt={title}
          style={{ height: "200px", objectFit: "cover" }}
        />
      ) : (
        <div
          className="d-flex align-items-center justify-content-center bg-light"
          style={{ height: "200px" }}
        >
          Cover Image
        </div>
      )}

      <div className="card-body">
        <h5 className="card-title">{title}</h5>

        <p className="card-text">
          {description}
        </p>

        <small className="text-muted">
          {author} • {date}
        </small>
      </div>
    </div>
  );
}