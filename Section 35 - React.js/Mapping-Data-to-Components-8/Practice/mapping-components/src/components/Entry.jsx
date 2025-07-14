import React from 'react'

// destructing emoji,name and meaning instead of just passing props and using props.propertyname
function Entry({emoji,name,meaning}) {
    return (
        <div className="term">
          <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">
              {emoji}
            </span>
            <span>{name}</span>
          </dt>
          <dd>
            {meaning}
          </dd>
        </div>
    );
}

export default Entry;