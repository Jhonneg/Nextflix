export default function Navbar({ username }) {
  return (
    <div>
      <p>{username}</p>
      <ul>
        <li>Home</li>
        <li>My List</li>
      </ul>
      <nav>
        <div>
          <button>
            <p>{username}</p>
          </button>

          <div>
            <a>Sign Out</a>
          </div>
        </div>
      </nav>
    </div>
  );
}
