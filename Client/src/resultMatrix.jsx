import React, { Suspense } from 'react'
import SearchResults from './searchResult'
import Spinner from './spinner'
import Navbar from './Navbar'

function ResultMatrix() {
    const SearchResults = React.lazy(()=>(
        import('./searchResult')
    ))
  return (
    <div>
        <Navbar />
        <Suspense fallback = {<Spinner/>}>
            <SearchResults/>

        </Suspense>
       
      
    </div>
  )
}

export default ResultMatrix
