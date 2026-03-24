"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import projectsData from "./data";
import styles from "./MyProjects.module.css";

function MyProjects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0.15, 0.85], ["15%", "-15%"]);
  const smoothX = useSpring(x, { stiffness: 60, damping: 28 });

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.stickyWrap}>
        {/* Section label */}
        <div className={styles.heading}>
          <span className={styles.headingDot} />
          <span className={styles.headingText}>My Projects</span>
        </div>

        {/* Ambient particles */}
        <div className={styles.particles}>
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={styles.particle}
              style={{ animationDelay: `${i * 0.9}s` }}
            />
          ))}
        </div>

        {/* Scrolling track */}
        <motion.div className={styles.track} style={{ x: smoothX }}>
          {projectsData.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.href}
              className={styles.card}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              whileHover={{ scale: 1.03, y: -6 }}
            >
              {/* Shimmer sweep */}
              <div className={styles.shimmer} />

              {/* Corner number */}
              <span className={styles.number}>
                #{String(project.id).padStart(2, "0")}
              </span>

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
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>

                <div className={styles.tags}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default MyProjects;
