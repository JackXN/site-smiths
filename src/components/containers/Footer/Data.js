import { BsTwitter as Twitter } from "react-icons/bs";

import {
  RiDiscordLine as Discord,
  RiMailLine as Mail,
  RiPhoneLine as Phone
} from "react-icons/ri";

const FooterData = [
  {
    id: 2,
    category: "important",
    listItems: [
      {
        label: "Terms Of Service",
        link: "/Tos"
      },

      {
        label: "Privacy Policy",
        link: "/PrivacyPolicy"
      }
    ]
  },

  {
    id: 3,
    category: "links",
    listItems: [
      {
        label: "Home",
        link: "/"
      },
      {
        label: "About",
        link: "/about"
      },
      {
        label: "Contact",
        link: "/contact"
      },
      {
        label: "Gallery",
        link: "/gallery"
      },
      {
        label: "Get A Quote",
        link: "/quote"
      }
    ]
  },

  {
    id: 4,
    category: "Contact",
    listItems: [
      {
        label: "discord",
        icon: Discord,
        link: "/"
      },
      {
        label: "Email",
        icon: Mail,
        link: "/"
      }
    ]
  },


  {
    id: 1,
    category: 'main',
    img: '/Logo.png',
    text: 'Professional Web Design & Development Company Since 2023',
    listItems: [
        {
          label: "discord",
          icon: Discord,
          link: "/"
        },
        {
          label: "Email",
          icon: Mail,
          link: "/"
        }
      ]
  }
];

export default FooterData;
