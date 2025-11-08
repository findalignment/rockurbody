import LocationPageTemplate from '../../components/LocationPageTemplate';

function Cupertino() {
  return (
    <LocationPageTemplate 
      city="Cupertino"
      county="Santa Clara County"
      driveTime="50 minutes"
      heroImage="/services-hero.jpg"
      nearbyAreas={['Saratoga', 'Campbell', 'San Jose', 'Sunnyvale', 'Santa Clara', 'Los Altos']}
    />
  );
}

export default Cupertino;

