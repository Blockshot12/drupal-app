import React, { Component } from 'react';
import uuid from 'uuid';
import $ from 'jquery';
import TicketData from './Data/tickets.json';
import Header from './Components/Header/Header';
import Tickets from './Components/Tickets/Tickets';
import Footer from './Components/Footer/Footer';
import './styles/styles.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      tickets: []
    }
  }

  getLocalData() {
    this.setState({tickets: TicketData});
  }

  getData() {
    $.ajax({
      url: 'http://react.dd:8083/api/tickets', // Set Localhost
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({tickets: data}, function() {
          console.log(this.state);
        });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
      }
    });
  }

  componentWillMount() {
    //this.getData();
    this.getLocalData();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Tickets tickets={this.state.tickets} />
        <Footer />
      </div>
    );
  }
}

export default App;
