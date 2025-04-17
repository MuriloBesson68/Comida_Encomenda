import {Link} from "react-router-dom"

function NavBar(){
    return(
        <header>
        <nav>
         
            <Link to="/">🏡Home</Link>
            <br/>
            <Link to="/Detalhe1">Lanche🍔</Link>
            <br/>
            <Link to="/Detalhe2">Hot-Dog🌭</Link>
            <br/>
            <Link to="/Detalhe3">Marmitex🍛</Link>
            <br/>
            <Link to="/contato">Contato📞</Link>
         
        </nav>
        </header>
    )
}

export default NavBar;