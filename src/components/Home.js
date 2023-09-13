export function Home({ onClose }) {
  return (
    <div className="app-content">
      <button className="explore-button" onClick={() => onClose()}>
        Explore Web APIs
      </button>
    </div>
  );
}
