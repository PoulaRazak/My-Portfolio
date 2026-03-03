import profileImage from '../../assets/images/profile.jpeg';

function Home() {
    return <>
        <div className='flex md:flex-row flex-col'>
            <div className='flex-1 p-10'>
                <img src={profileImage} alt="Profile Image" className="grayscale hover:grayscale-0 transition duration-500" />
            </div>
            <div className='flex-1 p-10 flex flex-col gap-5' id='home'>
                <div className='text-4xl font-bold mb-2 text-gray-600'>
                    <h2>HELLO.</h2>
                    <h2>I'M POULA</h2>
                    <h2>RAZAK</h2>
                </div>
                <div>
                    <p className='text-gray-500 mb-6'>
                        A passionate Frontend developer with experience in creating dynamic and responsive websites using modern technologies. Skilled in HTML, CSS, JavaScript, and popular frameworks like React. Committed to delivering high-quality code and exceptional user experiences.
                    </p>
                </div>
                <div>
                    <a
                        href="https://drive.google.com/drive/folders/1rfF9s89OGIZSXrpbWMXSf3DLxAfqvm4V?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block border border-gray-500 text-gray-500 font-bold px-4 py-2 rounded cursor-pointer hover:bg-gray-100"
                    >
                        Download Resume
                    </a>        </div>
                <hr className='border-gray-300 mt-2' id='about' />
                <div className="flex flex-col gap-3 mt-6" >
                    <div className="flex flex-row gap-6 items-center">
                        <div className="bg-gray-300 px-4 py-1"><h3 className="font-bold text-gray-600">NAME</h3></div>
                        <div><h3 className='text-gray-500 font-serif'>Poula Razak</h3></div>
                    </div>

                    <div className="flex flex-row gap-6 items-center">
                        <div className="bg-gray-300 px-4 py-1"><h3 className="font-bold text-gray-600">EMAIL</h3></div>
                        <div><h3 className='text-gray-500 font-serif'>polarazak0@gmail.com</h3></div>
                    </div>

                    <div className="flex flex-row gap-6 items-center">
                        <div className="bg-gray-300 px-4 py-1"><h3 className="font-bold text-gray-600">BIRTHDAY</h3></div>
                        <div><h3 className='text-gray-500 font-serif'>January 1, 2001</h3></div>
                    </div>

                    <div className="flex flex-row gap-6 items-center">
                        <div className="bg-gray-300 px-4 py-1"><h3 className="font-bold text-gray-600">ADDRESS</h3></div>
                        <div><h3 className='text-gray-500 font-serif'>Shoubra, Cairo, Egypt</h3></div>
                    </div>

                    <div className="flex flex-row gap-6 items-center">
                        <div className="bg-gray-300 px-4 py-1"><h3 className="font-bold text-gray-600">PHONE</h3></div>
                        <div><h3 className='text-gray-500 font-serif'>+201220800797</h3></div>
                    </div>

                </div>
            </div>
        </div>
    </>
}
export default Home;