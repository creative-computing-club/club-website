import * as React from 'react';
import { connect } from 'react-redux';
import { Container, Header, Item } from 'semantic-ui-react';

import "../styles/components/events.scss";
import "../styles/app.scss";

interface ICover {
  offset_y: Int16Array,
  offset_x: Int16Array,
  id: string,
  source: string
}

interface IEvents {
  name: string,
  description: string,
  id: string,
  place: { name: string },
  start_time: string,
  cover: ICover
}

interface IEventsProps {
  events: IEvents[];
  eventCovers: [];
}

class Events extends React.Component<IEventsProps> {

  public constructor(props) {
    super(props);
  }

  public render() {
    const upcomingEvents = this.props.events.filter((event) => new Date(event.start_time) > new Date());
    const pastEvents = this.props.events.filter((event) => new Date(event.start_time) < new Date())

    return (
      <Container fluid className="page-container">
        <h1 className="page-title">Events</h1>
        <Header as="h3" className="events-title">Upcoming Events</Header>
        {this.renderUpcomingEvents(upcomingEvents)}
        <Header as="h3" className="events-title">Past Events</Header>
        {this.renderEvents(pastEvents)}
      </Container>
    )
  }

  private renderEvents(events) {
    return (
      <Item.Group>
        {events.map((event, i) =>
          <Item key={"event" + i} className={"events-item-card"}>
            <Item.Image fluid key={"image-" + i} src={event.cover.source} className="event-image" size={"medium"} />
            <Item.Content className={"events-item-card-desc"}>
              <Item.Header as="h3">{event.name}</Item.Header>
              <Item.Description>
                {convertDate(event.start_time)}, {event.place.name}
                <br />
                <a href={"https://www.facebook.com/" + event.id} className="event-link" target="_blank"> Facebook Event</a>
                <br /><br />
                {event.description}
              </Item.Description>
            </Item.Content>
          </Item>
        )}
      </Item.Group>
    );
  }

  private renderUpcomingEvents(upcomingEvents) {
    if (upcomingEvents.length === 0) {
      return (
        <p className="events-text">We don't have any upcoming events right now, but stay tuned for future events!</p>
      );
    }
    else {
      return this.renderEvents(upcomingEvents);
    }
  }
}

function convertDate(dateToBeConverted) {
  return (new Date(dateToBeConverted)).toDateString()
}

function mapStateToProps(state) {
  return { events: state.eventsReducer.event, eventCovers: state.eventsReducer.eventCovers };
}

export default connect(mapStateToProps)(Events);