import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Timeline({ milestones }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  return (
    <div ref={containerRef} className="relative w-full max-w-3xl mx-auto py-16">
      {/* Animated progress line */}
      <div className="absolute left-[calc(50%+1.5px)] top-0 w-1 h-full bg-gray-800">
        <motion.div
          className="absolute top-0 w-full bg-red-600"
          style={{ 
            height: '100%',
            scaleY: scrollYProgress,
            transformOrigin: 'top'
          }}
        />
      </div>

      {/* Timeline items */}
      <div className="relative">
        {milestones.map((milestone, index) => {
          const threshold = 1 / (milestones.length + 1) * (index + 1);
          const color = useTransform(
            scrollYProgress,
            [threshold - 0.1, threshold],
            ["rgb(156, 163, 175)", "rgb(249, 115, 22)"]
          );

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`flex items-center mb-12 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              {/* Content */}
              <div className="w-1/2 px-8">
                <div className={`${
                  index % 2 === 0 ? 'text-right' : 'text-left'
                }`}>
                  <motion.h3 
                    className="text-xl font-bold mb-2"
                    style={{ color }}
                  >
                    {milestone.title}
                  </motion.h3>
                  <p className="text-gray-400 mb-2">{milestone.date}</p>
                  <p className="text-white">{milestone.description}</p>
                </div>
              </div>

              {/* Timeline point */}
              <motion.div 
                className="w-4 h-4 rounded-full relative z-10 translate-x-[2px]"
                style={{ backgroundColor: color }}
              >
                <motion.div
                  className="absolute w-full h-full rounded-full -z-10"
                  style={{ backgroundColor: color, opacity: 0.3 }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1.5 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>

              {/* Spacer */}
              <div className="w-1/2" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
