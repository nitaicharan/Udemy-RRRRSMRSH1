import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addEntryRedux, updateEntryRedux } from "../actions/entries.action";
import { closeEditModal } from "../actions/modals.action";

const UseEntryDetails = (description = '', value = '', isExpense = true) => {
    const [v, setV] = useState(value);
    const [d, setD] = useState(description);
    const [i, setI] = useState(isExpense);

    const dispatch = useDispatch();

    useEffect(() => {
        setV(value);
        setD(description);
        setI(isExpense);
    }, [value, description, isExpense])

    const updateEntry = (id) => {
        dispatch(updateEntryRedux(id, {
            value: v,
            description: d,
            isExpense: i,
        }));

        dispatch(closeEditModal());
        resetValues();
    }

    const addEntry = (params) => {

        dispatch(addEntryRedux({
            id: uuidv4(),
            description: d,
            value: v,
            isExpense: i
        }));

        resetValues();
    }

    const resetValues = () => {
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
        updateEntry,
    };
}

export default UseEntryDetails;
