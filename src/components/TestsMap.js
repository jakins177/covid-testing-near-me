import React, { Component } from 'react'
import Geocode from "react-geocode";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

 const GOOGLE_MAPS_API_KEY = "AIzaSyBsA5qDK3HxdyBR4rhFfuxpUZ2WK0ACCCE";


 Geocode.setApiKey(GOOGLE_MAPS_API_KEY);


export class TestsMap extends Component {

    constructor(props) {
        super(props);
        this.state = {
          searchedLNG: -74.0059728,
          searchedLAT: 40.7127753,
          placesArray: [],
          activeMarker: {},
          selectedPlace: {},
          selectedPhone: "",
          showingInfoWindow: false,
          address: ''
        }

        this.submitInput = this.submitInput.bind(this);

    }

    handleChange = address => {
      this.setState({ address });
    };

    // handleSelect = address => {
    //   geocodeByAddress(address)
    //     .then(results => getLatLng(results[0]))
    //     .then(latLng => console.log('Success', latLng))
    //     .catch(error => console.error('Error', error));
    // };

    onMarkerClick = (props, marker) =>
    this.fetchPlaceDetail(props,marker);

    onInfoWindowClose = () =>
    this.setState({
      activeMarker: null,
      showingInfoWindow: false
    });

  onMapClicked = () => {
    if (this.state.showingInfoWindow)
      this.setState({
        activeMarker: null,
        showingInfoWindow: false
      });
  };


    getGeocodeForLocation(locationTerm) {

        Geocode.fromAddress(locationTerm).then(
            response => {
              const { lat, lng } = response.results[0].geometry.location;
              console.log("THE LONGLAT IS : ");
              console.log(lat, lng);

              this.setState({
                searchedLNG : lng,
                searchedLAT : lat
              })

              this.fetchPlaces();

            },
            error => {
              console.error(error);
            }
          );


    }


    fetchPlaceDetail(props,marker){

      const proxyurl = "https://cors-anywhere.herokuapp.com/";

      fetch( proxyurl + `https://maps.googleapis.com/maps/api/place/details/json?place_id=${props.placeID}&fields=name,rating,formatted_phone_number&key=${GOOGLE_MAPS_API_KEY}`)
   // fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${this.state.searchedLAT},${this.state.searchedLNG}&radius=3000&keyword=corona%20virus%20Testing&key=${GOOGLE_MAPS_API_KEY}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
       
      console.log("PLACE DETAIL DATA: ");
      console.log(data);
     
            
      this.setState({
        activeMarker: marker,
        selectedPlace: props,
        selectedPhone: data.result.formatted_phone_number,
        showingInfoWindow: true
      })

    })

    }

    fetchPlaces(){

      const proxyurl = "https://cors-anywhere.herokuapp.com/";

        fetch( proxyurl + `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${this.state.searchedLAT},${this.state.searchedLNG}&radius=5000&keyword=covid-19%testing&key=${GOOGLE_MAPS_API_KEY}`)
     // fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${this.state.searchedLAT},${this.state.searchedLNG}&radius=3000&keyword=corona%20virus%20Testing&key=${GOOGLE_MAPS_API_KEY}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
         
        console.log("FACILITY DATA: ");
        console.log(data.results);
              
        this.setState({
            placesArray: data.results
        })
  
      })

    }

    componentDidMount() {
        //this.getGeocodeForLocation("new york");

    }

    submitInput(event) {

        event.preventDefault();

        let searchTerm = document.getElementById("search_term").value;
            console.log(searchTerm);

            if(searchTerm)
            {
                this.getGeocodeForLocation(searchTerm);
            }
    }

    render() {
        return (

  
            <div>
                <h2>Enter Your City Or Zipcode</h2>

                <form onSubmit={this.submitInput}>
 
 
 {/* <input type="text" id="search_term" name="lname" /> */}

 <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: 'Search Places ...',
                className: 'location-search-input',
                id:'search_term'
              })}
            />
            <div style={{color: "black"}} className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>



      <br/><br/>
 
 
  <input type="submit" value="Submit"/>
</form> 
<br/><br/>

<Map google={this.props.google} zoom={13} center={{
            lat: this.state.searchedLAT,
            lng: this.state.searchedLNG
          }}>


              {this.state.placesArray.map((facility) => (
         
                  <Marker vicinity= {facility.vicinity} phoneNumber = "" name = {facility.name} placeID = {facility.place_id} key = {facility.place_id} position = {{lat: facility.geometry.location.lat, lng: facility.geometry.location.lng}}
                  
                  onClick={this.onMarkerClick}
                  />
              

              ))}

<InfoWindow
          marker={this.state.activeMarker}
          onClose={this.onInfoWindowClose}
          visible={this.state.showingInfoWindow}
        >
          <div>
              <h4 style={{color: "black"}}>{this.state.selectedPlace.name}</h4>
              <h4 style={{color: "black"}}>{this.state.selectedPlace.vicinity}</h4>
              <h4 style={{color: "black"}}>{this.state.selectedPhone}</h4>
          </div>
        </InfoWindow>



</Map>

                
            </div>
           
        )
    }
}

export default GoogleApiWrapper({
    apiKey: (GOOGLE_MAPS_API_KEY)
  })(TestsMap)


  