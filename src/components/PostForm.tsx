import { useState } from "react";

const PostForm = () => {
  const [post, setPost] = useState<{ [key: string]: string }>({
    title: "",
    body: "",
  });
  console.log(post);
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPost({ ...post, [e.target.name]: e.target.value });
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
    <form>
      {renderField("Title")}
      {renderField("Body")}
    </form>
  );
};

export default PostForm;
