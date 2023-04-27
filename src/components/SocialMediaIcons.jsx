import React from "react";

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
          <img
            src={icon.icon}
            alt={icon.name}
            className="h-50 w-70 object-contain rounded transition hover:scale-125"
          />
        </a>
      ))}
    </div>
  );
};

export default SocialMediaIcons;