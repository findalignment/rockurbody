import LocationPageTemplate from '../../components/LocationPageTemplate';

function Aptos() {
  return (
    <LocationPageTemplate 
      city="Aptos"
      county="Santa Cruz County"
      driveTime="15 minutes"
      heroImage="/services-hero.jpg"
      nearbyAreas={['Capitola', 'Santa Cruz', 'Watsonville', 'Soquel', 'Rio Del Mar']}
    />
  );
}

export default Aptos;

