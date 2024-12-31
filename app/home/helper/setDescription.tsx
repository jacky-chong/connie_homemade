export const setDescription = (
  description?: string,
  details?: {
    quantity?: string;
    price?: number;
  }[]
) => {
  return (
    <div className="text-gray-600 text-sm">
      {description && <p className="mb-1">{description}</p>}
      {Array.isArray(details) &&
        details.length > 0 &&
        details.map((item, index) => (
          <p key={index} className="mb-1">
            {item?.quantity} {item?.price && ` / RM ${item?.price?.toFixed(2)}`}
          </p>
        ))}
    </div>
  );
};
