import React from "react";

const Page = ({ params }: { params: { slug: string } }) => {
  return (
    <div>
      <h1>My Post: {params.slug}</h1>
    </div>
  );
};
export default Page;
