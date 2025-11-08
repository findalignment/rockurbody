import LocationPageTemplate from '../../components/LocationPageTemplate';

function Saratoga() {
  return (
    <LocationPageTemplate 
      city="Saratoga"
      county="Santa Clara County"
      driveTime="40 minutes"
      heroImage="/services-hero.jpg"
      nearbyAreas={['Los Gatos', 'Campbell', 'Cupertino', 'San Jose', 'Monte Sereno']}
    />
  );
}

export default Saratoga;

