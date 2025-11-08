import LocationPageTemplate from '../../components/LocationPageTemplate';

function Soquel() {
  return (
    <LocationPageTemplate 
      city="Soquel"
      county="Santa Cruz County"
      driveTime="10 minutes"
      heroImage="/services-hero.jpg"
      nearbyAreas={['Capitola', 'Aptos', 'Santa Cruz', 'Watsonville', 'Live Oak']}
    />
  );
}

export default Soquel;

