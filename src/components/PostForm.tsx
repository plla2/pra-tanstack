import { useState } from "react";

const PostForm = ({
  onSubmit,
}: {
  onSubmit: (post: { [key: string]: string }) => void;
}) => {
  const [post, setPost] = useState<{ [key: string]: string }>({
    title: "",
    body: "",
  });

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(post);
    onSubmit(post);
    setPost({ title: "", body: "" });
  };

  const renderField = (label: string) => (
    <div>
      <label htmlFor="">{label}</label>
      <input
        onChange={handleChangeInput}
        type="text"
        name={label.toLowerCase()}
        value={post[label.toLowerCase()]}
      />
    </div>
  );

  return (
    <form onSubmit={handleSubmit}>
      {renderField("Title")}
      {renderField("Body")}
      <button type="submit">제출</button>
    </form>
  );
};

export default PostForm;
