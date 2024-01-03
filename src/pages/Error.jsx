// Libraries
import { Link } from 'react-router-dom';

// React Bootstrap Components
import Container from 'react-bootstrap/Container';

function Error() {
    return (
      <>
        <Container>
          <div className="body-content">
            <h1 className="title">Page not found</h1>
            <p>Sorry, we can't seem to find the page you're looking for.</p>
            <Link to="/">Back to home</Link>
          </div>
        </Container>
      </>
    );
  }

export default Error;