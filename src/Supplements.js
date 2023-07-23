import { useState } from 'react';

import { Cards } from './cards';
import Card from './Card.js';

const Supplements = () => {

  let count = 0;

  const [lessThanFive, setLessThanFive] = useState(false);
  const handleChangeLessThanFive = (event) => {
    setLessThanFive(event.target.checked);
  }

  const [lessThanTen, setLessThanTen] = useState(false);
  const handleChangeLessThanTen = (event) => {
    setLessThanTen(event.target.checked);
  }

  const [lessThanTwentyFive, setLessThanTwentyFive] = useState(false);
  const handleChangeLessThanTwentyFive = (event) => {
    setLessThanTwentyFive(event.target.checked);
  }

  const [lessThanFifty, setLessThanFifty] = useState(false);
  const handleChangeLessThanFifty = (event) => {
    setLessThanFifty(event.target.checked);
  }

  const [proteinPowder, setProteinPowder] = useState(false);
  const handleChangeProteinPowder = (event) => {
    setProteinPowder(event.target.checked);
  }

  const [creatine, setCreatine] = useState(false);
  const handleChangeCreatine = (event) => {
    setCreatine(event.target.checked);
  }

  const [preWorkout, setPreWorkout] = useState(false);
  const handleChangePreWorkout = (event) => {
    setPreWorkout(event.target.checked);
  }

  const [other, setOther] = useState(false);
  const handleChangeOther = (event) => {
    setOther(event.target.checked);
  }

  return (
    <div className="supplements">
      <br />
      <h1>SPARTACUS FITNESS</h1>
      <h1>SUPPLEMENT</h1>
      <h1>COLLECTION</h1>
      <br />
      
      <div className="flex-container">
        <div className="flex-child">
          <p className="facetedSearchTitle">PRICE</p><br />
          <label className="facetedSearch">
            <input type="checkbox" onChange={handleChangeLessThanFive}/>
            <span class="checkmark"></span>
            Under $5
          </label><br />
          <label className="facetedSearch">
            <input type="checkbox" onChange={handleChangeLessThanTen}/>
            <span class="checkmark"></span>
            Under $10
          </label><br />
          <label className="facetedSearch">
            <input type="checkbox" onChange={handleChangeLessThanTwentyFive}/>
            <span class="checkmark"></span>
            Under $25
          </label><br />
          <label className="facetedSearch">
            <input type="checkbox" onChange={handleChangeLessThanFifty}/>
            <span class="checkmark"></span>
            Under $50
          </label><br />
        </div>
        <div className="flex-child">
          <p className="facetedSearchTitle">CATEGORY</p><br />
          <label className="facetedSearch">
            <input type="checkbox" onChange={handleChangeProteinPowder}/>
            <span class="checkmark"></span>
            Protein Powder
          </label><br />
          <label className="facetedSearch">
            <input type="checkbox" onChange={handleChangeCreatine}/>
            <span class="checkmark"></span>
            Creatine
          </label><br />
          <label className="facetedSearch">
            <input type="checkbox" onChange={handleChangePreWorkout}/>
            <span class="checkmark"></span>
            Pre-Workout
          </label><br />
          <label className="facetedSearch">
            <input type="checkbox" onChange={handleChangeOther}/>
            <span class="checkmark"></span>
            Other
          </label><br />
        </div>
      </div>
      <br />

      <div className="grid-container">
        {Cards.filter((card) => 
          {
            if (!proteinPowder && !creatine && !preWorkout && !other 
                   && !lessThanFive && !lessThanTen && !lessThanTwentyFive && !lessThanFifty)
              {return true}
            else if (card.category == "Creatine" && creatine) {
              if (!lessThanFive && !lessThanTen && !lessThanTwentyFive && !lessThanFifty)
                {return true}
              else if (card.price <= 5 && lessThanFive)
                {return true}
              else if (card.price <= 10 && lessThanTen)
                {return true}
              else if (card.price <= 25 && lessThanTwentyFive)
                {return true}
              else if (card.price <= 50 && lessThanFifty)
                {return true}
            }
            else if (card.category == "Protein Powder" && proteinPowder) {
              if (!lessThanFive && !lessThanTen && !lessThanTwentyFive && !lessThanFifty)
                {return true}
              else if (card.price <= 5 && lessThanFive)
                {return true}
              else if (card.price <= 10 && lessThanTen)
                {return true}
              else if (card.price <= 25 && lessThanTwentyFive)
                {return true}
              else if (card.price <= 50 && lessThanFifty)
                {return true}
            }
            else if (card.category == "Pre-Workout" && preWorkout) {
              if (!lessThanFive && !lessThanTen && !lessThanTwentyFive && !lessThanFifty)
                {return true}
              else if (card.price <= 5 && lessThanFive)
                {return true}
              else if (card.price <= 10 && lessThanTen)
                {return true}
              else if (card.price <= 25 && lessThanTwentyFive)
                {return true}
              else if (card.price <= 50 && lessThanFifty)
                {return true}
            }
            else if (card.category == "Other" && other) {
              if (!lessThanFive && !lessThanTen && !lessThanTwentyFive && !lessThanFifty)
                {return true}
              else if (card.price <= 5 && lessThanFive)
                {return true}
              else if (card.price <= 10 && lessThanTen)
                {return true}
              else if (card.price <= 25 && lessThanTwentyFive)
                {return true}
              else if (card.price <= 50 && lessThanFifty)
                {return true}
            }
            else if (card.price <= 5 && lessThanFive) {
              if (!proteinPowder && !creatine && !preWorkout && !other)
                {return true}
              else if (card.category == "Protein Powder" && proteinPowder)
                {return true}
              else if (card.category == "Creatine" && creatine)
                {return true}
              else if (card.category == "Pre-Workout" && preWorkout)
                {return true}
              else if (card.category == "Other" && other)
                {return true}
            }
            else if (card.price <= 10 && lessThanTen) {
              if (!proteinPowder && !creatine && !preWorkout && !other)
                {return true}
              else if (card.category == "Protein Powder" && proteinPowder)
                {return true}
              else if (card.category == "Creatine" && creatine)
                {return true}
              else if (card.category == "Pre-Workout" && preWorkout)
                {return true}
              else if (card.category == "Other" && other)
                {return true}
            }
            else if (card.price <= 25 && lessThanTwentyFive) {
              if (!proteinPowder && !creatine && !preWorkout && !other)
                {return true}
              else if (card.category == "Protein Powder" && proteinPowder)
                {return true}
              else if (card.category == "Creatine" && creatine)
                {return true}
              else if (card.category == "Pre-Workout" && preWorkout)
                {return true}
              else if (card.category == "Other" && other)
                {return true}
            }
            else if (card.price <= 50 && lessThanFifty) {
              if (!proteinPowder && !creatine && !preWorkout && !other)
                {return true}
              else if (card.category == "Protein Powder" && proteinPowder)
                {return true}
              else if (card.category == "Creatine" && creatine)
                {return true}
              else if (card.category == "Pre-Workout" && preWorkout)
                {return true}
              else if (card.category == "Other" && other)
                {return true}
            }
          }
        ).map((card, count) => (
          <div key={card.id} className={"item" + count++}>
            <Card
              name={card.product_name}
              category={card.category}
              description={card.description}
              price={card.priceString}
              image={card.image}
            />
          </div>
        ))}
      </div>

    </div>
  );

}

export default Supplements;