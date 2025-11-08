import LocationPageTemplate from '../../components/LocationPageTemplate';

function Burlingame() {
  return (
    <LocationPageTemplate 
      city="Burlingame"
      county="San Mateo County"
      driveTime="75 minutes"
      heroImage="/services-hero.jpg"
      nearbyAreas={['San Mateo', 'Millbrae', 'San Francisco', 'Foster City', 'San Bruno']}
    />
  );
}

export default Burlingame;

