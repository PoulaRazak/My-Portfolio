import AboutMeIcon from '../../assets/icons/subway--black-white.svg?react';
import ReactIcon from '../../assets/icons/react.svg?react';
import { Icon } from "@iconify/react";
import AnimatedCircle from '../Skillcircle';
import ITIImage from "../../assets/images/iti-logo.png"


function SkillsSection() {
    return <>
        <div className='p-16 flex flex-col gap-3 text-center' id='skills'>
            <p className="text-gray-400 font-serif">Here you can know my</p>
            <h2 className='text-4xl font-bold text-[#6b6b6b]'>SKILLS AND EXPERIENCE</h2>
        </div>
        <div className="p-12 flex flex-col md:flex-row gap-12 justify-between">
            <div className="flex flex-col gap-4 w-full md:w-1/2">
                <div className="flex flex-row gap-2 items-center">
                    <AboutMeIcon className="w-4 h-4 text-gray-400" />
                    <h3 className="font-bold text-gray-600">ABOUT ME</h3>
                </div>
                <p className="text-gray-500">
                    Frontend Developer with a strong focus on building clean, responsive, and user-friendly web and mobile interfaces. Passionate about turning UI/UX designs into high-quality, scalable applications using modern frontend technologies.
                </p>
                <div className="mt-4 max-w-xl rounded-xl border border-gray-200 p-5 flex items-center gap-4">
                    <img
                        src={ITIImage}
                        alt="ITI Logo"
                        className="w-10 h-10 object-contain"
                    />

                    <div>
                        <p className="font-semibold text-gray-900">
                            ITI – Intensive Training Program (ITP)
                        </p>
                        <p className="text-sm text-gray-600">
                            Frontend & Cross-Platform Track
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-4 w-full md:w-1/2">
                <div className="flex flex-row gap-2 items-center">
                    <AboutMeIcon className="w-4 h-4 text-gray-400" />
                    <h3 className="font-bold text-gray-600">DEVELOPMENT SKILLS</h3>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col md:flex-row gap-4 items-center">
                        <div className='flex flex-row gap-4'>
                            <AnimatedCircle
                                circleIcon={<ReactIcon className="h-9" />}
                                color='#61dafb'
                                percentage={75}
                            />

                            <AnimatedCircle
                                circleIcon={<Icon icon="lineicons:nextjs" width="36" height="36" style={{ color: "#000" }} />}
                                color='#000'
                                percentage={65}
                            />
                        </div>

                        <div className='flex flex-row gap-4'>
                            <AnimatedCircle
                                circleIcon={<Icon icon="vscode-icons:file-type-light-js" width="32" height="32" />}
                                color='#fbc02d'
                                percentage={75}
                            />

                            <AnimatedCircle
                                circleIcon={<Icon icon="material-icon-theme:html" width="32" height="32" />}
                                color='#e65100'
                                percentage={90}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4 items-center">

                        <div className='flex flex-row gap-4'>
                            <AnimatedCircle
                                circleIcon={<Icon icon="material-icon-theme:css" width="32" height="32" />}
                                color='#7e57c2'
                                percentage={90}
                            />

                            <AnimatedCircle
                                circleIcon={<Icon icon="logos:tailwindcss-icon" width="36" height="36" />}
                                color='#0ed7b5'
                                percentage={90}
                            />
                        </div>

                        <div className='flex flex-row gap-4'>
                            <AnimatedCircle
                                circleIcon={<Icon icon="logos:postman-icon" width="36" height="36" />}
                                color='#ff6c37'
                                percentage={80}
                            />

                            <AnimatedCircle
                                circleIcon={<Icon icon="proicons:nodejs" width="32" height="32" style={{ color: '#8bc34a' }} />}
                                color='#8bc34a'
                                percentage={40}
                            />
                        </div>


                    </div>

                </div>
            </div>
        </div>
    </>
}
export default SkillsSection;