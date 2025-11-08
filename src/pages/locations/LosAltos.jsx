import LocationPageTemplate from '../../components/LocationPageTemplate';

function LosAltos() {
  return (
    <LocationPageTemplate 
      city="Los Altos"
      county="Santa Clara County"
      driveTime="55 minutes"
      heroImage="/services-hero.jpg"
      nearbyAreas={['Mountain View', 'Palo Alto', 'Sunnyvale', 'Cupertino', 'Los Altos Hills']}
    />
  );
}

export default LosAltos;

