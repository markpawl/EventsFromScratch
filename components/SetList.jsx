import { useState } from 'react';
import './SetList.css';

export const SetList = (params) => {
    // locater { EVENT, setNUMBER, songNUMBER }
    const[localLocater, setLocalLocater] = useState({...params.locater});

    let eventObject = localLocater.event; 
    let selectedSet = localLocater.setNumber;
    let selectedSong = localLocater.songNumber;

    function onSetClick(index) {
        if( index === selectedSet){
            setLocalLocater({ event: eventObject, setNumber: -1, songNumber: selectedSong });
        }
        if (index !== selectedSet) {
            setLocalLocater({ event: params.locater.event, setNumber: index, songNumber: -1 });
        }
    }

    function onSongClick(event, index) {
        setLocalLocater({ ...localLocater, songNumber:index });
        params.setLocater({ ...localLocater, songNumber:index });
        params.closeModal(event);
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

    function Set(params) {

        return (
            <div >
                <div className={(selectedSet === params.setIndex) ? 'setTitle setSelected' : 'setTitle'}
                    onClick={() => onSetClick(params.setIndex)}
                >
                    <span>
                        <i className={getCaretClasses((selectedSet === params.setIndex))} ></i>
                    </span>
                    &nbsp;
                    {params.set.name} {params.set.time}
                </div>
                <div className={(selectedSet === params.setIndex) ? "show" : "hide"} >
                    <Songs
                        {...params}
                        songs={params.set.songs}
                    />
                </div>
            </div>
        );
    }

    function Sets(params) {
        return (<div>{
            params.locater.event.sets.map((set, index) => {
                return <Set {...params} key={index} setIndex={index} set={set} />
            })
        }</div>
        );
    }

    function Songs(params) {

        return (<ul className='songIndent'>{
            params.songs.map((item, index) => {
                return <li
                    key={index}
                    onClick={(event) => onSongClick(event, index)}
                    className={(index === selectedSong) ? 'bolded' : ''}
                >{item.title}</li>
            })
        }</ul>
        );
    }

    return (
        <>
            <div className='eventTitle' >Sets & Songs</div>
            <div>
                <Sets {...params} />
            </div>
        </>
    )
}