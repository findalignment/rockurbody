import LocationPageTemplate from '../../components/LocationPageTemplate';

function Campbell() {
  return (
    <LocationPageTemplate 
      city="Campbell"
      county="Santa Clara County"
      driveTime="45 minutes"
      heroImage="/services-hero.jpg"
      nearbyAreas={['Los Gatos', 'San Jose', 'Saratoga', 'Santa Clara', 'Cupertino']}
    />
  );
}

export default Campbell;

