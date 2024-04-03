interface IGreeting {
  name: string;
}

const Greeting = (props: IGreeting) => {
  return <h3>Greeting, {props.name}</h3>;
};

export default Greeting;
