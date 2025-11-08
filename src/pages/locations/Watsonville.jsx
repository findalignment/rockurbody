import LocationPageTemplate from '../../components/LocationPageTemplate';

function Watsonville() {
  return (
    <LocationPageTemplate 
      city="Watsonville"
      county="Santa Cruz County"
      driveTime="25 minutes"
      heroImage="/services-hero.jpg"
      nearbyAreas={['Aptos', 'Capitola', 'Santa Cruz', 'Salinas', 'Freedom']}
    />
  );
}

export default Watsonville;

