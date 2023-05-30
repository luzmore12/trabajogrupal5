import React from 'react';
import SearchBar from './SearchBar';
import DropdownMenu from './DropdownMenuMax';

function Header() {
    return <>
        <div class='header'>
            <div class="leftsectionheader ">
              

            </div>
        
            <div class="centerHeader">
                <SearchBar />

            </div>
            <div class="rightsectionHeader">
               <DropdownMenu />
            </div>
        </div>

    </>
}
export default Header;