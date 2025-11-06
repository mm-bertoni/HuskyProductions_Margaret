import Container from 'react-bootstrap/Container';
import ReviewForm from '../Forms/reviewForm';

export default function FilmToReview({ director, title, genre, screener, status}){
    return(
        <>
            <Container>
                <div>
                    <h2>Film: {title}</h2>
                </div>
                <div>
                    <span>
                        <h3>Director:</h3> 
                        <p>{director}</p>
                    </span>
                    <span>
                        <h3>Genre:</h3> 
                        <p>{genre}</p>
                    </span>
    
                    <span>
                        <h3>Screener Website:</h3> 
                        <p>{screener}</p>
                    </span>
                    <span>
                        <h3>Selection Status:</h3> 
                        <p>{status}</p>
                    </span>
                </div>
                <div>
                    <ReviewForm/>
                </div>
            </Container>
        </>

    );

}