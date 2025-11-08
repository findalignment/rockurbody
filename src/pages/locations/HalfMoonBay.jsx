import LocationPageTemplate from '../../components/LocationPageTemplate';

function HalfMoonBay() {
  return (
    <LocationPageTemplate 
      city="Half Moon Bay"
      county="San Mateo County"
      driveTime="60 minutes"
      heroImage="/services-hero.jpg"
      nearbyAreas={['Pacifica', 'San Mateo', 'Santa Cruz', 'Redwood City']}
    />
  );
}

export default HalfMoonBay;

