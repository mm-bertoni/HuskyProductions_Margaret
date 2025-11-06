import {useState, useEffect} from "react";
import Container from 'react-bootstrap/Container';

import Film from './filmToReview';

export default function FilmReviewList(){
    const [films, setFilms] = useState([]);

     

    useEffect(()=>{
        const reloadFilms = async () => {
        const res = await fetch("/api/films");
        if(!res.ok){
            console.error("Failed to fetch films", res.status);
            return;

        } 
            const data = await res.json();
            setFilms(data);
        };
        reloadFilms();
        return () => {
            console.log("Fetching effect cleanup")
        }
    },[]);
    
    
    function renderFilm(film){
        return (
            <Film 
            director={film.director}
            title={film.title}
            genre={film.genre}
            screener={film.screener}
            status={film.status}
            />
        );

    }
    //useEffect(()=>{})
    return (
        <Container>
            if(films.length === 0){
                <Container>Loading films...</Container>
            } else {
                films.map(renderFilm)
            }
        </Container>
    )
}
