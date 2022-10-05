import { useDispatch, useSelector } from "react-redux";
import { getActivities } from "../../redux/activities/slice";
import {
  getAllCountriesFiltered,
  selectAllCountries,
  filterByActivityOrContinent,
  selectedActivity,
} from "../../redux/countries/slice";

import { Container, FiltersStyles, Item, Span } from "./styles";

const Filters = () => {
  const countries = useSelector(selectAllCountries);
  const activities = useSelector(getActivities);
  const activitySelected = useSelector(selectedActivity);
  const dispatch = useDispatch();

  const handleFilter = ({ continentFilter, activityFilter }) => {
    dispatch(filterByActivityOrContinent({ activityFilter }));
  };

  const filteredActivities = activities
    .map((activity) => activity.name)
    .reduce((curr, item) => {
      if (!curr.includes(item)) {
        curr.push(item);
      }
      return curr;
    }, []);

  const continents = countries
    ? countries
        .map((continent) => continent.continent)
        .reduce((curr, item) => {
          if (!curr.includes(item)) {
            curr.push(item);
          }
          return curr;
        }, [])
    : null;

  return (
    <Container>
      <FiltersStyles>
        {continents
          ? continents.map((continent) => (
              <Item key={continent}>
                <Span>{continent}</Span>
              </Item>
            ))
          : null}
      </FiltersStyles>
      {activities?.length > 0 && (
        <FiltersStyles>
          <Item
            active={activitySelected === "All Activities"}
            onClick={() =>
              handleFilter({
                // continentFilter: selectedContinent,
                activityFilter: "All Activities",
              })
            }
          >
            <Span>All Activities</Span>
          </Item>

          {filteredActivities
            ? filteredActivities.map((activity) => (
                <Item
                  key={activity}
                  active={activitySelected === activity[0]}
                  onClick={() => handleFilter({ activityFilter: activity })}
                >
                  <Span>{activity}</Span>
                </Item>
              ))
            : null}
        </FiltersStyles>
      )}
    </Container>
  );
};

export default Filters;
