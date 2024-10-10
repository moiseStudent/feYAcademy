import { ReactNode } from "react";

type props = {
    children?: ReactNode;
};

function OptionDropdown({ children }: props) {
    return (
        <div className="p-4 hover:bg-yellow-300 text-black rounded-b-md cursor-pointer transition">
            {children}
        </div>
    );
}

export default OptionDropdown;
