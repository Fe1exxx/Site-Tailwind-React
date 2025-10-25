import logo from './logo.png'
import textLogo from './textLogo.png'
import Button from '../AnotherComponents/Button'

export default function Header() {
    return (
        <header className="h-[58.8px] w-[1002.3px] m-auto flex items-center justify-between mt-[11.1px]">
            <div className="logoSection flex ml-[100.2px]">
                <a href="#" className='flex'>
                    <img src={logo} alt="text" className='mr-[5px]' />
                    <img src={textLogo} alt="text" />
                </a>
            </div>
            <div className="flex gap-[16.7px] mr-[100.2px] items-center">
                <a href='#' className="font-[Inter]">Home</a>
                <a href='#' className="font-[Inter]">Features</a>
                <a href='#' className="font-[Inter]">Community</a>
                <a href='#' className="font-[Inter]">Blog</a>
                <a href='#' className='font-[Inter] font-medium mr-[22.3px] '>Pricing</a>
                <Button>Register Now →</Button>
            </div>
        </header>
    )
}