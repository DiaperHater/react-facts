import reactLogo from '../assets/react.svg'


export default function MainContent() {
    return(
        <section className="main-content min-h-[calc(100vh-91px)] text-white bg-[#282D35]">
            <div className="wrapper bg-[url('/src/assets/bg-react.svg')] bg-no-repeat bg-[length:300px_300px] bg-[center_right_-75px]">
                <div className="main-content__inner py-14">
                    <h2 className="main-content__title text-4xl font-bold mb-12">
                        Fun facts about React
                    </h2>
                    <ul className="main-content__list list-disc marker:text-cyan-500 marker:text-2xl list-inside ml-6">
                        <li className="main-content__li mb-3"><span className="-ml-2">Was first released in 2013</span></li>
                        <li className="main-content__li mb-3"><span className="-ml-2">Was originally created by Jordan Walke</span></li>
                        <li className="main-content__li mb-3"><span className="-ml-2">Has well over 100K stars on GitHub</span></li>
                        <li className="main-content__li mb-3"><span className="-ml-2">Is maintained by Facebook</span></li>
                        <li className="main-content__li"><span className="-ml-2">Powers thousands of enterprise apps, including mobile apps</span></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}