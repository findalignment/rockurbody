import LocationPageTemplate from '../../components/LocationPageTemplate';

function FosterCity() {
  return (
    <LocationPageTemplate 
      city="Foster City"
      county="San Mateo County"
      driveTime="75 minutes"
      heroImage="/services-hero.jpg"
      nearbyAreas={['San Mateo', 'Redwood City', 'Burlingame', 'Belmont']}
    />
  );
}

export default FosterCity;

