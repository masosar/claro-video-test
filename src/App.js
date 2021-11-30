import UserList from "./components/UserList";
import Header from "./components/Header";

function App() {
  return (
    <div className="clarovideo-container">
      <nav>
        <Header />
      </nav>
      <main className="clarovideo-grid" data-testid="mainelement">
        <UserList />
      </main>
      <footer className="clarovideo-footer">This is the footer</footer>
    </div>
  );
}

export default App;
