import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from './styles';

const pages = ['destination', 'crew', 'technology'];

export default function Nav() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleCurrentPage = (event) => {
    setCurrentPage(event.target.id);
  };

  return (
    <Navbar>

      <Link
        to="/"
        id="home"
        className={currentPage === 'home' ? 'active' : ''}
        onClick={handleCurrentPage}
      >
        <span>00</span>
        Home
      </Link>

      {pages.map((page, index) => (
        <Link
          to={`/${page}`}
          id={page}
          className={currentPage === page ? 'active' : ''}
          onClick={handleCurrentPage}
        >
          <span>
            0
            {index + 1}
          </span>
          {page}
        </Link>
      ))}

    </Navbar>
  );
}
