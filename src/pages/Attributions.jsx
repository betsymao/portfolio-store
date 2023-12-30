// React Bootstrap Components
import Container from 'react-bootstrap/Container';

function Attributions() {
    return (
      <>
        <Container>
            <div className="body-content">
                <h1 className="title">Attributions</h1>
                <h3 className="subtitle">Images</h3>
                <p>Images <a href="https://unsplash.com/photos/a-man-squatting-in-front-of-a-white-truck-7BfiT4AnL34">(1)</a> <a href="https://unsplash.com/photos/woman-in-gray-t-shirt-and-gray-pants-sitting-on-gray-concrete-bench-during-daytime-YsiSAp3ccvk">(2)</a> by <a href="https://unsplash.com/@thevoncomplex">Mike Von</a> are sourced from <a href="https://unsplash.com/">Unsplash</a>.</p>
                <h3 className="subtitle">Icons</h3>
                <p>Icons are sourced from <a href="https://icons.getbootstrap.com/">Bootstrap Icons</a>.</p>
            </div>
        </Container>
      </>
    );
  }
  
  export default Attributions;
  