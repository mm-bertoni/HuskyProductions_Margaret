import Container from 'react-bootstrap/Container';
import ReviewForm from '../Forms/reviewForm';

export default function FilmToReview({director, title, genre, screener, status, onReload}){
    return(
        <>
            <Container>
                <div>
                    <h2>Film: {title}</h2>
                </div>
                <div>
                    <span>
                        <h2>Director:</h2> 
                        <h3>{director}</h3>
                    </span>
                    <span>
                        <h2>Genre:</h2> 
                        <h3>{genre}</h3>
                    </span>
    
                    <span>
                        <h2>Screener Website:</h2> 
                        <h3>{screener}</h3>
                    </span>
                    <span>
                        <h2>Selection Status:</h2> 
                        <h3>{status}</h3>
                    </span>
                </div>
                
            </Container>
            <Container>
             
                <ReviewForm
                director={director}
                title={title}
                genre={genre}
                screener={screener}
                status={status}
                onReload={onReload}
                />
               
            </Container>
        </>

    );

}