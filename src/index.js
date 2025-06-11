const $links =document.getElementById('links');
const $name = document.querySelector('h1');

const data = {
  name: "Raisa Toscano",
  nickname: "Raisa",
  description: "...",
  avatar: "...",
  social: [
    {
      name: "twitter",
      url: "https://twitter.com/",
      username: "",
    },
    {
      name: "instagram",
      url: "https://instagram.com/raisatoscano",
      username: "",
    },
  ],
  links: [
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/raisatoscano//",
      color: "blue",
      emoji: "📖",
    },
    {
      name: "podcast",
      url: "https://www.youtube.com/@dotconferences",
      color: "red",
      emoji: "💬",
    },
  ],
  footer: "Made with Love on Mexico",
};

const main = () => {
    let name = document.createTextNode(data?.name);
    let links = data?.links?.map((link) => {
        return `<div class="bg-${link.color}-200 px-4 py-5 w-full flex justify-between">
          <a class="text-sm font-bold text-${link.color}-600 text-center hover:text-${link.color}-800 cursor-pointer"
            href="${link.url}" target="_blank">
            ${link.name}
          </a>
          <span>${link.emoji}</span>
        </div>`
    }).join('');
    let newItem = document.createElement("section");
    newItem.innerHTML =links;
    $links.appendChild(newItem);
    $name.appendChild(name);
}

main();