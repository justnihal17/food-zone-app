import { Component } from "react";
class Contect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 1,
      Data: {},
    };
  }
  componentDidMount() {
    // let i = 0;
    // const Fetch = async () => {
    //   const response = await fetch("https://api.github.com/users/AamirRajput");
    //   const jsondata = await response.json();
    //   this.setState({ Data: jsondata });
    //   console.log(jsondata);
    // };
    // this.count = setInterval(() => {}, 1000);
    // Fetch();
  }
  // componentDidUpdate(prevProps,prevState){
  //   if(prevState.count != )
  // }
  componentWillUnmount() {
    clearInterval(this.count);
  }
  render() {
    const { name, age } = this.props;
    console.log(this.state.Data.avatar_url);
    console.log(this.state.Data.created_at);
    console.log(this.state.Data.name);
    return (
      // <div
      //   style={{
      //     display: "flex",
      //     height: "100vh",
      //     width: "100vw",
      //     marginTop: "30px",
      //     alignItems: "center",
      //     display: "flex",
      //     flexDirection: "column",
      //     gap: "20px",
      //   }}
      // >
      //   <div className="profile-card">
      //     <img
      //       className="profile-img"
      //       src={this.state.Data.avatar_url}
      //       alt="profile"
      //     />

      //     <h2 className="profile-name">{this.state.Data.name}</h2>

      //     <p className="profile-date">Created: {this.state.Data.created_at}</p>
      //   </div>

      //   <h1>Name : {name}</h1>
      //   <h2>Age : {age}</h2>
      //   <h1>CountContect : {this.state.count}</h1>
      //   <h1>CountContect : {this.state.count2}</h1>
      //   <button onClick={() => this.setState({ count: this.state.count + 1 })}>
      //     +
      //   </button>
      //   <button
      //     onClick={() => this.setState({ count2: this.state.count2 - 1 })}
      //   >
      //     -
      //   </button>
      // </div>
      <div className="flex flex-col gap-2 w-60 py-4 px-4">
        <input
          type="text"
          className="border rounded-2xl m-2 p-2 px- 2"
          placeholder="Name"
        />
        <input
          type="text"
          className="border rounded-2xl m-2 p-2 px-2"
          placeholder="Massage"
        />
        <button className="bg-amber-400 border rounded-2xl py-2 px-5">
          {" "}
          Add
        </button>
      </div>
    );
  }
}

export default Contect;
