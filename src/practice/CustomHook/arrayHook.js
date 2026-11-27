
import { useState } from "react";

function arrayHook() {
    const [names, setName] = useState([]);

    function addname(name) {
        setName(prev => [...prev, name]);
    }

    function clearAll() {
        setName([]);
    }

    function removeName(index) {
        setName(prev => prev.filter((item, i) => i !== index));
    }

    return {
        names,
        addname,
        clearAll,
        removeName
    };
}

export default arrayHook;
