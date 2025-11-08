import LocationPageTemplate from '../../components/LocationPageTemplate';

function Sunnyvale() {
  return (
    <LocationPageTemplate 
      city="Sunnyvale"
      county="Santa Clara County"
      driveTime="55 minutes"
      heroImage="/services-hero.jpg"
      nearbyAreas={['Mountain View', 'Santa Clara', 'Cupertino', 'Los Altos', 'San Jose']}
    />
  );
}

export default Sunnyvale;

