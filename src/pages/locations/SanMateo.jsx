import LocationPageTemplate from '../../components/LocationPageTemplate';

function SanMateo() {
  return (
    <LocationPageTemplate 
      city="San Mateo"
      county="San Mateo County"
      driveTime="75 minutes"
      heroImage="/services-hero.jpg"
      nearbyAreas={['Redwood City', 'Burlingame', 'Foster City', 'Belmont', 'San Carlos']}
    />
  );
}

export default SanMateo;

