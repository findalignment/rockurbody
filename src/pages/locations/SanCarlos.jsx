import LocationPageTemplate from '../../components/LocationPageTemplate';

function SanCarlos() {
  return (
    <LocationPageTemplate 
      city="San Carlos"
      county="San Mateo County"
      driveTime="70 minutes"
      heroImage="/services-hero.jpg"
      nearbyAreas={['Redwood City', 'Belmont', 'San Mateo', 'Menlo Park']}
    />
  );
}

export default SanCarlos;

