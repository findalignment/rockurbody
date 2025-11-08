import LocationPageTemplate from '../../components/LocationPageTemplate';

function MorganHill() {
  return (
    <LocationPageTemplate 
      city="Morgan Hill"
      county="Santa Clara County"
      driveTime="45 minutes"
      heroImage="/services-hero.jpg"
      nearbyAreas={['San Jose', 'Gilroy', 'Los Gatos', 'Campbell']}
    />
  );
}

export default MorganHill;

