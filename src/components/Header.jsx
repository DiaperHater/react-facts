import logo from '../assets/react.svg'

export default function Header() {
    return(
        <header className='header bg-zinc-800 text-white'>
            <div className="wrapper">
                <div className="header__inner h-[91px] flex items-center justify-between">
                    <a href='#' className="header__logo flex items-center">
                        <img src={logo} alt="" className="header__logo-img w-[27.69px] h-[24px] mr-2" />
                        <span className="header__logo-text text-cyan-400 text-2xl font-bold">ReactFacts</span>
                    </a>
                    <h1 className="header__title text-base font-semibold">
                        React Course - Project 1
                    </h1>
                </div>
            </div>
        </header>
    )
}