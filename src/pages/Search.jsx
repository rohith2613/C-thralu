import React from 'react'
import UseFetch from '../hooks/UseFetch';
import Card from '../components/Card';
import { useSearchParams } from 'react-router-dom';

import UseTitle from '../hooks/UseTitle';


const Search = ({apiPath}) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q") ;

  const {data: movies} = UseFetch(apiPath , queryTerm);

  UseTitle(`Search for ${queryTerm}`);

  return (
    <main>
      <section className='py-7'>
        <p className='text-3xl text-gray-700 dark:text-white'>{movies.length === 0 ? `No result for '${queryTerm}'`:`result for '${queryTerm}'`}</p>
      </section>
      <section className='max-w-7xl mx-auto py-7'>
        <div className='flex justify-start flex-wrap'>
            {movies.map((movie)=>(
              <Card key={movie.id} movie={movie} />
            ))}
        </div>
      </section>
    </main>
  )
}

export default Search
