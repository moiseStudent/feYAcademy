"use client";

import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { ReactNode, useState } from "react";

type props = {
    children?: ReactNode;
    position?: string;
    label: string;
};
type stylePosition = {
    expanded: string;
    noExpanded: string;
};

function Dropdown({ label, children, position: position }: props) {
    const [expanded, setExpanded] = useState<boolean>(false);
    let stylePosition: stylePosition;

    if (position == "right") {
        stylePosition = {
            expanded: "rounded-r-md ",
            noExpanded: "rounded-tr-md",
        };
    } else if (position == "left") {
        stylePosition = {
            expanded: "rounded-l-md",
            noExpanded: "rounded-tl-md",
        };
    } else {
        stylePosition = {
            expanded: "border-white/25 border-l",
            noExpanded: "border-white/25 border-l",
        };
    }
    return (
        <>
            <div
                className="w-60"
                onMouseEnter={() => setExpanded(true)}
                onMouseLeave={() => setExpanded(false)}
            >
                <div
                    className={clsx(
                        expanded ? "bg-red-400" : "bg-red-500",
                        position ? "border-l border-white/25" : "",
                        !expanded
                            ? stylePosition.expanded
                            : stylePosition.noExpanded,
                        "p-4 z-10 w-60 text-center divide-x text-black select-none "
                    )}
                >
                    {label} <FontAwesomeIcon icon={faCaretDown} />
                </div>
                <AnimatePresence>
                    {expanded ? (
                        <motion.div
                            className={clsx(
                                "bg-red-600 rounded-b-md grid-cols-1 divide-y z-0 w-60 absolute "
                            )}
                            initial={{ opacity: 0, y: "-100%" }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: "-100%" }}
                            transition={{ duration: 0.17 }}
                        >
                            {children}
                        </motion.div>
                    ) : (
                        ""
                    )}
                </AnimatePresence>
            </div>
        </>
    );
}

export default Dropdown;
