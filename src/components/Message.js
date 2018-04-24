import React, {Component} from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import moment from 'moment'

export class Message extends Component {
  render() {
    const messageObj = this.props.message;
    const message = messageObj.message;

    // Should silently discard failed decryption
    // also solves the issue where it jumps from the "this is an OMEMO message"
    // to the decrypted message
    if (message.encrypted && !messageObj.encrypted) {
      return null;
    }

    return <li className={" " + (this.props.isSelf ? ' self ' : ' other ')}>
    <div className="avatar">        <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"/>      </div>
      <div className="message">
        <div className="messages">
          <p>{messageObj.body}</p>
          <div className="status">
          <time>{moment(messageObj.date).fromNow()}</time>
          <FontAwesomeIcon icon={messageObj.encrypted ? 'lock' : 'lock-open'} className="sec-icon"/>
          </div>
        </div>
      </div>
    </li>;
  }
}