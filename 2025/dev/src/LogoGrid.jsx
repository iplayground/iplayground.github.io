import './LogoGrid.css';

const LogoGrid = ({ data = [], columns = 3 }) => {
  return (
    <div className={`logo-grid columns-${columns}`}>
      {data.map((item, idx) => (
        <a
          key={idx}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="logo-item"
        >
          <img
            src={item.picture || item.icon}
            alt={item.name}
            width="300"
            height="150"
            className='logo-grid-item'
            style={{ objectFit: 'contain', border: 'none' }}
          />
        </a>
      ))}
    </div>
  );
};

export default LogoGrid;