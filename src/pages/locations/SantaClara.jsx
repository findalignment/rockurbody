import LocationPageTemplate from '../../components/LocationPageTemplate';

function SantaClara() {
  return (
    <LocationPageTemplate 
      city="Santa Clara"
      county="Santa Clara County"
      driveTime="50 minutes"
      heroImage="/services-hero.jpg"
      nearbyAreas={['San Jose', 'Sunnyvale', 'Campbell', 'Cupertino', 'Milpitas']}
    />
  );
}

export default SantaClara;

