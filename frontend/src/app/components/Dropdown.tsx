"use client";

import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { ReactNode, useState } from "react";

type props = {
    children?: ReactNode;
};

function Dropdown({ children }: props) {
    const [expanded, setExpanded] = useState<boolean>(false);
    return (
        <>
            <div
                className="w-60"
                onMouseEnter={() => setExpanded(true)}
                onMouseLeave={() => setExpanded(false)}
            >
                <div
                    className={clsx(
                        !expanded ? "rounded-md" : "rounded-t-md",
                        "p-4 z-10 w-60 text-center  text-black bg-lime-400"
                    )}
                >
                    menu de opciones <FontAwesomeIcon icon={faCaretDown} />
                </div>
                <AnimatePresence>
                    {expanded ? (
                        <motion.div
                            className={clsx(
                                " bg-yellow-500 rounded-b-md grid-cols-1 divide-y z-0 w-60 absolute "
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
