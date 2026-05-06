import "./Venue.css";

export function Venue(params) {

    return (<div className={'venue'} >
        <button onClick={(event) => params.closeModal(event)}>
            <span><i className="icon-x"></i></span>
        </button>
        <header className={'venueHeader'}>
            <img src={params.venue.image} alt={params.venue.description} />
            <div>
                <h1>Venue</h1>
                <h3>{params.venue.name}</h3>
            </div>
        </header>
        <div className={'venueInfo'}>
                <div>{params.venue.description}</div>
                <span>Homepage: <a href={params.venue.links.website} target="_blank" rel="noreferrer" >{params.venue.links.website}</a></span>
                <span>Email: <a href={`mailto://${params.venue.links.email}`} target="_blank" rel="noreferrer">{params.venue.links.email}</a></span>
            </div>
    </div>
    );
}