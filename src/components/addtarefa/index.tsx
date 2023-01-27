import { keyboardKey } from "@testing-library/user-event";
import { useState, KeyboardEvent } from "react";
import * as C from "./styles";
type Props = {
    onEnter: (taskName: string) => void
}
export const Addtarefa = ({ onEnter }: Props) => {
    const [inputText, setInputex] = useState('');
    const hendleKeyUp = (e: KeyboardEvent) => {
        if (e.key === 'Enter' && inputText !== ' ') {
            onEnter(inputText);
            setInputex('');
        }
    }
    return (
        <C.container>
        
                <input type="text"
                    placeholder="Adicionar Tarefa"
                    value={inputText}
                    onChange={e => setInputex(e.target.value)}
                    onKeyUp={hendleKeyUp} />

        </C.container>
    );
}