"use client";

import React from "react";
import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "./Icons";
import { socialLinks } from "../data/contact";

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  GitHub: GithubIcon,
  LinkedIn: LinkedinIcon,
  Whatsapp: WhatsappIcon,
};

export const SocialLinks = () => {
  return (
    <div className="flex items-center gap-6">
      {socialLinks.map((link) => {
        const Icon = iconMap[link.name];
        return (
          <motion.a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            title={link.name}
            className="text-white/40 hover:text-[#cca362] transition-colors duration-300"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            {Icon && <Icon className="w-6 h-6" />}
          </motion.a>
        );
      })}
    </div>
  );
};
