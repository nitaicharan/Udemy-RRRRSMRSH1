import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addEntryRedux } from "../actions/entries.action";

const NewEntryFrom = () => {
    const [value, setValue] = useState('');
    const [description, setDescription] = useState('');
    const [isExpense, setIsExpense] = useState(false);
    const dispatch = useDispatch();

    const addEntry = (params) => {

        dispatch(addEntryRedux({
            id: uuidv4(),
            description,
            value,
            isExpense
        }));

        setDescription('');
        setValue('');
        setIsExpense(true);
    }

    return {
        value,
        setValue,
        description,
        setDescription,
        isExpense,
        setIsExpense,
        addEntry,
    };
}

export default NewEntryFrom;
