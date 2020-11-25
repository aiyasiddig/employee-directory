import React, {useState, createContext} from 'react';
import * as ReactBootstrap from 'react-bootstrap';

export const searchContext = createContext();

export const SearchProvider = (props) => {
    const [search, setSearch] = useState([""])
    return(
      <ReactBootstrap.Table striped bordered hover variant = "dark"> <thead><th>
       <searchContext.Provider className = "searchBar" value={[search, setSearch]} >
         {props.children}
       </searchContext.Provider> </th></thead>
       </ReactBootstrap.Table>
    );
}

export default searchContext;