import LocationPageTemplate from '../../components/LocationPageTemplate';

function Felton() {
  return (
    <LocationPageTemplate 
      city="Felton"
      county="Santa Cruz County"
      driveTime="25 minutes"
      heroImage="/services-hero.jpg"
      nearbyAreas={['Scotts Valley', 'Boulder Creek', 'Ben Lomond', 'Santa Cruz', 'Los Gatos']}
    />
  );
}

export default Felton;

