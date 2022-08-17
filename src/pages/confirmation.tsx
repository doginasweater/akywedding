import { Link } from 'react-router-dom';


export const Confirmation: React.FC = () => {

  return (
    <div className="rsvp-full-form-container">
      <div className="rsvp-full-form-wrapper">
        <div className="rsvp-full-form">
          <h3>Thank you!</h3>
          <p>Your RSVP has been recorded.</p>
          <p>Be sure to see the <Link to="/travel">Travel</Link> page for more information if you are joining us, or perhaps view our <Link to="/registry">Registry</Link>.</p>
          <p>Please contact Aky or Andrew with any questions.</p>
        </div>
      </div>
    </div>
  );
};