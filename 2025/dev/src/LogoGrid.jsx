import './LogoGrid.css';

const LogoGrid = ({ data = [], columns = 3, className = "" }) => {
  return (
    <div className={`logo-grid columns-${columns} ${className}`}>
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
            className='logo-grid-item'
          />
        </a>
      ))}
    </div>
  );
};

export default LogoGrid;