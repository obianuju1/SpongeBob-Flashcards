function FrontCard({image,question}){
    return(
        <div className="FrontCard" >
            <img src={image} width={300} height={250} style={{border:"2px solid black"}}></img>
            <h4>{question}</h4>
        </div>
    )

}
export default FrontCard;