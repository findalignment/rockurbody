import LocationPageTemplate from '../../components/LocationPageTemplate';

function Salinas() {
  return (
    <LocationPageTemplate 
      city="Salinas"
      county="Monterey County"
      driveTime="35 minutes"
      heroImage="/services-hero.jpg"
      nearbyAreas={['Watsonville', 'Marina', 'Monterey', 'Prunedale', 'Seaside']}
    />
  );
}

export default Salinas;

