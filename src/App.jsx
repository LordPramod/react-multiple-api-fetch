import "./App.css";
import Home from "./components/Home";

function App() {
  // const toast = useToast();

  // const countAlert = () => {
  //   toast({
  //     title: '10 Counted',
  //     description: "Your Count Reach to 10",
  //     isClosable: true,
  //     duration: 4000,
  //     position: 'top-right',
  //     colorScheme: 'purple',
  //   })
  // }
  // const [count, setCount] = useState(0);
  return (
    <>
      <Home />
      {/* <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
        <h1 style={{ marginBottom: '10px' }}> Count {count}</h1>
        <button 
          style={{ backgroundColor: 'purple', color: 'white', padding: '8px 16px', borderRadius: '4px' }}
          onClick={() => { setCount(count+1) }}
        >
          Increase Count
        </button>
      </div> */}
      {/*       
      {count>=10 ? countAlert() : ''} */}
    </>
  );
}

export default App;
