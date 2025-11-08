import LocationPageTemplate from '../../components/LocationPageTemplate';

function SanFrancisco() {
  return (
    <LocationPageTemplate 
      city="San Francisco"
      county="San Francisco County"
      driveTime="90 minutes"
      heroImage="/services-hero.jpg"
      nearbyAreas={['Daly City', 'Oakland', 'Berkeley', 'Burlingame', 'Pacifica', 'South San Francisco']}
    />
  );
}

export default SanFrancisco;

