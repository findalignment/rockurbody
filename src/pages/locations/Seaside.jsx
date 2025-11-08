import LocationPageTemplate from '../../components/LocationPageTemplate';

function Seaside() {
  return (
    <LocationPageTemplate 
      city="Seaside"
      county="Monterey County"
      driveTime="45 minutes"
      heroImage="/services-hero.jpg"
      nearbyAreas={['Monterey', 'Marina', 'Pacific Grove', 'Salinas', 'Carmel']}
    />
  );
}

export default Seaside;

