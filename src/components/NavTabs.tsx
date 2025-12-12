import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const NavTabs: React.FC = React.memo(() => {
	const navigate = useNavigate();
	const location = useLocation();
	return (
		<div className="flex justify-center gap-4 mb-10 pt-8">
			<button
				className={`px-8 py-3 rounded-lg font-semibold text-lg shadow transition-colors duration-200 border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-blue-400
          ${location.pathname === '/use-effect' ? 'bg-[#0B1E3A] text-[#E6EEFF] border-blue-400' : 'bg-[#E6EEFF] text-[#0B1E3A] hover:bg-blue-100'}`}
				onClick={() => navigate('/use-effect')}
			>
				useEffect + useState
			</button>
			<button
				className={`px-8 py-3 rounded-lg font-semibold text-lg shadow transition-colors duration-200 border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-blue-400
          ${location.pathname === '/react-query' ? 'bg-[#0B1E3A] text-[#E6EEFF] border-blue-400' : 'bg-[#E6EEFF] text-[#0B1E3A] hover:bg-blue-100'}`}
				onClick={() => navigate('/react-query')}
			>
				React Query
			</button>
		</div>
	);
});

export default NavTabs;
