import LocationPageTemplate from '../../components/LocationPageTemplate';

function SanJose() {
  return (
    <LocationPageTemplate 
      city="San Jose"
      county="Santa Clara County"
      driveTime="50 minutes"
      heroImage="/services-hero.jpg"
      nearbyAreas={['Los Gatos', 'Campbell', 'Santa Clara', 'Milpitas', 'Cupertino', 'Saratoga', 'Sunnyvale']}
    />
  );
}

export default SanJose;

