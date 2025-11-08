import LocationPageTemplate from '../../components/LocationPageTemplate';

function Carmel() {
  return (
    <LocationPageTemplate 
      city="Carmel"
      county="Monterey County"
      driveTime="55 minutes"
      heroImage="/services-hero.jpg"
      nearbyAreas={['Monterey', 'Pacific Grove', 'Carmel Valley', 'Big Sur', 'Pebble Beach']}
    />
  );
}

export default Carmel;

