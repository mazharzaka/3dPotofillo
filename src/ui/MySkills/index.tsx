import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";

interface Skill {
  title: string;
  subtitle: string;
  logo: string;
}

export default function MySkillsCard({
  isReverse = false,
  skillsData,
}: {
  isReverse?: boolean;
  skillsData: Skill[];
}) {
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.marquee} ${isReverse ? styles.isReverse : ""}`}>
        {[...skillsData, ...skillsData].map((skill, index) => (
          <div key={index} className={styles.container}>
            <div className={styles.logo}>
              <Image src={skill.logo} alt={skill.title} fill />
            </div>
            <div className={styles.info}>
              <h2 className={styles.title}>{skill.title}</h2>
              <p className={styles.subtitle}>{skill.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export type { Skill };
