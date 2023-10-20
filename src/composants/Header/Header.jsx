
function Header() {

    return (
             
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                <a className="navbar-brand" href="#" style={{fontSize:30}}>&#128081; KingVlad</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon bg-white"></span>
                </button>
                <div className="nav justify-content-center collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav text-primary ">
                    <li className="nav-item">
                        <a className="nav-link active text-primary" aria-current="page" href="index.html">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-primary" href="projet.html">Projets</a>
                    </li>
                    <li classNameName="nav-item">
                        <a className="nav-link text-primary" href="#contact">Contact</a>
                    </li>
                    </ul>
                </div>
                </div>
            </nav>

    )

    
    
}
export default Header