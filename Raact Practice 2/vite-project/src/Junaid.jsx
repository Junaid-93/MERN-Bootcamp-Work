function Junaid(props) {
    
    const y = () => {
        var x = props.myName
        return `I am ${x}`

    } 
return (
    <>
    <p> Who am I ??</p>
    <p>{y()}</p>
    </>
)
}

export default Junaid
