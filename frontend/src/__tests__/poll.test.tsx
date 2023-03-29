import 'whatwg-fetch'
import {render, waitFor, screen, fireEvent} from '@testing-library/react';
import {graphql} from 'msw';
import {setupServer} from 'msw/node';
import React from 'react';
import userEvent from '@testing-library/user-event';

//import { getServerSideProps } from '../../pages/index';


import Poll from '../components/poll';
//import {HomeContext} from '../../../components/home/homeContext';


const handlers = [
  graphql.query('Poll', async (request, response, context) => {
    return response(context.data({
      "Poll": [
        {
          "id": "2fe46659-62d5-4409-a459-a338167190be",
          "parent": "977d93a1-6d77-4523-bd46-755cda3ccdfc",
          "data": "Battlestar Galactica",
          "votes": "0"
        },
        {
          "id": "508ee667-c7dd-43d4-9e23-77398bdefa3b",
          "parent": "977d93a1-6d77-4523-bd46-755cda3ccdfc",
          "data": "Interstellar",
          "votes": "0"
        },
        {
          "id": "d8c25221-1d77-4d9e-8af1-8689b13d63e9",
          "parent": "977d93a1-6d77-4523-bd46-755cda3ccdfc",
          "data": "The Hitchhikers Guide to the Galaxy",
          "votes": "0"
        },
        {
          "id": "9742e392-8e06-406d-83d7-0e439acb1729",
          "parent": "977d93a1-6d77-4523-bd46-755cda3ccdfc",
          "data": "Star Trek",
          "votes": "1"
        },
        {
          "id": "08d10e56-6977-438a-a93d-01044e751271",
          "parent": "977d93a1-6d77-4523-bd46-755cda3ccdfc",
          "data": "Star Wars",
          "votes": "3"
        }
      ],
    }));
  }),
];

const server = setupServer(...handlers);
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const renderView = () => render(<Poll />)
test ("login renders", async () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  //const stubRequest: any = {};
  renderView()
})

/**
 *
 */
test('Header successfully renders the categories given by server', async () => {
  const options = [
    'Battlestar Galactica',
    'Interstellar',
    'The Hitchhikers Guide to the Galaxy',
    'Star Trek',
    'Star Wars'
  ];

  //render(<Header title = 'Test Header' />);
  render(<Poll/>);

  await waitFor(() => {
    options.forEach((option) => {
      expect(screen.getByText(option)).toBeDefined();
      return;
    });
  });
  
  return;
});

test('Select Battlestar Galactica', async () => {
    
  render(<Poll />);

  await waitFor( () => {
    const selectBattleStar = screen.getByLabelText('select 2fe46659-62d5-4409-a459-a338167190be');
    expect(selectBattleStar).toBeDefined();
    fireEvent.click(selectBattleStar);
  })

  return;
});

test('Logged in. Able to edit a category.', async () => {
  render(<Poll />);

  await waitFor( () => {
    const selectBattleStar = screen.getByLabelText('select 2fe46659-62d5-4409-a459-a338167190be');
    expect(selectBattleStar).toBeDefined();
    fireEvent.click(selectBattleStar);
  })

  fireEvent.click(screen.getByText('Vote for'));

  return;
});
