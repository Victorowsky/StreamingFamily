
const MyPartiesSchema = ({parties, streamingPlatform}) => {
    return ( 
        <>  {parties.length > 0 && 
            <div className="myPartiesColumn">
            <h2>{streamingPlatform}</h2>
            {parties}
        </div>
            }
        </>
     );
}
 
export default MyPartiesSchema;