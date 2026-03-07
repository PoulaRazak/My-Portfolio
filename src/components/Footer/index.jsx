import Message from "../../assets/icons/message.svg?react";
import Facebook from "../../assets/icons/facebook.svg?react";
import Instgram from "../../assets/icons/instagram.svg?react";
import Linkedin from "../../assets/icons/linkedin.svg?react";
import { Icon } from '@iconify/react';


function Footer() {
    return <>
        <div className="flex flex-row justify-center items-center gap-8 p-16" id="contact">

            <div className="flex flex-col gap-4 items-center">
                <a href="https://wa.me/201220800797" target="_blank" >
                    <Icon icon="hugeicons:whatsapp" width="24" height="24"
                        className="hover:text-green-600 hover:scale-110 transition-all duration-300"
                        style={{ color: 'var(--icon-color)' }} />
                </a>
                <p style={{ color: 'var(--text-subtle)' }}>+201220800797</p>
            </div>

            <div className="flex flex-col gap-2 items-center">
                <a href="mailto:polarazak0@gmail.com" target="_blank">
                    <Message className="w-7 h-7 hover:text-blue-600 hover:scale-110 transition-all duration-300"
                        style={{ color: 'var(--icon-color)' }} />
                </a>
                <p style={{ color: 'var(--text-subtle)' }}>polarazak0@gmail.com</p>
            </div>
        </div>
        <hr className="w-1/2 mx-auto" style={{ borderColor: 'var(--border)' }} />
        <div className="flex flex-row item-center justify-center p-6">
            <a href='https://www.facebook.com/pepo.razak' target="_blank">
                <Facebook className="w-6 h-6 mx-4 hover:text-blue-600" style={{ color: 'var(--icon-color)' }} />
            </a>
            <a href='https://www.instagram.com/polar_razak' target="_blank">
                <Instgram className="w-6 h-6 mx-4 hover:text-pink-600" style={{ color: 'var(--icon-color)' }} />
            </a>
            <a href='https://www.linkedin.com/in/poula-razak-02a23b1b5' target="_blank">
                <Linkedin className="w-6 h-6 mx-4 hover:text-blue-600" style={{ color: 'var(--icon-color)' }} />
            </a>
        </div>
        <div className="flex flex-row item-center justify-center p-6 relative">
            <div className="text-center" style={{ color: 'var(--text-subtle)' }}>Copyright© 2026 Poula - All rights reserved.</div>
        </div>
    </>
}
export default Footer;