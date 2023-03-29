import * as React from 'react';
import {Poll} from '../types/poll/index';
import { useEffect, useState } from 'react';


function Poll() {
    const [options, setOptions] = useState<Poll[]>([]);

    useEffect(() => {
        const fetchData = async () => {
          const query = {query: `query Poll {
                Poll(input: "977d93a1-6d77-4523-bd46-755cda3ccdfc"){
                    id, parent, data, votes
                }
            }`};
          await fetch('http://localhost:4000/graphql', {
            mode:'cors',
            method: 'POST',
            headers: {
              'Content-type': 'application/json',
            },
            body: JSON.stringify(query),
          }).then((res) => {
            return res.json()
          }).then((json) => {
            setOptions(json.data.Poll);
            //console.log(json.data.getAllAccounts);
          })
        }
        fetchData().catch((err) => {
          console.log(err);
          //Router.push({pathname: '/error'});
          return;
        });
      },[]);
      return (
        <React.Fragment>
            hello world
            
        </React.Fragment>
      );
}

export default Poll;
