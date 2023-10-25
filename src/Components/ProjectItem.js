import React from "react";
import { useNavigate } from "react-router-dom";

function ProjectItem({ image, name, id }) {
  const navigate = useNavigate()
  return (
    <article className="rounded-md h-72 w-80 my-6 shadow-md text-center flex flex-col justify-start hover:shadow-lg hover:transition-shadow hover:cursor-pointer" onClick={() => {navigate("/project/" + id)}}>
      <div style={{ backgroundImage: `url(${image[0]})` }} className="rounded-md w-full h-52 bg-center bg-cover bg-no-repeat" />
      <h3 className=" text-[--secondColor] text-lg font-semibold mt-2 px-5 "> &gt; <span className="hover:underline text-[--firstColor]">{name}</span> </h3>
    </article>
  );
}

export default ProjectItem;