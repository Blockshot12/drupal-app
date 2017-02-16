import React, { Component } from 'react';

class TicketItem extends Component {
	render() {
		return (
			<li className="ticket__item">
				<a href="#"><h2 className="ticket__title">{this.props.ticket.title} - <span className="ticket__id">{this.props.ticket.field_ticketid}</span></h2></a>
				<p className="ticket__date">{this.props.ticket.created}</p>
				<p className="ticket__details">
					Afdeling: <span className="ticket__details--status">{this.props.ticket.field_afdeling}</span><br />
					Status: <span className="ticket__details--status">{this.props.ticket.field_status}</span>
				</p>
				<p className="ticket__text">{this.props.ticket.field_bericht}</p>
				<a className="btn btn--blue">Open Ticket</a>
			</li>
		);
	}
}

export default TicketItem;
