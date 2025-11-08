import LocationPageTemplate from '../../components/LocationPageTemplate';

function RedwoodCity() {
  return (
    <LocationPageTemplate 
      city="Redwood City"
      county="San Mateo County"
      driveTime="70 minutes"
      heroImage="/services-hero.jpg"
      nearbyAreas={['San Mateo', 'Menlo Park', 'San Carlos', 'Belmont', 'Palo Alto']}
    />
  );
}

export default RedwoodCity;

