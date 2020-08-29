import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    const [isExpanded, setIsExpanded] = useState(false);

    function handleOnClick() {
        setIsExpanded(true);
    }


    function handleInput(event) {
        const { name, value } = event.target;

        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    }

    function handleAddClick(event) {
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        });
        setIsExpanded(false);
        event.preventDefault();
    }

    return (
        <div>
            <form className="create-note" onSubmit={handleAddClick}>
                {isExpanded && <input
                    onChange={handleInput}
                    name="title"
                    value={note.title}
                    placeholder="Title"
                />}
                <textarea
                    onClick={handleOnClick}
                    onChange={handleInput}
                    name="content"
                    value={note.content}
                    placeholder="Take a note..."
                    rows={isExpanded ? 3 : 1}
                />
                <Zoom in={isExpanded ? true : false}>
                    <Fab type="submit">
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;
