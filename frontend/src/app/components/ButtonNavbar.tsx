"use client";

import { ReactNode } from "react";
import { useRouter } from "next/navigation";
import clsx from "clsx";

type props = {
    children?: ReactNode;
    href: string;
    className?: string;
};

function ButtonNavbar({ className, children, href }: props) {
    const router = useRouter();
    return (
        <button
            onClick={() => router.push(href)}
            className={clsx(
                className,
                "bg-gray-900 p-4 rounded-md  transition hover:bg-gray-600 "
            )}
        >
            {children}
        </button>
    );
}

export default ButtonNavbar;
