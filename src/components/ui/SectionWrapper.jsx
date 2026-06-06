import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function SectionWrapper({ children, id, style = {} }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="section"
      style={style}
    >
      {children}
    </motion.section>
  )
}
