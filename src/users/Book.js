import Image from "./Image"
import BookName from "./BookName";
import Auther from "./Auther";
function Book(props){
    return (
        <div className="Book">
            <BookName {...props.b1}/>
            <Image {...props.b1}/>
            <Auther {...props.b1}/>
        </div>
    )
}
export default Book;