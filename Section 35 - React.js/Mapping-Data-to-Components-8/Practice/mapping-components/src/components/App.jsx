import React from "react";
import Entry from "./Entry.jsx";
// importing emoji array
import emojipedia from "../modules/emojipedia.js";

// function that extracts the data from emoji array using emojiInfo inside Entry component 
// and updating Entry component attributes/properties to the array data 
function createEntry(emojiInfo){
  return (
    <Entry
    // left side values are properties of Entry component defined in Entery.jsx
    // right side values are the values extracted from emojipedia.js array using emojiInfo so we can map
    key={emojiInfo.id}
    emoji={emojiInfo.emoji}
    name={emojiInfo.name}
    meaning={emojiInfo.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {/* mapping array to callback */}
        {emojipedia.map(createEntry)};
      </dl>
    </div>
  );
}

export default App;


// Flow of mapping data to component

/*
1. program starts from main.jsx it calls app.jsx component
2. In app.jsx component, when it reaches emojipedia.map(EmojiPedia) it calls the EmojiPedia callback function
3. In EmojiPedia function with parameter emojiInfo, when it is inside return it calls Entry component which is inside
Entry.jsx
4. In Entry.jsx, it destructs the properties name,emoji,meaning and in return it renders/return a div with some 
js variables
5. then it came back to EmojiPedia function, key is react mandatory attribute for mapping, emoji,name,meaning are
those destruct properties from Entry.jsx and in those properties/attributes we mapp the array data using
emojiInfo.propertyName
6. after end of EmojiPedia function, it again cameback to {emojipedia.map(EmojiPedia)}; and map all the data from
EmojiPedia function
*/