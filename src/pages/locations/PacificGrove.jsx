import LocationPageTemplate from '../../components/LocationPageTemplate';

function PacificGrove() {
  return (
    <LocationPageTemplate 
      city="Pacific Grove"
      county="Monterey County"
      driveTime="50 minutes"
      heroImage="/services-hero.jpg"
      nearbyAreas={['Monterey', 'Carmel', 'Seaside', 'Marina', 'Pebble Beach']}
    />
  );
}

export default PacificGrove;

