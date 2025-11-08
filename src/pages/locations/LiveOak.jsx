import LocationPageTemplate from '../../components/LocationPageTemplate';

function LiveOak() {
  return (
    <LocationPageTemplate 
      city="Live Oak"
      county="Santa Cruz County"
      driveTime="10 minutes"
      heroImage="/services-hero.jpg"
      nearbyAreas={['Santa Cruz', 'Capitola', 'Soquel', 'Aptos', 'Watsonville']}
    />
  );
}

export default LiveOak;

