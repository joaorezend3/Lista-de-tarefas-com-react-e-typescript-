import * as C from "./styles";
import { item } from '../../types/item'
import { useState } from "react";
type props = {
    item: item
}
export const ListItem = ({ item }: props) => {
    const [isChecked, setCheckd] = useState(item.done);
    return (
        <C.container done={isChecked}>
            <input type="checkbox" checked={isChecked} onChange={e => setCheckd(e.target.checked)} />
            <label>{item.id} - {item.name}</label>
        </C.container>
    );
}