import React, { Component } from 'react';
import TicketItem from './TicketItem';

class Tickets extends Component {
  render() {
    let ticketItems;
    if(this.props.tickets) {
      ticketItems = this.props.tickets.map(ticket => {
      //console.log(ticket.nid);
        return (
          <TicketItem key={ticket.uuid} ticket={ticket} />
        );
      });
    }
    return (
      <div className="ticket">
        <h3>Helpdesk</h3>
        <ul className="ticket__list">
          {ticketItems}
        </ul>
      </div>
    );
  }
}

export default Tickets;
