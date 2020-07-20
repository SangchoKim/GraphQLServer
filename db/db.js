 import defaultAxios from 'axios';
 
 const API_URL = 'https://yts.am/api/v2/list_movies.json?'; 
 const API_DETAIL_URL = 'https://yts.mx/api/v2/movie_details.json?'; 
 const API_SUGGEST_URL = 'https://yts.mx/api/v2/movie_suggestions.json?'; 

 const getMoveiesByApi = async(limit = 0 , rating = 0) => {
   const result = await defaultAxios.get(`${API_URL}limit=${limit<0?0:limit}&minimum_rating=${rating<0?0:rating}`);
   return result.data.data.movies;
 }

 const getMoveie = async(id = 0) => {
   const result = await defaultAxios.get(`${API_DETAIL_URL}movie_id=${id<0?0:id}`);
   return result.data.data.movie;
 }

 const getSuggestedMovie = async(id = 0) => {
   const result = await defaultAxios.get(`${API_SUGGEST_URL}movie_id=${id<0?0:id}`);
   return result.data.data.movies;
 }
 
 const people =[
    {
        id:1,
        name:'nicolas',
        age:18,
        gender:'Female'
     },
     {
        id:2,
        name:'santos',
        age:30,
        gender:'Male'
     },
     {
        id:3,
        name:'Shelley',
        age:31,
        gender:'Female'
     },
     {
        id:4,
        name:'Jj',
        age:32,
        gender:'Male'
     },
     {
        id:5,
        name:'Lucas',
        age:40,
        gender:'Male'
     },  
]

 const getById = id => people.find(person => id === person.id);

 let movies =[
    {
        id:1,
        name:'Star Wars',
        score:5,
        
     },
     {
        id:2,
        name:'Avengers',
        score:4,
        
     },
     {
        id:3,
        name:'The gotfater',
        score:3,
        
     },
     {
        id:4,
        name:'Logan',
        score:2,
        
     },
     {
        id:5,
        name:'HarryPoter',
        score:1,
        
     },  
]

const getMovies = () => movies;
const getMovie = id => movies.find(movie => id === movie.id);
const addMovie = (name,score) => {
    const newMovie = {
        id:`${movies.length+1}`,
        name,
        score
    }
    movies.push(newMovie)
    return newMovie;
};
const deleteMovies = (id) => {
    const cleanedMovies = movies.filter(movie => movie.id !== id );
    if(movies.length> cleanedMovies.length){
        movies = cleanedMovies;
        return true;
    }else{
        return false;
    }
};


export {
    people, 
    getById,
    movies,
    getMovies,
    getMovie,
    addMovie,
    deleteMovies,
    getMoveiesByApi,
    getMoveie,
    getSuggestedMovie
}
   
