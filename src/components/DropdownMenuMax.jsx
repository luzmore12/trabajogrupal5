import React, { useState } from 'react';

function DropdownMenu() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  return (
    <div className="btn-group" onMouseLeave={closeDropdown}>
      <button className="btn btn-pink" onClick={toggleDropdown}>
        <i className="fa fa-user fa-fw"></i> User
      </button>
      <button
        className={`btn btn-pink dropdown-toggle ${isDropdownOpen ? 'open' : ''}`}
        onClick={toggleDropdown}
      >
        <span className="fa fa-caret-down" title="Toggle dropdown menu"></span>
      </button>
      {isDropdownOpen && (
        <ul className="dropdown-menu">
          <li><a href="#"><i className="fa fa-pencil fa-fw"></i> Edit</a></li>
          <li><a href="#"><i className="fa fa-trash-o fa-fw"></i> Delete</a></li>
          <li><a href="#"><i className="fa fa-ban fa-fw"></i> Ban</a></li>
          <li className="divider"></li>
          <li><a href="#"><i className="fa fa-unlock"></i> Make admin</a></li>
        </ul>
      )}
    </div>
  );
}

export default DropdownMenu;
