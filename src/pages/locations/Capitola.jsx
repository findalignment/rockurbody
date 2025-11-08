import LocationPageTemplate from '../../components/LocationPageTemplate';

function Capitola() {
  return (
    <LocationPageTemplate 
      city="Capitola"
      county="Santa Cruz County"
      driveTime="10 minutes"
      heroImage="/services-hero.jpg"
      nearbyAreas={['Santa Cruz', 'Aptos', 'Soquel', 'Live Oak', 'Watsonville']}
    />
  );
}

export default Capitola;

