import ListHeader from "./ListHeader";
import MobileOS from "./MobileOS";
import Manufacturer from "./Manufacturer";
function List({title}){
    return(
        <>
        <ListHeader title="Mobile Operating System"/>
        <MobileOS/>
        <ListHeader title="Mobile Manufacturers"/>
        <Manufacturer/>
        </>
    )
}
export default List;