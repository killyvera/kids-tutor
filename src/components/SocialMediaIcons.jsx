import React from "react";
import Image from "next/image";

const socialIcons = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/kidstutor.co",
    icon: "/Facebook.png",
  },
  { name: "Youtube", url: "https://www.youtube.com/@kidstutorstem", icon: "/You.png" },
  {
    name: "Instagram",
    url: "https://www.instagram.com/kidstutor.co/",
    icon: "/Instagram.png",
  },
];

const SocialMediaIcons = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-2">
      {socialIcons.map((icon) => (
        <a
          key={icon.name}
          href={icon.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={icon.icon}
            alt={icon.name}
            height={50}
            width={50}
            className="scale-75 m-w-object-contain rounded transition hover:scale-100"
          />
        </a>
      ))}
    </div>
  );
};

export default SocialMediaIcons;
