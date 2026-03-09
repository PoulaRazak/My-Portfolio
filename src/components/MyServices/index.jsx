import Screen from '../../assets/icons/screen.svg?react';
import Mobile from '../../assets/icons/mobile.svg?react';
import Desgin from '../../assets/icons/design.svg?react';
import Developer from '../../assets/icons/developer-mode.svg?react';
import { motion } from 'motion/react';


function Services() {

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const item = {
    hidden: {
      opacity: 0,
      y: 24,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <>
      <motion.div
        className="p-12 md:p-16 flex flex-col gap-3 text-center"
        id="services"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
      >
        <p className="font-serif" style={{ color: 'var(--text-subtle)' }}>Check out all</p>
        <h2 className="text-4xl font-bold" style={{ color: 'var(--text-heading)' }}>MY SERVICES</h2>
      </motion.div>

      <motion.div
        className="flex flex-col gap-6 p-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
      >
        {/* row 1 */}
        <div className="flex flex-col md:flex-row gap-8 justify-between">

          <motion.div variants={item} className="flex flex-row gap-2 w-full md:w-1/2">
            <div className="rounded-md w-16 h-16 flex items-center justify-center flex-shrink-0"
              style={{ border: '1px solid var(--border-medium)' }}>
              <Screen className="w-8 h-8" style={{ color: 'var(--icon-color)' }} />
            </div>
            <div className="flex flex-col">
              <h4 className="font-bold" style={{ color: 'var(--icon-color)' }}>WEB DEVELOPMENT</h4>
              <p className="text-sm" style={{ color: 'var(--text-subtle)' }}>
                Building responsive and interactive websites using modern web technologies.
              </p>
            </div>
          </motion.div>

          <motion.div variants={item} className="flex flex-row gap-2 w-full md:w-1/2">
            <div className="rounded-md w-16 h-16 flex items-center justify-center flex-shrink-0"
              style={{ border: '1px solid var(--border-medium)' }}>
              <Developer className="w-8 h-8" style={{ color: 'var(--icon-color)' }} />
            </div>
            <div className="flex flex-col">
              <h4 className="font-bold" style={{ color: 'var(--icon-color)' }}>MOBILE APPLICATIONS</h4>
              <p className="text-sm" style={{ color: 'var(--text-subtle)' }}>
                Creating modern and responsive mobile applications by using Flutter
              </p>
            </div>
          </motion.div>

        </div>

        {/* row 2 */}
      </motion.div>
    </>
  )
}

export default Services
