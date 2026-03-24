"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import { Icard } from "./types";
function ExperienceCard({
  id,
  company,
  logo,
  role,
  description,
  date,
  href,
  isReversed = false,
}: Icard) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div 
      className={`${styles.container} ${isReversed && styles.reverce}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {isHovered && (
        <div
          style={{
            position: "fixed",
            top: mousePosition.y,
            left: mousePosition.x,
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
            zIndex: 9999,
          }}
        >
          <Image
            src={logo}
            alt={`${company} logo`}
            width={120}
            height={120}
            style={{
              borderRadius: "50%",
              objectFit: "cover",
              boxShadow: "0 10px 20px rgba(0,0,0,0.5)",
            }}
          />
        </div>
      )}
      <div className={styles.header}>
        <div className={styles.title}>
          <span>{`${id}`}</span>

          <div className={styles.info}>
            <h3 className={styles.company}>
              {company}
              <Image
                src={logo}
                alt="Bit68"
                className={styles.logo}
                width={40}
                height={40}
              />
            </h3>
            <p className={styles.role}>{role}</p>
          </div>
        </div>

        <div className={styles.date}>{date}</div>
      </div>
      <div className={styles.body}>
        <p dangerouslySetInnerHTML={{ __html: description }} />

        <svg
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          fill="none"
          stroke="#cca362"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          className={styles.arrow}
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <polyline points="8.25 2.75,2.75 2.75,2.75 13.25,13.25 13.25,13.25 7.75"></polyline>{" "}
            <path d="m13.25 2.75-5.5 5.5m3-6.5h3.5v3.5"></path>{" "}
          </g>
        </svg>
      </div>
    </div>
  );
}

export default ExperienceCard;
