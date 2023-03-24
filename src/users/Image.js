function Image(obj){
    return (
        <>
            <img style={img} src={obj.addresslink} alt="Book Desc"></img>
        </>
    )
}


const img= {
    height:'auto',
    width:'auto'
}

export default Image;