import { ContactItem, SocialLink } from "../types";

export const contactData: ContactItem[] = [
  {
    label: "Email",
    value: "mazharmohamed566@gmail.com",
    href: "mailto:mazharmohamed566@gmail.com",
    icon: null, // placeholder, will populate in component or use separate icon mapping
  },
  {
    label: "Phone",
    value: "+1104998568",
    href: "tel:+1104998568",
    icon: null,
  },
  {
    label: "Location",
    value: "Cairo, Egypt",
    href: null,
    icon: null,
  },
];

export const socialLinks: Omit<SocialLink, "icon">[] = [
  {
    name: "GitHub",
    href: "https://github.com/mazharzaka",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/mazhar-mohamed-568938244/",
  },
  {
    name: "Whatsapp",
    href: "https://wa.me/1104998568",
  },
];
