import LocationPageTemplate from '../../components/LocationPageTemplate';

function Belmont() {
  return (
    <LocationPageTemplate 
      city="Belmont"
      county="San Mateo County"
      driveTime="75 minutes"
      heroImage="/services-hero.jpg"
      nearbyAreas={['San Carlos', 'San Mateo', 'Redwood City', 'Foster City']}
    />
  );
}

export default Belmont;

