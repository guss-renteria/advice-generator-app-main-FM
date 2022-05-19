import { Link } from 'react-router-dom'

import './not_found.style.scss'

const NotFound = () => {
  // * return
  return (
    <section className='not-found'>
      <h1>404 Not found</h1>
      <Link to='/' replace>go to main view</Link>
    </section>
  )
}

export default NotFound
