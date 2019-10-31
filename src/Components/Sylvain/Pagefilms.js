import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CardFilms from './CardFilms'



const PageFilms = (props) => {

    const test = {props}
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const getApi = async () => {
            await axios.get('https://hackathon-wild-hackoween.herokuapp.com/movies')
                .then(response => setMovies(response.data.movies))
            }
        getApi()
    }, [test])


   

        return (
            
        <>
            { test =='Le Marathonnien' ? movies.filter((movie) => movie.title === 'Final_Destination' || movie.title === 'Final_Destination_2' || movie.title == 'Final_Destination_3' || movie.title == 'Final_Destination_4' || movie.title == 'Final_Destination_5' || movie.title == 'Scream' || movie.title == 'Scream_2' || movie.title == 'Scream_3' || movie.title == 'Scream_4' || movie.title == 'Paranormal_Activity' || movie.title == 'Paranormal_Activity_2' || movie.title == '[REC]' || movie.title == '[REC]_2' || movie.title == 'Saw' || movie.title == 'Saw_2' || movie.title == 'Saw_3' || movie.title == 'Saw_4' || movie.title == 'Saw_5' || movie.title == 'Saw_6' || movie.title == 'Saw_3D' || movie.title == 'The_Hills_Have_Eyes' || movie.title == 'The_Hills_Have_Eyes_2' || movie.title == 'Insidious' || movie.title == 'Insidious:_Chapter_2').map((movie) => <CardFilms title={movie.title} image={movie.posterUrl}/>) 

            : test == 'Le psycho' ? movies.filter((movie) => movie.title === 'Hereditary' || movie.title == 'Saw' || movie.title == 'Saw_2' || movie.title == 'Saw_3' || movie.title == 'Saw_4' || movie.title == 'Saw_5' || movie.title == 'Saw_6' || movie.title == 'Saw_3D'|| movie.title == 'Akmareul_boatda' || movie.title == 'The_s_Have_Eyes' || movie.title == 'Let_Me_In' || movie.title == "Julia's_Eyes" || movie.title == 'Esther' || movie.title === 'Final_Destination' || movie.title === 'Final_Destination_2' || movie.title == 'Final_Destination_3' || movie.title == 'Final_Destination_4' || movie.title == 'Final_Destination_5' || movie.title == 'Insidious' || movie.title == 'Insidious:_Chapter_2' || movie.title == 'Shelter' || movie.title == 'Us' || movie.title == 'Nine_Dead' || movie.title == 'Devil' || movie.title == 'The_Thing' || movie.title == 'The_Ward' || movie.title == 'Derrière_les_murs' || movie.title == 'The_Exorcist' || movie.title == 'Le_Village_des_ombres' || movie.title == 'Two_Eyes_Staring' || movie.title == 'Web_Cam' || movie.title == 'Shining' || movie.title == 'Psychose' || movie.title == 'Martyrs').map((movie) =><CardFilms title={movie.title} image={movie.posterUrl}/> ) 

            :test == 'Le sanguinaire' ? movies.filter((movie) => movie.title === 'Final_Destination' || movie.title === 'Final_Destination_2' || movie.title == 'Final_Destination_3' || movie.title == 'Final_Destination_4' || movie.title == 'Final_Destination_5' || movie.title == 'Saw' || movie.title == 'Saw_2' || movie.title == 'Saw_3' || movie.title == 'Saw_4' || movie.title == 'Saw_5' || movie.title == 'Saw_6' || movie.title == 'Saw_3D' || movie.title == 'The_Hills_Have_Eyes' || movie.title == 'Scream' || movie.title == 'Scream_2' || movie.title == 'Scream_3' || movie.title == 'Scream_4' || movie.title == 'Survival_of_the_Dead' || movie.title == 'Night_of_the_Demons' || movie.title == 'Dream_Home' || movie.title == 'Hatchet' || movie.title == 'Hatchet_2' || movie.title == 'Necromentia' || movie.title == 'Pig' || movie.title == 'Madness' || movie.title == 'Cannibal_Holocaust' || movie.title == '28_Days_Later...' || movie.title == '28_Weeks_Later...').map((movie) =><CardFilms title={movie.title} image={movie.posterUrl}/> ) 

            : test == "L'esprit" ? movies.filter((movie) => movie.title === 'Paranormal_Activity' || movie.title == 'Paranormal_Activity_2' || movie.title == 'Insidious' || movie.title == 'Insidious:_Chapter_2' || movie.title == 'A_Nightmare_on_Elm_street' || movie.title == '[REC]'|| movie.title == '[REC]_2' || movie.title == "Julia's_Eyes" || movie.title == 'Devil'|| movie.title == 'The_Thing' || movie.title == 'The_Last_Exorcism' || movie.title == 'Survival_of_the_Dead'|| movie.title == 'Vanishing_on_7th_Street' || movie.title == 'Derrière_les_murs' || movie.title == 'The_Exorcist' || movie.title == 'Djinns' || movie.title == 'Silent_House_(The)' || movie.title == 'Two_Eyes_Staring' || movie.title == 'The_Blair_Witch_Project' || movie.title == 'Evil_Dead').map((movie) =><CardFilms title={movie.title} image={movie.posterUrl}/> ) 

            : test == "L'historien" ? movies.filter((movie) => movie.title === 'Esther' || movie.title == 'I_Spit_on_Your_Grave' || movie.title == 'Apollo_18' || movie.title == 'The_Last_Exorcism' || movie.title == 'Captifs' || movie.title == 'The_Exorcist' || movie.title == 'Sept_jours_du_Talion_(Les)' || movie.title == 'Silent_House_(The)' || movie.title == 'Dream_Home' || movie.title == 'Blood_Island' || movie.title == 'The_Blair_Witch_Project').map((movie) =><CardFilms title={movie.title} image={movie.posterUrl}/> ) 

            : test == "L'ancien" ? movies.filter((movie) => movie.title == 'Scream' || movie.title == 'Scream_2' || movie.title == 'Scream_3' || movie.title == 'Scream_4' || movie.title == 'The_Hills_Have_Eyes' || movie.title == 'A_Nightmare_on_Elm_Street' || movie.title == 'Scream' || movie.title == 'Scream_2' || movie.title == 'Scream_3' || movie.title == 'Scream_4' || movie.title == 'The_Hills_Have_Eyes_2' || movie.title == 'Madness' || movie.title == 'Shining' || movie.title == 'Psychose' || movie.title == 'Dawn_of_the_Dead' || movie.title == 'Night_of_the_Living_Dead'|| movie.title == 'Carrie' || movie.title == 'Nosferatu' || movie.title == 'The_Birds' || movie.title == 'Evil_Dead' || movie.title == 'Poltergeist' || movie.title == 'Eraserhead' || movie.title == "Jacob's_Ladder" ).map((movie) =><CardFilms title={movie.title} image={movie.posterUrl}/> ) 

            : movies.filter((movie) => movie.title === 'Shelter' || movie.title == 'Vanishing_on_7th_Street' || movie.title == 'Scream' || movie.title == 'Scream_2' || movie.title == 'Scream_3' || movie.title == 'Scream_4' || movie.title == 'Captifs' || movie.title == 'Derrière_les_murs' || movie.title == 'Le_Village_des_ombres' || movie.title == 'Territoires' || movie.title == 'Sept_jours_du_Talion_(Les)' || movie.title == 'Propriété_interdite' || movie.title == 'Hatchet' || movie.title == 'Hatchet_2' || movie.title == 'Friit_Vilt' || movie.title == 'Friit_Vilt_2' || movie.title == 'Friit_Vilt_3' || movie.title == 'Invasion_of_the_Not_Quite_Dead' || movie.title == 'Web_Cam' || movie.title == 'Cehennem').map((movie) =><CardFilms title={movie.title} image={movie.posterUrl}/> ) 
            }
           
        </>
    )
}

export default PageFilms

