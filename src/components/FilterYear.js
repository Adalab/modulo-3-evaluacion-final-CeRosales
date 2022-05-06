


function FilterYear(props) {
    const handleChange = (ev) => {
        props.handleFilterYear(ev.target.value);
    };
    const renderYears = () => {
        return props.years.map((year, index) => {
            return ( 
               
                   <option key={index} value={year}>{year}</option>  

        );
      });
    };
    return (
    <>
        <label>Year</label>
        <select
        onChange={handleChange}> 
        <option>All years</option>
        {renderYears()} </select>

     </>
     );
}

export default FilterYear;


