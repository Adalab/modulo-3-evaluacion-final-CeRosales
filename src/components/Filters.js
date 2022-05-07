import FilterMovie from './FilterMovie';
import FilterYear from './FilterYear';

function Filters(props) {
  const handleFormDefault = (props) => {
    props.PreventSubmitDefault();
  };
    return ( <section>
        <form onSubmit={handleFormDefault}>
          <FilterMovie
           handleFilterMovie={props.handleFilterMovie}
           filterMovie={props.filterMovie}/>

          <FilterYear 
          handleFilterYear={props.handleFilterYear} 
          years={props.years} />
          
        </form>
    </section>
  );
}

export default Filters;