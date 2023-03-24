function UserForm(){
    const inputChnage = ()=>{
        return (
            console.log("event Triggerd")
        )
    }
    const btnClick = ()=>{
        return (
           console.log("Clicked")
        )
    }
    return (
        <>
            <form>
                <h2>My Form</h2>
                <input type="text" onChange={inputChnage}/>
                <button onClick={btnClick}>Click Me</button>
            </form>
        </>
    )
}

export default UserForm;