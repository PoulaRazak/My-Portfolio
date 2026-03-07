import profileImage from '../../assets/images/profile.jpeg';

function Home() {
    return <>
        <div className='flex md:flex-row flex-col'>
            <div className='flex-1 p-10'>
                <img src={profileImage} alt="Profile Image" className="profile-photo" />
            </div>
            <div className='flex-1 p-10 flex flex-col gap-5' id='home'>
                <div className='text-4xl font-bold mb-2' style={{ color: 'var(--text-heading)' }}>
                    <h2>HELLO.</h2>
                    <h2>I'M POULA</h2>
                    <h2>RAZAK</h2>
                </div>
                <div>
                    <p className='mb-6' style={{ color: 'var(--text-muted)' }}>
                        A passionate Frontend developer with experience in creating dynamic and responsive websites using modern technologies. Skilled in HTML, CSS, JavaScript, and popular frameworks like React. Committed to delivering high-quality code and exceptional user experiences.
                    </p>
                </div>
                <div>
                    <a
                        href="https://drive.google.com/drive/folders/1rfF9s89OGIZSXrpbWMXSf3DLxAfqvm4V?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block font-bold px-4 py-2 rounded cursor-pointer transition-colors duration-300"
                        style={{
                            border: '1px solid var(--border-medium)',
                            color: 'var(--text-muted)',
                        }}
                    >
                        Download Resume
                    </a>
                </div>
                <hr className='mt-2' style={{ borderColor: 'var(--border-medium)' }} id='about' />
                <div className="flex flex-col gap-3 mt-6">

                    <div className="flex flex-row gap-6 items-center">
                        <div className="px-4 py-1" style={{ backgroundColor: 'var(--tag-bg)' }}>
                            <h3 className="font-bold" style={{ color: 'var(--tag-text)' }}>NAME</h3>
                        </div>
                        <h3 className='font-serif' style={{ color: 'var(--text-muted)' }}>Poula Razak</h3>
                    </div>

                    <div className="flex flex-row gap-6 items-center">
                        <div className="px-4 py-1" style={{ backgroundColor: 'var(--tag-bg)' }}>
                            <h3 className="font-bold" style={{ color: 'var(--tag-text)' }}>EMAIL</h3>
                        </div>
                        <h3 className='font-serif' style={{ color: 'var(--text-muted)' }}>polarazak0@gmail.com</h3>
                    </div>

                    <div className="flex flex-row gap-6 items-center">
                        <div className="px-4 py-1" style={{ backgroundColor: 'var(--tag-bg)' }}>
                            <h3 className="font-bold" style={{ color: 'var(--tag-text)' }}>BIRTHDAY</h3>
                        </div>
                        <h3 className='font-serif' style={{ color: 'var(--text-muted)' }}>January 1, 2001</h3>
                    </div>

                    <div className="flex flex-row gap-6 items-center">
                        <div className="px-4 py-1" style={{ backgroundColor: 'var(--tag-bg)' }}>
                            <h3 className="font-bold" style={{ color: 'var(--tag-text)' }}>ADDRESS</h3>
                        </div>
                        <h3 className='font-serif' style={{ color: 'var(--text-muted)' }}>Shoubra, Cairo, Egypt</h3>
                    </div>

                    <div className="flex flex-row gap-6 items-center">
                        <div className="px-4 py-1" style={{ backgroundColor: 'var(--tag-bg)' }}>
                            <h3 className="font-bold" style={{ color: 'var(--tag-text)' }}>PHONE</h3>
                        </div>
                        <h3 className='font-serif' style={{ color: 'var(--text-muted)' }}>+201220800797</h3>
                    </div>

                </div>
            </div>
        </div>
    </>
}
export default Home;