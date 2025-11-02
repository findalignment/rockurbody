import PageLayout from '../components/PageLayout';

function Book() {
  return (
    <PageLayout>
      <div className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-heading text-primary mb-6 text-center">
            Book Your Session
          </h1>
          <p className="text-xl text-neutralDark/80 text-center mb-12 max-w-3xl mx-auto">
            Choose from Structural Integration, Movement Education, or Combination Programs
          </p>
          
          <div className="bg-offWhite rounded-2xl p-8 shadow-sm">
            <iframe
              src="https://cal.com/rockyourbody"
              className="w-full rounded-xl"
              style={{
                height: '800px',
                border: 'none'
              }}
              title="Book a session"
            />
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default Book;