
import {ThreeDots} from  'react-loader-spinner'
//import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export const Loader = () => {
    return (
        <ThreeDots 
            height="80" 
            width="80" 
            radius="9"
            color="#DFE7FD" 
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
 
        />
    )
}