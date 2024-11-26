import Image from "next/image";
import stylenestLogo from '@/public/stylenest.svg'
import { RxHamburgerMenu } from "react-icons/rx";
import { PiShoppingBagOpen } from "react-icons/pi";

function Navbar() {
    return (
        <div className="flex flex-row h-10 justify-between px-2 bg-gray-100">
            <Image
                className="h-full flex-none"
                src={stylenestLogo}
                alt={'navbar logo'}
            />
            <ul className="sm:flex gap-8 hidden mr-auto pl-32 self-center text-lg font-medium text-gray-700">
                <li>Shop All</li>
                <li>Latest arrivals</li>
            </ul>

            <span className="flex gap-2 p-2">
                <PiShoppingBagOpen className="h-full" />
                <RxHamburgerMenu className="h-full sm:hidden block" />
            </span>
        </div>
    );
}

export default Navbar;
