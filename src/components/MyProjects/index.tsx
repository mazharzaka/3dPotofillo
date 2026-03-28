"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import projectsData from "./data";
import styles from "./MyProjects.module.css";

function ProjectCard({ project, index, total, scrollYProgress }: { project: any, index: number, total: number, scrollYProgress: any }) {
  // Define the active window for this card in the overall scroll progress
  // Each card gets 1/total of the scroll duration
  const sectionWidth = 1 / total;
  const start = index * sectionWidth;
  const end = (index + 1) * sectionWidth;

  // Refined steps within the card's window:
  // 1. Enter from left: start to start + 20%
  // 2. Stay centered: start + 20% to start + 80%
  // 3. Exit to right: start + 80% to end
  const margin = sectionWidth * 0.2;

  const x = useTransform(
    scrollYProgress,
    [start, start + margin, end - margin, end],
    ["-100vw", "0vw", "0vw", "100vw"]
  );

  const y = useTransform(
    scrollYProgress,
    [start, start + margin, end - margin, end],
    ["100vh", "0vh", "0vh", "-100vh"]
  );
  const opacity = useTransform(
    scrollYProgress,
    [start, start + margin, end - margin, end],
    [0, 1, 1, 0]
  );

  const scale = useTransform(
    scrollYProgress,
    [start, start + margin, end - margin, end],
    [0.8, 1, 1, 0.8]
  );

  return (
    <motion.div
      className={styles.projectItem}
      style={{
        x,
        y,
        opacity,
        scale,
        position: "absolute"
        // Stack cards to animate them in the same spot
      }}
    >
      {/* Corner number */}
      <span className={styles.number}>
        {String(project.id).padStart(2, "0")}
      </span>

      <motion.a
        href={project.href}
        className={styles.card}
        whileHover={{ scale: 1.02, y: -5 }}
        transition={{ duration: 0.3 }}
      >
        {/* Shimmer sweep */}
        <div className={styles.shimmer} />

        {/* Image */}
        <div className={styles.imageWrap}>
          <img
            src={project.image}
            alt={project.title}
            className={styles.projectImage}
          />
        </div>

        {/* Content */}
        <div className={styles.content}>
          <div className={styles.projectLabel}>
            {project.category} // {project.year}
          </div>
          <h3 className={styles.title}>{project.title}</h3>
          <p className={styles.description}>{project.description}</p>

          <div className={styles.tags}>
            {project.tags.map((tag: string) => (
              <span key={tag} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.a>
    </motion.div>
  );
}

function MyProjects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.stickyWrap}>
        {/* Section label */}
        <div className={styles.heading}>
          <span className={styles.headingDot} />
          <span className={styles.headingText}>Featured Projects</span>
        </div>

        {/* Ambient particles */}
        <div className={styles.particles}>
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className={styles.particle}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`
              }}
            />
          ))}
        </div>

        {/* Sequential track */}
        <div className={styles.track}>
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              total={projectsData.length}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default MyProjects;
