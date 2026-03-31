import React from "react";
import { MailIcon, PhoneIcon, MapPinIcon } from "./Icons";
import { contactData } from "../data/contact";
import { ContactButton } from "./ContactButton";
import { SocialLinks } from "./SocialLinks";

export const Footer = () => {
  return (
    <footer
      className="w-full bg-slate-950/80 backdrop-blur-xl border-t border-white/[0.06] pt-16 pb-8 px-6 sm:px-10 md:px-16 overflow-hidden"
      style={{
        backgroundImage:
          "radial-gradient(#cca362 0.5px, transparent 0.5px), radial-gradient(#cca362 0.5px, #050532 0.5px)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-start">
          {/* Column 1: Branding */}
          <div className="flex flex-col gap-4">
            <a href="#" className="flex items-center gap-1 group">
              <span
                className="text-2xl font-black tracking-tight"
                style={{ color: "rgba(255,255,255,0.9)" }}
              >
                Mazhar
                <span className="text-blue-400">.</span>
              </span>
            </a>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Building magical digital experiences with precision and passion.
              Let's create something extraordinary together.
            </p>
            <div className="mt-2">
              <SocialLinks />
            </div>
          </div>

          {/* Column 2: Contact Info */}
          <div className="flex flex-col gap-6">
            <h3 className="text-white/90 font-bold text-lg tracking-tight">
              Get in Touch
            </h3>
            <div className="flex flex-col gap-4">
              {contactData.map((item) => (
                <div key={item.label} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 group-hover:bg-[#cca362]/10 group-hover:text-[#cca362] transition-colors duration-300">
                    {item.label === "Email" && <MailIcon className="w-5 h-5" />}
                    {item.label === "Phone" && (
                      <PhoneIcon className="w-5 h-5" />
                    )}
                    {item.label === "Location" && (
                      <MapPinIcon className="w-5 h-5" />
                    )}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white/50 text-[10px] uppercase tracking-widest font-bold">
                      {item.label}
                    </span>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-white/80 hover:text-white transition-colors duration-200 text-sm font-medium"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-white/80 text-sm font-medium">
                        {item.value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: CTA */}
          <div className="flex flex-col gap-6 items-start md:items-end">
            <h3 className="text-white/90 font-bold text-lg tracking-tight md:text-right w-full">
              Ready to Collaborate?
            </h3>
            <p className="text-white/40 text-sm md:text-right leading-relaxed max-w-xs">
              Have a project in mind or just want to say hi? My inbox is always
              open.
            </p>
            <ContactButton />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/20 text-xs tracking-wide">
            © {new Date().getFullYear()} Mazhar. All rights reserved.
          </p>
          <p className="text-white/20 text-xs tracking-wide flex items-center gap-2">
            Designed with <span className="text-red-500/40">❤️</span> for the
            web
          </p>
        </div>
      </div>
    </footer>
  );
};
