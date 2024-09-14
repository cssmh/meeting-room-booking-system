const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          {/* Top Section: Contact Information and Links */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="mb-4 md:mb-0">
              <h2 className="text-lg font-semibold">Contact Information</h2>
              <p>Email: info@meetingrooms.com</p>
              <p>Phone: +123-456-7890</p>
              <p>Address: 123 Meeting St, Workspace City, WS 12345</p>
            </div>

            {/* Social Media Links */}
            <div className="mb-4 md:mb-0">
              <h2 className="text-lg font-semibold">Follow Us</h2>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-500"
                >
                  <i className="fab fa-facebook-f"></i> Facebook
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-400"
                >
                  <i className="fab fa-twitter"></i> Twitter
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-pink-500"
                >
                  <i className="fab fa-instagram"></i> Instagram
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-600"
                >
                  <i className="fab fa-linkedin-in"></i> LinkedIn
                </a>
              </div>
            </div>

            {/* Additional Links */}
            <div>
              <h2 className="text-lg font-semibold">Quick Links</h2>
              <ul>
                <li>
                  <a href="/privacy" className="hover:text-gray-400">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms" className="hover:text-gray-400">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-gray-400">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section: Copyright */}
          <div className="border-t border-gray-700 pt-4 text-center">
            <p>
              &copy; {new Date().getFullYear()} MeetingRooms. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    );
};

export default Footer;