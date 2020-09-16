import React from 'react';
import { useParams } from 'react-router-dom';

export default function DetailsPage() {
    const params = useParams();
    /**
     * Call server with imdbID
     * URL Format : http://localhost:3001/omdb/imdb/tt0944947
     * const imdbID = params.imdbID;
     */
    return (
       <h2> Details page : Imdb ID {params.imdbID}</h2>
    //    <p> Details page : Imdb ID {type}</p>
    )
}