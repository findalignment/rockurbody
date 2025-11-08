import LocationPageTemplate from '../../components/LocationPageTemplate';

function Monterey() {
  return (
    <LocationPageTemplate 
      city="Monterey"
      county="Monterey County"
      driveTime="50 minutes"
      heroImage="/services-hero.jpg"
      nearbyAreas={['Carmel', 'Pacific Grove', 'Seaside', 'Marina', 'Salinas', 'Carmel Valley']}
    />
  );
}

export default Monterey;

