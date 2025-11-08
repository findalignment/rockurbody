import LocationPageTemplate from '../../components/LocationPageTemplate';

function PaloAlto() {
  return (
    <LocationPageTemplate 
      city="Palo Alto"
      county="Santa Clara County"
      driveTime="65 minutes"
      heroImage="/services-hero.jpg"
      nearbyAreas={['Mountain View', 'Los Altos', 'Menlo Park', 'Stanford', 'Atherton']}
    />
  );
}

export default PaloAlto;

