import "./Artist.css";

export function Artist(params) {

    return (<div className={'artist'} >
        <button onClick={(event) => params.closeModal(event)}>
            <span>
                <i className="icon-x"></i>
            </span>
        </button>
        <header className={'artistHeader'}>
            <img src="./images/markpawl-01-300.jpg" alt={params.artist.description} />
            <div>
                <h1>Artist</h1>
                <h3>{params.artist.name}</h3>
            </div>
        </header>
        <div className={'artistInfo'}>
                <div>{params.artist.description}</div>
                <span>Homepage: <a href={params.artist.links.website} target="_blank" rel="noreferrer" >markpawl.com</a></span>
                <span>Bandcamp: <a href={params.artist.links.bandcamp} target="_blank" rel="noreferrer" >markpaw.bandcamp.com</a></span>
                <span>Email: <a href={`mailto://${params.artist.links.email}`} target="_blank" rel="noreferrer">markpawl.music@gmail.com</a></span>
            </div>
        <p className={'bio'}>{`${params.artist.biography}`}</p>
    </div>
    );
}