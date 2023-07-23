const FacetedSearch = () => {

  return (
    <div>
      <p>PRICES</p>
      <div>
        <label>
          <input type="checkbox" />
          Under $5
        </label><br />
        <label>
          <input type="checkbox" />
          Under $10
        </label><br />
        <label>
          <input type="checkbox" />
          Under $25
        </label><br />
        <label>
          <input type="checkbox" />
          Under $50
        </label><br />
      </div>
      <br />
      <p>CATEGORY</p>
      <div>
        <label>
          <input type="checkbox" />
          Protein Powder
        </label><br />
        <label>
          <input type="checkbox" />
          Creatine
        </label><br />
        <label>
          <input type="checkbox" />
          Pre-workout
        </label><br />
        <label>
          <input type="checkbox" />
          Other
        </label><br />
      </div>
    </div>
  );

}

export default FacetedSearch;