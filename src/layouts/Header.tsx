import { ArrowLeft, Bell, Menu, Mic, Search, Upload, User } from 'lucide-react';
import logo from '../assets/CrackTube_logo.jpeg'
import Button from '../components/Button';
import { useState } from 'react';

function Header() {
    const [showFullWidthSearch, setShowFullWidthSearch] = useState(false);

    return (
        <div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4">
            <div className={`${showFullWidthSearch ? 'hidden' : 'flex'} items-center justify-center gap-4 flex-shrink-0`}>
                <Button varient={'ghost'} sizes={'icon'}>
                    <Menu />
                </Button>
                <a href="" className='flex justify-center items-center gap-1'>
                    <img src={logo} alt="crackhead logo"  className='h-8 w-8'/>
                    <h4 className='text-lg font-semibold'>CrackTube</h4>
                </a>
            </div>
            <form className={`${showFullWidthSearch ? 'flex' : 'hidden md:flex'} gap-4 flex-grow justify-center items-center`}>
                {
                showFullWidthSearch && (
                <Button onClick={() => setShowFullWidthSearch(false)}
                type='button'
                varient={'ghost'} 
                sizes={'icon'} 
                className='flex-shrink-0'>
                    <ArrowLeft />
                </Button>)}
                <div className='flex flex-grow max-w-[600px] items-center'>
                    <input 
                    type='search'
                    placeholder='search'
                    className='rounded-l-full border border-secondary-border shadow-inner shadow-secondary py-1.5 px-4 text-lg w-full focus:border-blue-500 outline-none' />
                    <Button className='py-2 px-4 rounded-r-full border border-secondary-border border-l-0 flex-shrink-0'>
                        <Search/>
                    </Button>
                </div>
                <Button type="button" sizes={'icon'} className='flex-shrink-0'>
                    <Mic />
                </Button>
            </form>
            <div className={`md:gap-2 flex-shrink-0 ${showFullWidthSearch ? 'hidden' : 'flex'}`}>
                <Button onClick={() => setShowFullWidthSearch(true)} varient={'ghost'} sizes={'icon'} className='md:hidden'>
                    <Search/>
                </Button>
                <Button varient={'ghost'} sizes={'icon'} className='md:hidden'>
                    <Mic/>
                </Button>
                <Button sizes={"icon"} varient={'ghost'}>
                    <Upload/>
                </Button>
                <Button sizes={"icon"} varient={'ghost'}>
                    <Bell/>
                </Button>
                <Button sizes={"icon"} varient={'ghost'}>
                    <User/>
                </Button>
            </div>
        </div>
    );
}

export default Header;