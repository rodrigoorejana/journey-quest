// src/components/Header.tsx
import { Nav, Navbar } from "reactstrap";
import Image from 'next/image';
import Link from "next/link";

const Header = () => {
    return (
        <Navbar container="md" className="custom-navbar">
            <Link href="/" passHref>
                <Image
                    src="/logo.png"
                    alt="Logo"
                    width={60}
                    height={60}
                />
            </Link>
            <Nav className="flex-row" navbar>
                <Link href="/AccommodationsPage" className="nav-link me-2">
                    Acomodações
                </Link>
                <Link href="/DestinationPage" className="nav-link me-2">
                    Destinos
                </Link>
                <Link href="/ReviewsPage" className="nav-link me-2">
                    Depoimentos
                </Link>
            </Nav>
        </Navbar>
    )
}

export default Header;
