# Explanation of Data Flow:
#### Initial Data Loading:

The App component first imports events data from ./events.js.
It then attempts to load a previously saved setNumber and songNumber from localStorage. If found, this data overrides the default starting position.
This combined information initializes the locater state.

#### App Component as Central Hub:

The App component holds the core state: locater (which event, set, and song are currently active) and several showX boolean flags (for UI visibility).

It defines functions (onNext, onPrevious, toggleMenu, toggleSidebar, toggleArtistModal, toggleVenueModal) that directly modify these states.

It also derives additional data (current, isFirst, isLast) based on the locater state and the event data.

#### State Persistence:

A useEffect hook ensures that whenever the locater state changes, the setNumber and songNumber are saved back to localStorage, allowing the user's progress to be remembered across sessions.

#### Data Flow to Child Components:

The App component passes relevant pieces of its state, derived data, and state-modifying functions down to its child components as props.

* PageContent: Receives the current song/set details, navigation functions (onNext, onPrevious), and sidebar/venue modal toggles.
* Menu: Receives its show state and a closeMenu function.
* Modal (wrapping SetList): Receives its show state. The SetList component inside receives the setLocater function (to change the current song/set), the current locater, and a closeModal function.
* ArtistModal (wrapping Artist): Receives its show state. The Artist component inside receives a closeModal function and the event.artist data.
* VenueModal (wrapping Venue): Receives its show state. The Venue component inside receives a closeModal function and the event.venue data.

#### User Interaction and Feedback Loop:

* User interactions within child components (e.g., clicking a song in SetList, clicking next/previous in PageContent, or closing a modal) trigger the prop functions passed down from App.
* These functions then update the state within the App component.
* The state changes in App cause a re-render, and the updated data flows back down to the child components, reflecting the new UI or content.
* This setup demonstrates a typical React unidirectional data flow, where state is managed centrally in the parent component (App), and data flows down to children via props, while interactions flow up from children to parent via callback functions.