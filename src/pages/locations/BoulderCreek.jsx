import LocationPageTemplate from '../../components/LocationPageTemplate';

function BoulderCreek() {
  return (
    <LocationPageTemplate 
      city="Boulder Creek"
      county="Santa Cruz County"
      driveTime="35 minutes"
      heroImage="/services-hero.jpg"
      nearbyAreas={['Felton', 'Scotts Valley', 'Ben Lomond', 'Santa Cruz', 'Los Gatos']}
    />
  );
}

export default BoulderCreek;

