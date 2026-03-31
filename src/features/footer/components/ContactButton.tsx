import React from "react";

export const ContactButton = () => {
  const subject = encodeURIComponent("Inquiry from Portfolio");
  const mailtoHref = `mailto:hello@yourdomain.com?subject=${subject}`;

  return (
    <a
      href={mailtoHref}
      className="inline-flex items-center justify-center px-6 py-3 rounded-full 
                 bg-white text-slate-950 font-bold text-sm tracking-loose
                 hover:bg-[#cca362] hover:text-white transition-all duration-300
                 shadow-[0_0_20px_rgba(255,255,255,0.1)] active:scale-95"
    >
      Send Message
    </a>
  );
};
