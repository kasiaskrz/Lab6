import { useState } from "react";
import axios from 'axios';

function Create() {
    {/* state variables for movie details */ }
    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');
    const [poster, setPoster] = useState('');

    {/* handle form submission */ }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(title, year, poster); // log data to the console

        // create a movie with a title, year, poster
        const movie = {
            title: title,
            year: year,
            poster: poster
        };

        // Send the movie data to the API
        axios.post('http://localhost:3000/api/movies', movie)
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err.data));
    }

    return (
        <div>
            <h2>This is my Create Component.</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">

                    {/* movie title input field */}
                    <label>Add Movie Title: </label>
                    <input type="text"
                        className="form-control"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                </div>

                <div className="form-group">
                    {/* movie year input field */}
                    <label>Add Movie Year: </label>
                    <input type="text"
                        className="form-control"
                        value={year}
                        onChange={(e) => { setYear(e.target.value) }}
                    />
                </div>

                <div className="form-group">
                    {/* movie poster URL input field */}
                    <label>Add Movie Poster URL: </label>
                    <input type="text"
                        className="form-control"
                        value={poster}
                        onChange={(e) => { setPoster(e.target.value) }}
                    />
                </div>
                <input type="submit" value="Add Movie" />
            </form>
        </div>
    );
}

export default Create;