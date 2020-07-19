// 스키마에 정의되어 있는데로 함수를 통해 알맞은 액션을 실행하는 곳
import { people, getById, getMovies, getMovie, addMovie, deleteMovies, getMoveiesByApi, } from '../db/db'
  

const resolvers = {
    Query:{
        people : () => people,
        person : ( _ , {id}) => getById(id),
        movies : () => getMovies(),
        movie : ( _ , {id}) => getMovie(id),
        moviesByAPI: (_ , {limit,rating}) => getMoveiesByApi(limit,rating),
    },
    Mutation:{
        addMovie: ( _ ,{name,score}) => addMovie(name,score),
        deleteMovies: ( _ ,{id}) => deleteMovies(id)
    }
}

export default resolvers;