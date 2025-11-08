import LocationPageTemplate from '../../components/LocationPageTemplate';

function Milpitas() {
  return (
    <LocationPageTemplate 
      city="Milpitas"
      county="Santa Clara County"
      driveTime="60 minutes"
      heroImage="/services-hero.jpg"
      nearbyAreas={['San Jose', 'Santa Clara', 'Fremont', 'Sunnyvale']}
    />
  );
}

export default Milpitas;

