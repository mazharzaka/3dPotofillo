import React from "react";

export interface ContactItem {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string | null;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: React.FC<{ className?: string }>;
}
