import * as React from 'react';
import {Poll} from '../types/poll/index';
import { useEffect, useState } from 'react';

import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';


function Poll() {
    function select(poll: Poll){
        setVote(poll);
        console.log(poll.id);
        //alert(ID);
    }
    let votedFor = {} as any;
    function confirm(){
        console.log(vote);
        const sendData = async () => {
            const query = {query: `mutation addPoll {
                  addPoll(input: "`+vote?.id+`"){
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
                console.log(json);
                votedFor = json;
                setVoted(true);
              //setOptions(json.data.Poll);
              //console.log(json.data.getAllAccounts);
            })
          }
          sendData().catch((err) => {
            console.log(err);
            //Router.push({pathname: '/error'});
            return;
          });

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
              console.log(votedFor);
              console.log(json.data.Poll)
              json.data.Poll.forEach(function (arrayItem) {
                  var x = arrayItem.id;
                  console.log(x);
                  if(x == votedFor.id){
                    arrayItem.votes = votedFor.votes;
                  }
              });
              console.log(json.data.Poll);
              setOptions(json.data.Poll);
              //console.log(json.data.getAllAccounts);
            })
          }
          fetchData().catch((err) => {
            console.log(err);
            //Router.push({pathname: '/error'});
            return;
          });
    }
    const [options, setOptions] = useState<Poll[]>([]);
    const [vote, setVote] = useState<Poll>();
    const [voted, setVoted] = useState(false);

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
            <h1>What is your favorite Sci-Fi Media?</h1>
            {options.map(option => {
            //console.log(user);
            return (
              <tr key={option.id}>
                <td>{option.data}</td>
                <td>
                  

                  {(() => {
                      if (voted !== true) {
                          return(
                            <IconButton id = {"edit"+option.id} aria-label={"select "+option.id} size="large" onClick={() => { select(option) }}>
                              <EditIcon />
                            </IconButton>
                          )
                      }else{
                        return(
                          <IconButton id = {option.id} aria-label={option.id} size="large">
                              
                          </IconButton>
                        )
                      }
                  })()}
                </td>
                <td>
                    {(() => {
                        if (typeof window !== 'undefined' && (voted !== false)) {
                            return(
                                option.votes
                            )
                        }
                    })()}
                </td>

              </tr>
            );
          })}

        {(() => {
            if (typeof window !== 'undefined' && (vote !== undefined)) {
            return (
                <div>

                  {(() => {
                      if (voted !== true) {
                          return(
                            <Button variant="contained" id="select" onClick={() => { confirm() }}>Vote For {vote.data}</Button>
                          )
                      }
                  })()}

                </div>
            )
            } else {
            return (
                <div>
                  <h1>Please pick an option to cast a vote.</h1>
                </div>
            )
            }
        })()}

            
        </React.Fragment>
      );
}

export default Poll;
