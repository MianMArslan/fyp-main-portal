import Cookies from 'universal-cookie'
const cookies = new Cookies

export const SetCookie = () => {
    cookies.set('name' , 'Manahil Sattar' , {nameSite: 'strict', path : '/', expries: new Date (new Date().getTime(),5 + 1000) })
}

export const RemoveCookie = () => {
    cookies.remove('name');
console.log(cookies.getAll())
}

const CreateCookie = () =>{
    return(
        <>
        {/* This will add to check either it is working or not */}
        <button onClick={SetCookie}>create cookie</button>
        <button onClick={RemoveCookie}>Remove Cookie</button>
        </>
    )
}
export default CreateCookie
