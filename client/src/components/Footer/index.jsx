import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  
  return (
    <footer className="bg-primary w-100 mt-auto bg-secondary">
    
        
       <p style={{ textAlign: 'center', padding: '5px' }}>
        <a href="#" rel="noreferrer">
          <i className="fab fa-instagram" style={{ color: 'white', fontSize: '2em', margin: '5px' }}></i>
        </a>
        <a href="#" rel="noreferrer">
          <i className="fab fa-facebook" style={{ color: 'white', fontSize: '2em', margin: '5px' }}></i>
        </a>        
        <a href="#" rel="noreferrer">
          <i className="fab fa-twitter" style={{ color: 'white', fontSize: '2em', margin: '5px' }}></i>
        </a>
       </p>
       
      
    </footer>
  );
};

export default Footer;
