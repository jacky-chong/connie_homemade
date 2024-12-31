export const setTitle = (code: string, title: string) => {
  return (
    <div className="flex gap-2">
      <span className="font-bold">{code}</span>
      <span>{title}</span>
    </div>
  );
};
