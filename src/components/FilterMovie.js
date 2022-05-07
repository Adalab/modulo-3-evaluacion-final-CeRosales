function FilterMovie(props) {
    const handleMovieSearch = (ev) => {
        props.handleFilterMovie(ev.target.value);
    };
return (
    <>
    <label> Movie  </label>
            <input
            type="text"
            onChange={handleMovieSearch}
            value={props.filterMovie}>
            </input>
    </>
    );
}


export default FilterMovie;