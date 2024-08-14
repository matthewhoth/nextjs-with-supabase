

export const metadata = {
  title: 'Test Page - Temp Hijacked',
};

function TestPage() {
  return (

      <div>
        <iframe
          src="https://nextjs-temp-neon.vercel.app/auth/sign-in"
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
