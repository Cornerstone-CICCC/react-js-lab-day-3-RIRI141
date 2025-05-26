import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col text-center my-auto items-center justify-center">
      <h1 className="text-4xl font-bold mb-8">Welcome</h1>
      <p className="text-lg mb-8">
        You can peek my posts...
      </p>
      <Link
        to="/blog"
        className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
      >
        Go to Blog
      </Link>
    </div>
  );
};

export default Home;