function PageLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <div>Header goes here</div>
      <main className="flex-1">
        {children}
      </main>
      <div>Footer goes here</div>
    </div>
  );
}

export default PageLayout;
