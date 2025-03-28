import logoImage from "@/assets/images/logo.svg";
import Image from "next/image";

const footerLinks = [
    { href: "#", label: "Contact" },
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms & Conditions" },
];

export default function Footer() {
    return (
        <section className="py-16">
            <div className="container md:flex items-center justify-between">
                <div className="flex flex-col md:flex-row items-center md:justify-between gap-6">
                    <Image src={logoImage} alt="layers logo"/>
                </div>
                <div>
                    <nav className="flex gap-6">
                        {footerLinks.map(links => (
                            <a href={links.href} className="text-white/50 text-sm">{links.label}</a>
                        ))}
                    </nav>
                </div>
            </div>
        </section>
    );
}
