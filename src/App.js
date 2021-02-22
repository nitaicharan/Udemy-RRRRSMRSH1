import { Container, Grid, Icon, Segment, Statistic } from 'semantic-ui-react';
import './App.css';
import DisplayBalance from './components/DisplayBalance';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';

function App() {
  return (
    <Container>
      <MainHeader title='Budget' />

      <DisplayBalance size='small' title='Your Balance: ' value='2,550.53' />

      <Segment textAlign="center">
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <DisplayBalance color='green' title='Income: ' value='1254,54' />
            </Grid.Column>

            <Grid.Column>
              <DisplayBalance color='red' title='Expences: ' value='623,50' />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <MainHeader title='History' type='h3' />

      <Segment color='red'>
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <Grid.Column width={10} textAlign='left'>Something</Grid.Column>
            <Grid.Column width={3} textAlign='right'>$10,00</Grid.Column>
            <Grid.Column width={3}>
              <Icon name='edit' />
              <Icon name='trash' />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment color='green'>
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <Grid.Column width={10} textAlign='left'>Something else</Grid.Column>
            <Grid.Column width={3} textAlign='right'>$100,00</Grid.Column>
            <Grid.Column width={3}>
              <Icon name='edit' />
              <Icon name='trash' />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment color='red'>
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <Grid.Column width={10} textAlign='left'>Something</Grid.Column>
            <Grid.Column width={3} textAlign='right'>$20,00</Grid.Column>
            <Grid.Column width={3}>
              <Icon name='edit' />
              <Icon name='trash' />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <MainHeader title='Add new transaction' type='h3' />

      <NewEntryForm />

    </Container>
  );
}

export default App;
