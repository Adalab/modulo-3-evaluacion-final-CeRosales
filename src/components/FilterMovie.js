function FilterMovie(props) {
    const handleMovieSearch = (ev) => {
        ev.preventDefault();
        props.handleFilterMovie(ev.target.value);
    };
return (
    <>
    <label> Movie
        <input
        type="text"
        onChange={handleMovieSearch}
        value={props.filterMovie}>
        </input>
    </label>
    
    
    </>
    );
}


export default FilterMovie;