import {
  EnvelopeSimple,
  FacebookLogo,
  InstagramLogo,
  MapPin,
  Phone,
  TwitterLogo,
} from "phosphor-react";
import { Logo } from "../assets/icons/Logo";

const mediaLinks = [
  {
    link: "https://www.facebook.com/",
    icon: FacebookLogo,
  },
  {
    link: "https://www.instagram.com/",
    icon: InstagramLogo,
  },
  {
    link: "https://www.twitter.com/",
    icon: TwitterLogo,
  },
];

const contactInfo = [
  {
    icon: MapPin,
    text: "Location",
  },
  {
    icon: Phone,
    text: "Phone",
  },
  {
    icon: EnvelopeSimple,
    text: "Email",
  },
];

export const Footer = () => {
  return (
    <footer className="bg-blue-950 p-10 absolute right-0 left-0">
      <div className="flex justify-evenly">
        <div className="space-y-4">
          <div className="text-white flex gap-2">
            <Logo color="#fff" />
            Fatjon Rental
          </div>
          <ul className="space-y-6">
            {contactInfo.map((item) => (
              <li key={item.text} className="flex gap-2 text-white">
                <item.icon size={24} />
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4">
          <p className="text-white">Follow Us</p>
          <div className="flex flex-col gap-6 items-center">
            {mediaLinks.map((item) => (
              <a key={item.link} href={item.link} className="text-white">
                <item.icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
