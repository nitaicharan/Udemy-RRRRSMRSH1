import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addEntryRedux } from "../actions/entries.action";

const UserEntryDetails = (description = '', value = '', isExpense = true) => {
    const [v, setV] = useState(value);
    const [d, setD] = useState(description);
    const [i, setI] = useState(isExpense);

    const dispatch = useDispatch();

    useEffect(() => {
        setV(value);
        setD(description);
        setI(isExpense);
    }, [value, description, isExpense])

    const addEntry = (params) => {

        dispatch(addEntryRedux({
            id: uuidv4(),
            description: d,
            value: v,
            isExpense: i
        }));

        setD('');
        setV('');
        setI(true);
    }

    return {
        value: v,
        setValue: setV,
        description: d,
        setDescription: setD,
        isExpense: i,
        setIsExpense: setI,
        addEntry,
    };
}

export default UserEntryDetails;
