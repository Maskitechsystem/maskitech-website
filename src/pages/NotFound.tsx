export default function NotFound() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '60vh',
      color: '#e8eaf0'
    }}>
      <h1 style={{ fontSize: '72px', fontWeight: 700, margin: 0 }}>404</h1>
      <p style={{ fontSize: '18px', color: '#7a7f99' }}>Page not found</p>
      <a href="/" style={{ color: '#4f8ef7', marginTop: '20px' }}>Go home</a>
    </div>
  );
}