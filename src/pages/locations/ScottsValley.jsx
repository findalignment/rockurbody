import LocationPageTemplate from '../../components/LocationPageTemplate';

function ScottsValley() {
  return (
    <LocationPageTemplate 
      city="Scotts Valley"
      county="Santa Cruz County"
      driveTime="15 minutes"
      heroImage="/services-hero.jpg"
      nearbyAreas={['Santa Cruz', 'Felton', 'Boulder Creek', 'Los Gatos', 'Ben Lomond']}
    />
  );
}

export default ScottsValley;

