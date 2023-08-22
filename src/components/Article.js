function Article({title, date = "January 1, 1970", preview, minutes}) {
    
    function displayEmojis() {
        let emojis = '';

        if(minutes < 30) {
            // return "☕️";
            for(let count = 0; count < minutes; count+=5) {
                emojis += '☕️'
            }
        } else {
            // return "🍱";
            for(let count = 0; count < minutes; count+=10) {
                emojis += '🍱'
            }
        }

        return emojis;
    }
    

    return (
        <article>
            <h3>{title}</h3>
            <small>{date} • {displayEmojis()} {minutes} min read</small>
            <p>{preview}</p>
        </article>
    )
}

export default Article;