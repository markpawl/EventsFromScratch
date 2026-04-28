# EventsFromScratch - React Native

A react native app designed to manage and display localized event, artist, and setlist data. This project emphasizes a modular data-driven architecture that allows for easy content contribution through standardized templates.

## 🛠 Engineering & DevEx Highlights
* **Modular Data Schema**: Implemented a domain-driven folder structure for Songs, Events, and Artists, utilizing JS-based templates to ensure data consistency.
* **Component-Based UI**: Utilizes a highly decoupled component architecture (`Artist`, `Venue`, `SetList`) for maximum reusability.
* **i18n Ready**: Structured to support multi-language content (German/English) through a centralized data layer.

## 📐 Contributor Workflow
This project was designed with "Contribution DX" in mind. New content can be added by following the pre-defined templates in the `src/songs/` and `src/artists/` directories, allowing non-core developers to update app content without deep-diving into the UI logic.
