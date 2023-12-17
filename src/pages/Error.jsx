import { Link } from 'react-router-dom';

// React Bootstrap Components
import Container from 'react-bootstrap/Container';

function Error() {
    return (
      <>
        <Container className="pt-5">
          <h2>Page not found</h2>
          <p>Sorry, we can't seem to find the page you're looking for.</p>
          <Link>Back to home</Link>
        </Container>
      </>
    );
  }
  
  export default Error;
  