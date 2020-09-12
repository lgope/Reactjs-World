import React from 'react';
import { Link } from 'react-router-dom';

import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';

// import Response from '../response';
import useGoogleSearch from '../useGoogleSearch';
import './SearchPage.style.css';

import { useStateValue } from './StateProvider';
import Search from './Search.component';

const SearchPage = () => {
  const [{ term }, dispatch] = useStateValue();

  // LIVE API CALL
  const { data } = useGoogleSearch(term);

  // test purpose
  // const data = Response;

  // console.log('data ', data);

  return (
    <div className='searchPage'>
      <div className='searchPage_header'>
        <Link to='/'>
          <img
            className='searchPage_logo'
            src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
            alt='google'
          />
        </Link>
        <div className='searchPage_headerBody'>
          <Search hideButtons />
          <div className='searchPage_options'>
            <div className='searchPage_optionsLeft'>
              <div className='searchPage_option'>
                <SearchIcon />
                <Link to='/all'>All</Link>
              </div>
              <div className='searchPage_option'>
                <DescriptionIcon />
                <Link to='/all'>News</Link>
              </div>
              <div className='searchPage_option'>
                <ImageIcon />
                <Link to='/all'>Images</Link>
              </div>
              <div className='searchPage_option'>
                <LocalOfferIcon />
                <Link to='/all'>shopping</Link>
              </div>
              <div className='searchPage_option'>
                <RoomIcon />
                <Link to='/all'>maps</Link>
              </div>
              <div className='searchPage_option'>
                <MoreVertIcon />
                <Link to='/all'>more</Link>
              </div>
            </div>
            <div className='searchPage_optionsRight'>
              <div className='searchPage_option'>
                <Link to='/settings'>Settings</Link>
              </div>
              <div className='searchPage_option'>
                <Link to='/tools'>Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* true / term */}
      {term && (
        <div className='searchPage_results'>
          <p className='searchPage_resultCount'>
            About {data?.searchInformation.formattedTotalResults} results ({' '}
            {data?.searchInformation.formattedSearchTime}) for {term}
          </p>
          {data?.items.map(item => (
            <div className='searchPage_result'>
              <a className='searchPage_resultLink' href={item.link}>
                {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap?.cse_image[0]?.src && (
                    <img
                      className='searchPage_resultImage'
                      src={item.pagemap?.cse_image[0]?.src}
                      alt='search'
                    />
                  )}
                {item.displayLink} <span className='down_arrow'>&#9660;</span>
              </a>
              <a href={item.link} className='searchPage_resultTitle'>
                <h2>{item.title}</h2>
              </a>
              <p className='searchPage_resultSnippet'>{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
