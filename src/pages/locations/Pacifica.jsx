import LocationPageTemplate from '../../components/LocationPageTemplate';

function Pacifica() {
  return (
    <LocationPageTemplate 
      city="Pacifica"
      county="San Mateo County"
      driveTime="75 minutes"
      heroImage="/services-hero.jpg"
      nearbyAreas={['Half Moon Bay', 'San Francisco', 'Daly City', 'San Bruno']}
    />
  );
}

export default Pacifica;

