import Header from './Header';
/* eslint-disable*/
const Home = () => {
  const home = {
    backgroundColor: '#f2f7f7',
    height: '90vh',
    padding: '10%',
  };

  const text1 = {
    textAlign: 'center',
    fontSize: '1rem',
    fontWeight: 'bold',
  };
  const text2 = {
    textAlign: 'center',
    marginTop: '10px',
    fontSize: '1rem',
  };
  const info = {
    fontSize: '1.5rem',
    color: '#e49504',
    marginBottom: '2rem',
  };
  return (
    <div className="conatiner">
      <Header />
      <div style={home}>
        <h1 style={info}>WellCome To Math magician!!!</h1>
        <p style={text1}>
          A mathemagician is a mathematician who is also a magician. The term
          "mathemagic" is believed to have been introduced by Royal Vale Heath
          with his 1933 book "Mathemagic".
        </p>
        <p style={text2}>
          Mathemagician is a neologism, specifically a portmanteau, that
          combines mathematician and magician. A great number of self-working
          mentalism tricks rely on mathematical principles. Max Maven often
          utilizes this type of magic in his performance.
        </p>
      </div>
    </div>
  );
};

export default Home;
