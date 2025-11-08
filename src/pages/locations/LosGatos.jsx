import LocationPageTemplate from '../../components/LocationPageTemplate';

function LosGatos() {
  return (
    <LocationPageTemplate 
      city="Los Gatos"
      county="Santa Clara County"
      driveTime="35 minutes"
      heroImage="/services-hero.jpg"
      nearbyAreas={['Scotts Valley', 'Santa Cruz', 'Campbell', 'Saratoga', 'San Jose', 'Monte Sereno']}
    />
  );
}

export default LosGatos;

