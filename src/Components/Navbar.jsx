import { IconButton } from "@material-ui/core";
import React,{useState} from "react";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";

export default function Navbar({setSideNav,sidenav,setStyle,getNews}) {
  const [key,setKey] = useState('');

  const handleSearch =(e)=>{
    e.preventDefault();
    if(key.length>3){
      let response = getNews(key);
      response.then(()=>{
        document.getElementById('search').reset();
      })
      
    }
  }
  return (
    <div className="navbar">
      <div className="navbar__left">
        <IconButton onClick={()=>sidenav?setSideNav(false) || setStyle('0 auto'):setSideNav(true) || setStyle('0 auto')}>
          <MenuIcon />
        </IconButton>
        <span className="brand">Newsify</span>
      </div>
      <div className="navbar__right">
        <div className="searchbar__news">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <form onSubmit={handleSearch} id="search" method="post">
          <input
            type="text"
            name="skey"
            id="skey"
            vallue={key}
            onChange={(e)=>setKey(e.target.value)}
            placeholder="Search for topics,locations & sources"
          />
          </form>
        </div>
      </div>
    </div>
  );
}
