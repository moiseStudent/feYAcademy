import { ReactNode } from "react";

type props = {
    children?: ReactNode;
};

function OptionDropdown({ children }: props) {
    return (
        <div className="p-4 border-white/60 hover:bg-  text-black rounded-b-md cursor-pointer transition hover:bg-red-400">
            {children}
        </div>
    );
}

export default OptionDropdown;
