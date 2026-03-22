import { Mail, Linkedin, Github, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="border-t-4 border-black mt-12">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          <div>
            <h4 className="text-lg mb-3 uppercase tracking-wider" style={{ fontFamily: 'Libre Baskerville' }}>
              Contact
            </h4>
            <p className="text-sm mb-2">Available for new work opportunities and collaborations</p>
            <a href="mailto:sxbaskerville@gmail.com" className="text-sm hover:underline flex items-center gap-2">
              <Mail className="w-4 h-4" />
              sxbaskerville@gmail.com
            </a>
          </div>
          
          <div className="md:ml-auto">
            <h4 className="text-lg mb-3 uppercase tracking-wider" style={{ fontFamily: 'Libre Baskerville' }}>
              Connect
            </h4>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/brion-baskerville/" className="hover:opacity-70" target="_blank">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com/13rion" className="hover:opacity-70" target="_blank">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/13rion_" className="hover:opacity-70" target="_blank">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-black pt-4 flex justify-between items-center text-sm">
          <p>© 2026 Brion Baskerville. All rights reserved.</p>
          <p>Vol 13, No. 1</p>
        </div>
      </div>
    </footer>
  );
}