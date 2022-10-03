import React from "react";

const EmptySearch = (props) => {

    return (
        <div className="banner text-white empty-search">
            <div className="text-holder">
                <span id="empty">No items found for "<span className="text-bold">{props.searchTerm}</span>"</span>  
            </div>
            
        </div>
    );
};

export default EmptySearch;
