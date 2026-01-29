      //LETS UNDERSTAND CHILDREN IN REACT


                // import React from 'react';

                // const Card = ({ children }) => {
                //     return (
                //         <div style={{
                //             border: '1px solid #ccc',
                //             borderRadius: '5px',
                //             padding: '20px',
                //             margin: '10px',
                //             boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)',
                //         }}>
                //             {children}
                //         </div>
                //     );
                // };

                // const App = () => {
                //     return (
                //         <div>
                //             <Card>
                //                 <h2>Card Title</h2>
                //                 <p>This is some content inside the card.</p>
                //             </Card>
                //             <Card>
                //                 <h2>Another Card</h2>
                //                 <textarea type="text"></textarea>
                //                 <p>This card has different content!</p>
                //             </Card>
                //         </div>
                //     );
                // };

                // export default App;

  //KEYS AND LIST


  // import React from 'react';

  // const App=()=>{
  //   const todos=[{
  //     title:"Go to the gym",
  //     done:false
  //   },{
  //     title:"Eat food",
  //     done:true
  //   }];

  //   const todoComponents=todos.map(todo => <Todo title={todo.title} done={todo.done} />)

  //   return (
  //     <div>
  //       {todoComponents}
  //     </div>
  //   )
  // };

  // function Todo({title,done}){
  //   return (
  //     <div>
  //       {title} - {done ? "Done!":"Not done!"}
  //     </div>
  //   )
  // }

  // export default App;


import React from 'react';

const App=() => {
  return (
    <div>
      <ErrorBoundary>
          <Card1/>
      </ErrorBoundary>
      <Card2/>
    </div>
  );
}

function Card1(){

  // throw new Error("Error while rendering bro")     //this line cause the whole website creash 
   throw new Error("Error while rendering bro") 
  return (
    <div style={{backgroundColor:"red",padding:20,margin:30,borderRadius:20}}>
      Hello Brother
    </div>
  );
}


function Card2(){
  return (
    <div style={{backgroundColor:"gray",borderRadius:20,margin:20,padding:20}}>Hiii there</div>
  );
}

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.error("Error caught:", error, info);
    }

    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong.</h1>;
        }

        return this.props.children; 
    }
}


export default App;