const NavStyle = {
    display : 'flex',
    backgroundColor : '#353a40',
    height : '60px'
}
const NavText = {
    display:'flex',
    flexFlow:'column nowrap',
    justifyContent:'center',
    padding:'2px',
    fontWeight:'bold',
    color:'white',
    fontSize:'1.5rem'
}

function Nav (){
    return(
        <div style={NavStyle}>
            <div className='navLogo' style={{display:'flex', margin:'0 0 0 10%'}}>
                <img style={{display:'block'}} src='https://pixabay.com/get/g06560bc31e537d41d08eca7f7625023064787201b45230098711513ef5afc47ad0a039b55c4ffd19293d5bf0e897223d007d11b9011a7a7c03118acd03c597ce05e9d146346bcca441c87919f5649543_640.png' />
            </div>
            <div className='navText' style={NavText}>
                <p>Pokédex</p>
            </div>
        </div>
    )
}
export default Nav;