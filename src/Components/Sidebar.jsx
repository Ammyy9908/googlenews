import React from 'react'
import Option from './Option'
import FlagIcon from '@material-ui/icons/Flag';
import PublicIcon from '@material-ui/icons/Public';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import BusinessIcon from '@material-ui/icons/Business';
import CodeIcon from '@material-ui/icons/Code';
import LocalMoviesIcon from '@material-ui/icons/LocalMovies';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import LanguageIcon from '@material-ui/icons/Language';
import {Link} from 'react-router-dom';

function Sidebar() {
    return (
        <div className="sidebar">
          <a href="/"><Option Icon={LanguageIcon} text="Top stories" Class="stories"/></a>
          <a href="/india"><Option Icon={FlagIcon} text="India" Class="flag"/></a>
          <a href="/world"><Option Icon={PublicIcon} text="World" Class="world"/></a>
          <a href="/Bangalore"><Option Icon={LocationOnIcon} text="Your local news" Class="location"/></a>
          <a href="/business"><Option Icon={BusinessIcon} text="Business" Class="business"/></a>
          <a href="/technology"><Option Icon={CodeIcon} text="Technology" Class="tech"/></a>
          <a href="/entertainment"><Option Icon={LocalMoviesIcon} text="Entertainment" Class="entertainment"/></a>
          <a href="/sports"><Option Icon={DirectionsBikeIcon} text="Sports" Class="sports" /></a>
          <a href="/fitness"><Option Icon={FitnessCenterIcon} text="Fitness" Class="fitness"/></a>
        </div>
    )
}

export default Sidebar
