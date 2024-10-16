import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import ButtonNavbar from "./components/ButtonNavbar";
import Dropdown from "./components/Dropdown";
import OptionDropdown from "./components/OptionDropdown";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "Fe y alegria LCDA",
    description: "Fe y alegria Luisa Caceres De Arismendi",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <nav className=" bg-white shadow-md flex flex-row justify-between py-5 ">
                    <div className="flex flex-row ml-6">
                        <ButtonNavbar href="/">Home y icono</ButtonNavbar>
                    </div>
                    <div className="flex flex-row">
                        <Dropdown
                            label="Gestion Del Estudiante"
                            position={"left"}
                        >
                            <OptionDropdown>Informacion y datos</OptionDropdown>
                            <OptionDropdown>Ver Calificaciones</OptionDropdown>
                            <OptionDropdown>Pagos</OptionDropdown>
                        </Dropdown>
                        <Dropdown label="Social">
                            <OptionDropdown>Noticias</OptionDropdown>
                            <OptionDropdown>Blog</OptionDropdown>
                            <OptionDropdown>...</OptionDropdown>
                            <OptionDropdown>...</OptionDropdown>
                        </Dropdown>
                        <Dropdown label="Informacion" position={"right"}>
                            <OptionDropdown>PreEscolar</OptionDropdown>
                            <OptionDropdown>Primaria</OptionDropdown>
                            <OptionDropdown>Secundaria</OptionDropdown>
                            <OptionDropdown>Tecnica</OptionDropdown>
                        </Dropdown>
                    </div>
                    <div className="flex flex-row  mr-6">
                        <ButtonNavbar href="/" className="mr-1">
                            Login
                        </ButtonNavbar>
                        <ButtonNavbar href="/">Register</ButtonNavbar>
                    </div>
                </nav>
                <div
                    className="w-screen h-80 bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url('https://jesuitas.es/images/actualidad/2018/12/slider3.jpg')",
                    }}
                ></div>
                {children}
                <footer className="bg-blue-700 text-white py-4">
                    <div className="container mx-auto text-center">
                        <p>
                            &copy; {new Date().getFullYear()} Fe Y Alegria.
                            Todos los derechos reservados.
                        </p>
                    </div>
                </footer>
            </body>
        </html>
    );
}
