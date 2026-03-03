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
        <p className="text-gray-400 font-serif">Check out all</p>
        <h2 className="text-4xl font-bold text-[#6b6b6b]">MY SERVICES</h2>
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
            <div className="border border-gray-400 rounded-md w-16 h-16 flex items-center justify-center">
              <Screen className="w-8 h-8 text-gray-600" />
            </div>
            <div className="flex flex-col">
              <h4 className="font-bold text-gray-600">WEB DEVELOPMENT</h4>
              <p className="text-sm text-gray-400">
                Building responsive and interactive websites using modern web technologies.
              </p>
            </div>
          </motion.div>

          <motion.div variants={item} className="flex flex-row gap-2 w-full md:w-1/2">
            <div className="border border-gray-400 rounded-md w-16 h-16 flex items-center justify-center">
              <Developer className="w-8 h-8 text-gray-600" />
            </div>
            <div className="flex flex-col">
              <h4 className="font-bold text-gray-600">MOBILE APPLICATIONS</h4>
              <p className="text-sm text-gray-400">
                Creating modern and responsive mobile applications by using Flutter
              </p>
            </div>
          </motion.div>

        </div>

        {/* row 2 */}
        <div className="flex flex-col md:flex-row gap-8 justify-between">

          <motion.div variants={item} className="flex flex-row gap-2 w-full md:w-1/2">
            <div className="border border-gray-400 rounded-md w-16 h-16 flex items-center justify-center">
              <Desgin className="w-8 h-8 text-gray-600 m-1" />
            </div>
            <div className="flex flex-col">
              <h4 className="font-bold text-gray-600">WEB DESIGN</h4>
              <p className="text-sm text-gray-400">
                Useing modern design principles to create visually appealing and functional websites.
              </p>
            </div>
          </motion.div>

          <motion.div variants={item} className="flex flex-row gap-2 w-full md:w-1/2">
            <div className="border border-gray-400 rounded-md w-16 h-16 flex items-center justify-center">
              <Mobile className="w-8 h-8 text-gray-600" />
            </div>
            <div className="flex flex-col">
              <h4 className="font-bold text-gray-600">MOBILE DESIGN</h4>
              <p className="text-sm text-gray-400">
                Creating modern UI designs for mobile applications by Flutter widgets.
              </p>
            </div>
          </motion.div>

        </div>

        {/* row 3 */}
        {/* <div className="flex flex-col md:flex-row gap-8 justify-between">

          <motion.div variants={item} className="flex flex-row gap-2 w-full md:w-1/2">
            <div className="border border-gray-400 rounded-md w-16 h-16 flex items-center justify-center">
              <Idea className="w-8 h-8 text-gray-600" />
            </div>
            <div className="flex flex-col">
              <h4 className="font-bold text-gray-600">CREATIVE IDEAS</h4>
              <p className="text-sm text-gray-400">
                Suggesting innovative solutions to enhance user experience and engagement.
              </p>
            </div>
          </motion.div>

          <motion.div variants={item} className="flex flex-row gap-2 w-full md:w-1/2">
            <div className="border border-gray-400 rounded-md w-16 h-16 flex items-center justify-center">
              <Desgin className="w-8 h-8 text-gray-600" />
            </div>
            <div className="flex flex-col">
              <h4 className="font-bold text-gray-600">BRAND DESIGN</h4>
              <p className="text-sm text-gray-400">
                Creating unique brand identities that resonate with your audience and reflect your values.
              </p>
            </div>
          </motion.div>

        </div> */}
      </motion.div>
    </>
  )
}

export default Services
