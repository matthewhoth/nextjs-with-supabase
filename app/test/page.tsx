

export const metadata = {
  title: 'Test Page',
};

function TestPage() {
  return (

      <div>
        <iframe
          src="nextjs-with-supabase-five.vercel.app/login"
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
