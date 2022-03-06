import { faCameraRetro, faMusic } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const Navbar = () => {
    return (
        <header>
            <p id="name">Matthew Gurman</p>
            <div id="nav">
                <ul>
                    <li><a className="grow" href="/">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li>
                        <div className="dropdown">
                            <span>Extras</span>
                            <div className="dropdown-content">
                                <ul id="dropdown-list">
                                    <li><a className="dropdown-link" href="/photography">Photography</a></li>
                                    <li><a className="dropdown-link" href="/music">Music</a></li>
                                    <li><a className="dropdown-link" href="/books">Books</a></li>
                                    <li><a className="dropdown-link" href="/podcasts">Podcasts</a></li>
                                    <li><a className="dropdown-link" href="/cuisine">Cuisine</a></li>
                                    <li><a className="dropdown-link" href="/thoughts">Thoughts</a></li>
                                    <li><a className="dropdown-link" href="/questions">Questions</a></li>

                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Navbar;