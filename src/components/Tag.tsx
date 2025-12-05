type TagProps = {
  title: string;
};

export function Tag({ title }: TagProps) {
  return (
    <span className="text-[10px] py-1 px-2 bg-yellow-light text-yellow-dark rounded-full font-bold mt-3 mb-4">
      {title}
    </span>
  );
}
