import { useDispatch, useSelector } from "react-redux";
import { getActivities } from "../../redux/activities/slice";
import {
  selectAllCountries,
  filterByActivityOrContinent,
  selectedActivity,
  selectedContinent,
} from "../../redux/countries/slice";
import { Container, FiltersStyles, Item, Span } from "./styles";

const Filters = () => {
  const countries = useSelector(selectAllCountries);
  const activities = useSelector(getActivities);
  const activitySelected = useSelector(selectedActivity);
  const continentSelected = useSelector(selectedContinent);
  const dispatch = useDispatch();

  const handleFilter = ({ continentFilter, activityFilter }) => {
    dispatch(filterByActivityOrContinent({ activityFilter, continentFilter }));
  };

  const filteredActivities = activities
    ? activities
        .map((activity) => activity.name)
        .reduce((curr, item) => {
          if (!curr.includes(item)) {
            curr.push(item);
          }
          return curr;
        }, [])
    : null;

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
      {continents?.length > 0 && (
        <FiltersStyles>
          <Item
            active={continentSelected === "All Continents"}
            onClick={() =>
              handleFilter({
                activityFilter: activitySelected,
                continentFilter: "All Continents",
              })
            }
          >
            <Span>All Continents</Span>
          </Item>

          {continents
            ? continents.map((continent) => (
                <Item
                  key={continent}
                  active={continentSelected === continent}
                  onClick={() =>
                    handleFilter({
                      continentFilter: continent,
                      activityFilter: activitySelected,
                    })
                  }
                >
                  <Span>{continent}</Span>
                </Item>
              ))
            : null}
        </FiltersStyles>
      )}
      {activities?.length > 0 && (
        <FiltersStyles>
          <Item
            active={activitySelected === "All Activities"}
            onClick={() =>
              handleFilter({
                continentFilter: continentSelected,
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
                  active={activitySelected === activity}
                  onClick={() =>
                    handleFilter({
                      activityFilter: activity,
                      continentFilter: continentSelected,
                    })
                  }
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
