const MainStyle = {
    display:'flex',
    flexFlow :'row nowrap',
    flexDirection:'flex-start',
    alignItems:'center',
    height: '150px',
    width:'100%',
}
const P ={
    fontWeight:'bold',
    fontSize:'2rem',
    padding:'10px',
}

function WelcomeSection (){
    return(
        <div style={MainStyle}>
            <p style={P}>
                Pokédex
            </p>
        </div>
    )
}

export default WelcomeSection;