import Image from "next/image";
import logo from "@/assets/images/logo.svg";
import Link from "next/link";
import { X, Phone, Mail, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-content py-22 max-md:py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between md:items-start">
          {/* Logo */}
          <div className="mb-8 md:mb-0 flex-shrink-0 flex items-center">
            <Image
              src={logo}
              alt="Logo"
              width={56}
              height={56}
              className="scale-150"
            />
          </div>

          {/* Nav Group 1 */}
          <div className="mb-8 md:mb-0">
            <nav className="flex flex-col gap-4">
              <Link href="#" className="hover:underline transition">
                Tranquil Connections
              </Link>
              <Link href="#" className="hover:underline transition">
                Inner Transformation
              </Link>
              <Link href="#" className="hover:underline transition">
                Personal Empowerment
              </Link>
            </nav>
          </div>

          {/* Nav Group 2 */}
          <div className="mb-8 md:mb-0">
            <nav className="flex flex-col gap-4">
              <Link href="#" className="hover:underline transition">
                How we work
              </Link>
              <Link href="/contact" className="hover:underline transition">
                Contact Us
              </Link>
              <Link href="/faq" className="hover:underline transition">
                Frequently Asked Questions
              </Link>
            </nav>
          </div>

          {/* Contact & Social */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Phone size={18} />
              <a href="tel:0797222212" className="hover:underline transition">
                0797222212
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={18} />
              <a
                href="mailto:Info@jo-saif.com"
                className="hover:underline transition"
              >
                Info@jo-saif.com
              </a>
            </div>
            <div className="flex items-center gap-4 mt-2">
              <Link
                href="#"
                aria-label="Twitter"
                className="hover:text-accent transition"
              >
                <X size={22} />
              </Link>
              <Link
                href="https://wa.me/0797222212"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="hover:text-accent transition"
              >
                <MessageCircle size={22} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
