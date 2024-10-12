import { Menu } from 'lucide-react';
import logo from '../assets/CrackTube_logo.jpeg'
import Button from '../components/Button';

function Header() {
    return (
        <div className="flex gap-10 lg:gap-20 justify-between">
            <div className="flex items-center justify-center gap-4 flex-shrink-0">
                <Button>
                    <Menu />
                </Button>
                <a href="" className='flex justify-center items-center gap-1'>
                    <img src={logo} alt="crackhead logo"  className='h-8 w-8'/>
                    <h4 className='text-lg font-semibold'>CrackTube</h4>
                </a>
            </div>
            <div></div>
            <div></div>
        </div>
    );
}

export default Header;