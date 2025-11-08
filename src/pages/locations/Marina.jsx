import LocationPageTemplate from '../../components/LocationPageTemplate';

function Marina() {
  return (
    <LocationPageTemplate 
      city="Marina"
      county="Monterey County"
      driveTime="40 minutes"
      heroImage="/services-hero.jpg"
      nearbyAreas={['Seaside', 'Monterey', 'Salinas', 'Watsonville', 'Pacific Grove']}
    />
  );
}

export default Marina;

