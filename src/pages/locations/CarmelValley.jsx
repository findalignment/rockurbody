import LocationPageTemplate from '../../components/LocationPageTemplate';

function CarmelValley() {
  return (
    <LocationPageTemplate 
      city="Carmel Valley"
      county="Monterey County"
      driveTime="60 minutes"
      heroImage="/services-hero.jpg"
      nearbyAreas={['Carmel', 'Monterey', 'Salinas', 'Big Sur']}
    />
  );
}

export default CarmelValley;

