import React from 'react';
import axios from 'axios'
import SearchBar from './SearchBar'

import '../App.css';
class App  extends React.Component{

  state = {images: []};

  onSearchSubmit = async (term) => {
   const response = await axios
       .get('https://api.unsplash.com/search/photos',{
     params: {query: term},
     headers: {
       Authorization: 'Client-ID cc8f2faf129153763346755cd3c8c9dc31b2b4afc183faa95de61305150f6aee'
     }
   });

   this.setState({
     images: response.data.results,
   })
  }

  render(){
    return (
        <div className="ui container">
          <SearchBar runOnSubmit={this.onSearchSubmit}/>
          Found: {this.state.images.length} images
        </div>
    )
  }
}
export default App;
