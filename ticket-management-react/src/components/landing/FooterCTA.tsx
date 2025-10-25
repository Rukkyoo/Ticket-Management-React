import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';

export default function FooterCTA() {
  const navigate = useNavigate();
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          Ready to streamline your support?
        </h2>
        <p className="text-base text-gray-600 mb-8">
          Create your workspace in minutes and invite your team.
        </p>
        <div className="flex items-center justify-center gap-4">
          <button 
            onClick={() => navigate('/auth/login')}
            className="bg-transparent cursor-pointer text-gray-900 px-6 py-2.5 rounded-lg font-semibold hover:bg-sky-50 transition-all"
          >
            Login
          </button>
          <Button variant="primary" onClick={() => navigate('/auth/signup')}>Get Started</Button>
        </div>
      </div>
    </section>
  );
}