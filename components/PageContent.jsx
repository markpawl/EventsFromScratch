import { useState } from 'react';
import './PageContent.css';

export const PageContent = (params) => {
    let [language, setLanguage] = useState("en");

    function onLanguageButtonPress(event, lang) {
        setLanguage(lang);
        event.stopPropagation();
    }

    function onClickNext(event) {
        params.onNext();
        event.stopPropagation();
    }

    function onClickPrevious(event) {
        params.onPrevious();
        event.stopPropagation();
    }

    function getArtist(){
        if(params.current.song.artist){
            return params.current.song.artist;
        }else{
            return params.current.event.artist.name;
        }
    }

    function getLyrics() {
        switch (language) {
            case "de": // german
                return params.current.song["lyrics-de"]
            default: // english
                return params.current.song["lyrics-en"]
        }
    }

    function getCaretClasses(showVariable){
        if(showVariable){
            // return "caretIcon bi bi-caret-down-fill";
            return "icon-caret-down-fill";
        }else{
            // return "caretIcon bi bi-caret-right-fill";
            return "icon-caret-right-fill";
        }
    }

    return <>
        <div   >
            <div className={'eventHeader'}
                onClick={params.toggleVenueModal}
            >
                <span onClick={params.toggleVenueModal}>
                    <i className={getCaretClasses(params.showVenue)} ></i>
                </span>                
                <span >
                    &nbsp;{params.current.event.title} @ {params.event.venue.name}
                </span>
            </div>

            <div className={'songHeader'}  >
                <span onClick={params.toggleSidebar}>
                    <i className={getCaretClasses(params.showSidebar)} ></i>
                </span>
                <span className={"songTitle"} onClick={params.toggleSidebar} >
                    &nbsp;
                    <span style={{ fontSize: "medium", fontWeight: "normal" }}>{params.current.song.title} </span>
                    &nbsp;
                </span>
                <span style={{ fontSize: "small", paddingTop: "4px" }}>({params.current.position })&nbsp;</span>
                <button
                    onClick={(event) => onClickPrevious(event)}
                    style={(params.isFirst) ? { backgroundColor: "lightgrey" } : {}}
                >
                    <span><i
                        className="icon-caret-left" // -fill
                    ></i></span>
                </button>
                &nbsp;
                <button
                    onClick={(event) => onClickNext(event)}
                    style={(params.isLast) ? { backgroundColor: "lightgrey" } : {}}
                >
                    <span><i
                        className="icon-caret-right" //-fill
                    ></i></span>
                </button>
                &nbsp;
                <span
                    className={(language === "en" ? "borderBlack" : "borderWhite")}
                    onClick={(event) => onLanguageButtonPress(event, "en")}
                ><i className="icon-usaFlag" ></i></span>
                <span
                    className={(language === "de" ? "borderBlack" : "borderWhite")}
                    alt="germany flag"
                    onClick={(event) => onLanguageButtonPress(event, "de")}
                ><i className="icon-germanyFlag" ></i></span>
            </div>
        </div>

        <pre className={'preContent'}>{getLyrics() + " (c) " + getArtist()}</pre>
        <div className={'pageEnd'}></div>
    </>
}