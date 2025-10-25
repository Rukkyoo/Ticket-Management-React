export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-8 rounded-full flex items-center justify-center">
                <img src='Ticket.png'/>
              </div>
              <span className="text-xl font-bold text-gray-900">TicketFlow</span>
            </div>
            <p className="text-sm text-gray-600">
              A fast, modern ticket management platform for high-performing teams.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Features</a></li>
              <li><a href="#pricing" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Pricing</a></li>
              <li><a href="#faq" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">About</a></li>
              <li><a href="#careers" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Careers</a></li>
              <li><a href="#contact" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#docs" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Docs</a></li>
              <li><a href="#status" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Status</a></li>
              <li><a href="#security" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Security</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-400 text-center">
            © 2025 TicketFlow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}