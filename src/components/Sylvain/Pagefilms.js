import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CardFilms from './CardFilms'



const PageFilms = (props) => {


    const [movie, setMovie] = useState([])

    useEffect(() => {
        getApi()
    }, [])


    const getApi = () => {
        axios.get('https://hackathon-wild-hackoween.herokuapp.com/movies')
            .then(response => setMovie(response.data.movies))
        }

        return (
            <>
            {movie.map(x => (
                {props = 'Marathon' ? x.filter(y => {y.title == 'Final_Destination' || y.title == 'Final_ Destnation_2' || y.title == 'Final_ Destnation_3' || y.title == 'Final_ Destnation_4' || y.title == 'Final_ Destnation_5' || y.title == 'Scream' || y.title == 'Scream_2' || y.title == 'Scream_3' || y.title == 'Scream_4' || y.title == 'Paranormal_Activity' || y.title == 'Paranormal_Activity_2' || y.title == '[REC]' || y.title == '[REC]_2' || y.title == 'Saw' || y.title == 'Saw_2' || y.title == 'Saw_3' || y.title == 'Saw_4' || y.title == 'Saw_5' || y.title == 'Saw_6' || y.title == 'Saw_3D' || y.title == 'The_Hill_Have_Eyes' || y.title == 'The_Hill_Have_Eyes_2' || y.title == 'Insidious' || y.title == 'Insidious:_Chapter_2'} 
                :
                props = 'Boop' ? x.filter(y => {y.title == 'Final_Destination' 
            })}
            </>
        )
    }

export default PageFilms



//<CardFilms title={x.title} image={x.posterUrl} />