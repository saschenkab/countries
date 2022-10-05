import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, useMemo } from "react";
import {
  fetchCountries,
  selectAllCountries,
  getAllCountriesFiltered,
  getCountriesError,
  getCountriesStatus,
} from "../../redux/countries/slice";
import Cards from "../../components/cards";
import { Body, Countries } from "./styles";
import Header from "../../components/headerbar";
import Loader from "../../components/loader";
import Pagination from "../../components/pagination";
import Filters from "../../components/filters";
import {
  getActivitiesStatus,
  fetchActivities,
} from "../../redux/activities/slice";

const Home = () => {
  const dispatch = useDispatch();
  const countries = useSelector(selectAllCountries);
  const countriesFiltered = useSelector(getAllCountriesFiltered);
  const countriesStatus = useSelector(getCountriesStatus);
  const activitiesStatus = useSelector(getActivitiesStatus);
  const error = useSelector(getCountriesError);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 9;

  const paginate = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    if (countriesFiltered === undefined || countriesFiltered.length === 0) {
      return countries ? countries.slice(firstPageIndex, lastPageIndex) : null;
    } else {
      return countriesFiltered
        ? countriesFiltered.slice(firstPageIndex, lastPageIndex)
        : null;
    }
  }, [currentPage, countriesFiltered, countries]);

  useEffect(() => {
    if (countriesStatus === "Idle" && activitiesStatus === "Idle") {
      dispatch(fetchCountries());
      dispatch(fetchActivities());
    }
  }, [countriesStatus, activitiesStatus, dispatch]);

  useEffect(() => {
    setCurrentPage(1);
  }, [countriesFiltered]);

  let content;

  if (countriesStatus === "Loading") {
    content = <Loader />;
  } else if (countriesStatus === "Succeeded") {
    content = (
      <>
        <Cards countries={paginate} />
        {countries === undefined ? null : (
          <Pagination
            currentPage={currentPage}
            totalCount={
              countriesFiltered === undefined || countriesFiltered === 0
                ? countries.length
                : countriesFiltered.length
            }
            pageSize={pageSize}
            onPageChange={(page) => setCurrentPage(page)}
          />
        )}
      </>
    );
  } else if (countriesStatus === "Failed") {
    content = <p>{error}</p>;
  }

  return (
    <div>
      <Header />
      <Body>
        <Countries>{content}</Countries>
        <Filters />
      </Body>
    </div>
  );
};

export default Home;
