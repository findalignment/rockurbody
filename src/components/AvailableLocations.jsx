import { Link } from 'react-router-dom';

/**
 * Reusable component for displaying available service locations
 * Used on service pages to show where mobile services are available
 */
function AvailableLocations({ 
  serviceName = "this service",
  locations = [
    { name: 'Santa Cruz', path: '/santa-cruz-personal-training' },
    { name: 'Capitola', path: '/capitola-personal-training' },
    { name: 'Aptos', path: '/aptos-personal-training' },
    { name: 'Soquel', path: '/soquel-personal-training' },
    { name: 'Watsonville', path: '/watsonville-personal-training' },
    { name: 'Monterey', path: '/monterey-personal-training' },
    { name: 'Carmel', path: '/carmel-personal-training' },
    { name: 'Pacific Grove', path: '/pacific-grove-personal-training' },
    { name: 'San Jose', path: '/san-jose-personal-training' },
    { name: 'Palo Alto', path: '/palo-alto-personal-training' },
    { name: 'Los Gatos', path: '/los-gatos-personal-training' },
    { name: 'Mountain View', path: '/mountain-view-personal-training' },
    { name: 'Sunnyvale', path: '/sunnyvale-personal-training' },
    { name: 'Cupertino', path: '/cupertino-personal-training' },
    { name: 'Campbell', path: '/campbell-personal-training' },
    { name: 'San Francisco', path: '/san-francisco-personal-training' },
  ],
  showViewAll = true
}) {
  return (
    <div className="mt-12 bg-neutralLight/50 p-8 rounded-xl">
      <h3 className="text-xl font-bold text-neutralDark mb-4">
        Available in Your Area
      </h3>
      <p className="text-neutralDark/80 mb-4">
        Mobile {serviceName} throughout the Bay Area:
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {locations.map((location, index) => (
          <Link 
            key={index}
            to={location.path} 
            className="text-accent hover:underline transition-colors"
          >
            {location.name}
          </Link>
        ))}
        {showViewAll && (
          <Link 
            to="/services" 
            className="text-accent hover:underline font-semibold transition-colors"
          >
            View All →
          </Link>
        )}
      </div>
    </div>
  );
}

export default AvailableLocations;

