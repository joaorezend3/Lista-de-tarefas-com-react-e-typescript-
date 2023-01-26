import * as C from "./styles";
import { item } from '../../types/item'
type props = {
    item: item
}
export const ListItem = ({item}: props) =>{
    return(
        <C.container>{item.id +""+ item.name }</C.container>
    );
}