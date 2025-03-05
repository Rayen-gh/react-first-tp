import './footer.css';
export default function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <p>&copy; 2023 My Company. All rights reserved.</p>
                <ul className="footer-links">
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/privacy">Privacy Policy</a></li>
                </ul>
            </div>
        </footer>
    );
}