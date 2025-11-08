import LocationPageTemplate from '../../components/LocationPageTemplate';

function MountainView() {
  return (
    <LocationPageTemplate 
      city="Mountain View"
      county="Santa Clara County"
      driveTime="60 minutes"
      heroImage="/services-hero.jpg"
      nearbyAreas={['Palo Alto', 'Los Altos', 'Sunnyvale', 'Santa Clara', 'Menlo Park']}
    />
  );
}

export default MountainView;

