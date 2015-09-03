import User from '../user';

class Dashboard extends React.Component {
  render () {
    let message = "Log in";

    if (User.loggedIn) {
      message = 'Today ${User.username} is going to practice';
    }
    return (
      <section className="dashboard">
      <h2>The Woodshed</h2>
      <p>{message}</p>
      </section>
    )
  }
}
export default Dashboard;
