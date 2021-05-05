import logo from "../assests/images/logo.png";

const styles = {
  image: {
    width: "400px"
  },
  title: {
    fontSize: "2em"
  }
};
const Home = () => {
  return (
    <div className="container">
      <img src={logo} alt="Logo" style={styles.image} />
      <div style={styles.title}>Welcome to my First React App</div>
    </div>
  );
};

export default Home;
