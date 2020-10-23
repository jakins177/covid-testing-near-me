import React, { Component, useState } from 'react'
import Geocode from "react-geocode";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

 const GOOGLE_MAPS_API_KEY = "AIzaSyBsA5qDK3HxdyBR4rhFfuxpUZ2WK0ACCCE";


 Geocode.setApiKey(GOOGLE_MAPS_API_KEY);


export class TestsMap extends Component {

    constructor(props) {
        super(props);
        this.state = {
          searchedLNG: -74.0059728,
          searchedLAT: 40.7127753,
          placesArray: [],
          selectedFacility: null
        }

        this.submitInput = this.submitInput.bind(this);

    }
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

    fetchPlaces(){

        const proxyurl = "https://cors-anywhere.herokuapp.com/";

        fetch( proxyurl + `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${this.state.searchedLAT},${this.state.searchedLNG}&radius=3000&keyword=corona%20virus%20Testing&key=${GOOGLE_MAPS_API_KEY}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
         
        console.log("FACILITY DATA: ");
        console.log(data.results);
              
        this.setState({
            placesArray: data.results
        })
        // this.setEmployeeData();
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
  <input type="text" id="search_term" name="lname" /><br/><br/>
  <input type="submit" value="Submit"/>
</form> 
<br/><br/>

<Map google={this.props.google} zoom={14} center={{
            lat: this.state.searchedLAT,
            lng: this.state.searchedLNG
          }}>


              {this.state.placesArray.map((facility) => (
         
                  <Marker key = {facility.place_id} position = {{lat: facility.geometry.location.lat, lng: facility.geometry.location.lng}}
                  
                  onClick={() => {
                  
                    this.setState({
                        selectFacility: facility
                    })
                   
                  }}
                  />
              

              ))}

{/* <Marker onClick={this.onMarkerClick}
        name={'brooklyn'} /> */}

{/* <InfoWindow onClose={this.onInfoWindowClose}>
    <div>
      <h1>Test name</h1>
    </div>
</InfoWindow> */}
{this.state.selectedFacility && ( 
    

    
    <InfoWindow position = {{lat: this.state.searchedLAT, lng: this.state.searchedLNG}}><div>facility details</div></InfoWindow>
)}
</Map>

                
            </div>
           
        )
    }
}

export default GoogleApiWrapper({
    apiKey: (GOOGLE_MAPS_API_KEY)
  })(TestsMap)


  