import ContinentsList from "../Components/ContinentsList";
import CountryDetailsBox from "../Components/CountryDetailsBox";
import axios from 'axios';
import { useEffect, useState } from "react";

const Countries = () => {
    const [continents, setContinents] = useState([]);

    const getCountries = async () => {
        const options: object = {
            method: 'POST',
            url: 'https://countries.trevorblades.com/',
            headers: {
                'content-type': 'application/json'
            },
            data: {
                query: `{
                    continents {
                      name,
                      countries {
                        name
                      }
                    }
                  }`
            }
        };
    
        axios
            .request(options)
            .then((response) => {
                setContinents(response.data.data.continents); // Response
            })
            .catch((error) => {
                console.error(error);
            });
    };
    
    useEffect(() => {
        getCountries();
      }, []);

    console.log(continents);

    return (
        <section >
            <h1 className="font-sans text-4xl font-bold px-4 pt-4">Countries by Continent</h1>
            <hr className="my-8 h-px bg-gray-200 border-0 m-8" />
            <div className="flex flex-row px-8">
                <ContinentsList />
                <CountryDetailsBox  />
            </div>
        </section>
    );
}
  
  export default Countries;
  