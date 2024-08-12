

export const metadata = {
  title: 'Test Page',
};

function TestPage() {
  return (

      <div>
        <iframe
          src="http://localhost:3001/login"
          style={{
            width: '100vw',
            height: '100vh',
            border: 'none',
          }}
          allowFullScreen
        ></iframe>
      </div>
  );
}

export default TestPage;
