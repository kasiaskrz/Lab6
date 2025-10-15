import { useEffect, useState } from "react";
import Movies from "./Movies"; // import the Movies component
import axios from 'axios';

const Read = () => {
const [myMovies, setMovie] = useState([]);

useEffect(
    ()=>{
        // do some http client work
        axios.get('https://data-rep-mern-application.github.io/dataserver/movies.json')
        .then((response)=>{
            console.log(response.data.myArray);
            setMovie(response.data.myArray);
        })
        .catch((error)=>{console.log(error)});
    },[]
);

    return (
        <div>
            <h1>Hello from Read component</h1>
            {/* pass the movie data as a prop to the Movies component */}
            <Movies myMovies={myMovies} />
        </div>
    );
}

export default Read;
